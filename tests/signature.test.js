import { createHmac } from 'crypto';
import { expect, jest, test } from '@jest/globals';
import validateSignature from '../utils/validate-signature.js';
import validateLineSignature from '../middleware/validate-line-signature.js';

jest.mock('../config/index.js', () => ({
  __esModule: true,
  default: {
    ...jest.requireActual('../config/index.js').default,
    LINE_CHANNEL_SECRET: 'signature-test-fixture',
  },
}));

const body = '{"events":[]}';
const secret = 'signature-test-fixture';
const signature = createHmac('SHA256', secret).update(body).digest('base64');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const nonCanonical = `${signature.slice(0, 42)}${alphabet[alphabet.indexOf(signature[42]) + 1]}=`;

const invalidSignatures = [
  ['missing', undefined],
  ['null', null],
  ['empty', ''],
  ['blank', '   '],
  ['number', 123],
  ['object', {}],
  ['array', [signature]],
  ['buffer', Buffer.from(signature)],
  ['short', 'YWJj'],
  ['long', `${signature}AAAA`],
  ['invalid characters', `${signature.slice(0, 42)}!=`],
  ['missing padding', signature.slice(0, -1)],
  ['leading whitespace', ` ${signature}`],
  ['trailing newline', `${signature}\n`],
  ['noncanonical padding bits', nonCanonical],
  ['wrong digest', createHmac('SHA256', secret).update('different body').digest('base64')],
];

test.each(invalidSignatures)('rejects %s without throwing', (name, value) => {
  expect(validateSignature(body, secret, value)).toBe(false);
});

test('accepts a valid signature and rejects a changed body', () => {
  expect(validateSignature(body, secret, signature)).toBe(true);
  expect(validateSignature(`${body} `, secret, signature)).toBe(false);
});

test.each(invalidSignatures)('middleware returns 403 for %s', (name, value) => {
  const req = { rawBody: body, header: jest.fn(() => value) };
  const res = { sendStatus: jest.fn() };
  const next = jest.fn();
  expect(() => validateLineSignature(req, res, next)).not.toThrow();
  expect(req.header).toHaveBeenCalledWith('x-line-signature');
  expect(res.sendStatus).toHaveBeenCalledWith(403);
  expect(next).not.toHaveBeenCalled();
});

test('middleware continues for a valid signature', () => {
  const req = { rawBody: body, header: jest.fn(() => signature) };
  const res = { sendStatus: jest.fn() };
  const next = jest.fn();
  validateLineSignature(req, res, next);
  expect(next).toHaveBeenCalledTimes(1);
  expect(res.sendStatus).not.toHaveBeenCalled();
});
