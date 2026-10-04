import {
  createHmac,
  timingSafeEqual,
} from 'crypto';

const safeCompare = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  return timingSafeEqual(a, b);
};

const validateSignature = (
  body,
  secret,
  signature,
) => {
  if (typeof signature !== 'string' || !/^[A-Za-z0-9+/]{43}=$/.test(signature)) {
    return false;
  }
  const decoded = Buffer.from(signature, 'base64');
  if (decoded.toString('base64') !== signature) return false;
  return safeCompare(
    createHmac('SHA256', secret).update(body).digest(),
    decoded,
  );
};

export default validateSignature;
