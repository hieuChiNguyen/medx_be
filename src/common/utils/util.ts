import jwt from 'jsonwebtoken';
import { env } from '@env';

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export function createJwtToken(userId: number, email: string) {
  return jwt.sign(
    {
      id: userId,
      email: email,
    },

    env.auth.jwtSecret as jwt.Secret,
    {
      expiresIn: env.auth.expiresIn,
    },
  );
}
