import express from 'express';

import auth from '../../middleware/auth';
import Profile from '../../models/Profile';
import User from '../../models/User';

const router = express.Router();

// @route   GET api/profile/me
// @desc    Get current user profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: `No profile for ${req.user.email}` });
    }

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Internal Server Error');
  }
});

// @route   POST api/profile
// @desc    Create or update profile for user
// @access  Private
router.post('/', auth, async (req, res) => {
  const {
    location,
    bio,
    youtube,
    twitter,
    facebook,
    instagram
  } = req.body;

  // create profile
  const profileData = {
    user: req.user.id,
    location,
    bio,
    social: {
      youtube,
      twitter,
      facebook,
      instagram
    }
  };

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    // update user if it exists
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileData },
        { new: true }
      );

      return res.json(profile);
    }

    // save new profile
    profile = new Profile(profileData);
    await profile.save();

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Internal Server Error');
  }
});

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'name',
      'avatar'
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

// @route   GET api/profile/user/:userId
// @desc    Get user profile by userId
// @access  Public
router.get('/user/:userId', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.userId
    }).populate('user', ['name', 'avatar']);

    if (!profile)
      return res
        .status(400)
        .json({ msg: `User '${req.params.userId}' not found` });

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res
        .status(400)
        .json({ msg: `User '${req.params.userId} not found` });
    }
    return res.status(500).send('Internal Server Error');
  }
});

// @route   DELETE api/profile
// @desc    Delete profile, user & posts
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    // @todo - remove user's posts

    // remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });

    return res.json({ msg: `Deleted user '${req.user.id}'` });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Internal Server Error');
  }
});

export default router;
