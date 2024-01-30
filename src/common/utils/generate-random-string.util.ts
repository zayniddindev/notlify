import { randomBytes } from 'crypto';

export function generateUniqueString(length: number) {
  const random_bytes = randomBytes(256);
  const randomHash = random_bytes.toString('hex').slice(0, length);

  return randomHash;
}
