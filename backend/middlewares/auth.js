/* eslint-disable func-names */
import jwt from 'jsonwebtoken';
import UnAuthorizedError from '../utils/instanceOfErrors/unAuthorizedError.js';

export default function (req, res, next) {
  const cookie = req.cookies.jwt;
  // const { authorization } = req.headers;

  /* if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnAuthorizedError('Необходима авторизация.'));
  }

  const token = authorization.replace('Bearer ', ''); */
  let payload;

  try {
    payload = jwt.verify(
      cookie,
      // token,
      process.env.NODE_ENV === 'production'
        ? process.env.JWT_SECRET
        : 'dev-secret',
    );
  } catch (err) {
    return next(new UnAuthorizedError('Необходима авторизация.'));
  }

  req.user = payload;

  return next();
}
