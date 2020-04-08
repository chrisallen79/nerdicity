import bcrypt from 'bcryptjs';
import express from 'express';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import auth from '../../middleware/auth';
import CONFIG from '../../../config/config';
import User from '../../models/User';

const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate User
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    // return 400 for any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // verify that user doesn't already exist
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: `Invalid user or password` }] });
      }

      // ensure that user name and password are matched
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: `Invalid user or password` }] });
      }

      // create and sign jwt payload
      const payload = {
        user: {
          id: user.id
        }
      };
      return jwt.sign(
        payload,
        CONFIG.jwt_secret,
        { expiresIn: CONFIG.jwt_expiration },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Internal server error');
    }
  }
);

export default router;
