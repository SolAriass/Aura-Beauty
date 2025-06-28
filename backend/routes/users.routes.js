const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/users.controller');

router.post('/registro', registerUser);
router.post('/login', loginUser);

module.exports = router;
