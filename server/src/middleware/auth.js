import jwt from 'jsonwebtoken';
import CONFIG from '../../config/config';

export const auth = (req, res, next) => {
  // get token from header
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, CONFIG.jwt_secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
