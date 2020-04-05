import bcrypt from 'bcryptjs';
import express from 'express';
import { check, validationResult } from 'express-validator';
import gravatar from 'gravatar';
import jwt from 'jsonwebtoken';
import CONFIG from '../../../config/config';
import { User } from '../../models/User';

const router = express.Router();

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check(
      'password',
      'Password does not meet minimum requirements'
    ).isLength(8)
  ],
  async (req, res) => {
    // return 400 for any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // verify that user doesn't already exist
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({
            errors: [
              { msg: `User with email ${email} already exists` }
            ]
          });
      }

      // set up the avatar
      const avatar = gravatar.url(email, {
        s: 200,
        r: 'pg',
        d: 'mm'
      });

      // create a new user
      user = new User({
        name,
        email,
        avatar,
        password
      });

      // salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user.password = hashedPassword;

      // save the user
      await user.save();

      // create and sign jwt payload
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
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
      res.status(500).send('Internal server error');
    }
  }
);

export default router;
