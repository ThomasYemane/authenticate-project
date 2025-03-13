// backend/routes/api/index.js
const router = require('express').Router();


router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});



// const router = express.Router();
// const require = require('express');
// const { User } = require('../../db/models');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const bcrypt = require('bcryptjs');
// const { Op } = require('sequelize');

// // Restore user session
// router.use(restoreUser);

// // Login route
// router.post('/login', [
//   check('credential')
//     .exists({ checkFalsy: true })
//     .withMessage('Email or username is required'),
//   check('password')
//     .exists({ checkFalsy: true })
//     .withMessage('Password is required'),
//   handleValidationErrors
// ], async (req, res) => {
//   const { credential, password } = req.body;

//   const user = await User.findOne({
//     where: {
//       [Op.or]: [{ username: credential }, { email: credential }]
//     }
//   });

//   if (!user || !bcrypt.compareSync(password, user.hashedPassword)) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// // Signup route
// router.post('/signup', [
//   check('username')
//     .exists({ checkFalsy: true })
//     .withMessage('Username is required')
//     .isLength({ min: 4 })
//     .withMessage('Username must be at least 4 characters long'),
//   check('email')
//     .exists({ checkFalsy: true })
//     .withMessage('Email is required')
//     .isEmail()
//     .withMessage('Invalid email address'),
//   check('password')
//     .exists({ checkFalsy: true })
//     .withMessage('Password is required')
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least 6 characters long'),
//   handleValidationErrors
// ], async (req, res) => {
//   const { username, email, password } = req.body;

//   const hashedPassword = bcrypt.hashSync(password);
//   const user = await User.create({ username, email, hashedPassword });

//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// // Logout route
// router.delete('/logout', (req, res) => {
//   res.clearCookie('token');
//   return res.json({ message: 'Successfully logged out' });
// });

module.exports = router;