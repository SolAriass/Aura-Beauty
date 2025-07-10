const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getById  } = require('../controllers/users.controller');


router.post('/registro', registerUser);
router.post('/login', loginUser);
router.post('/home', loginUser);
router.get('/:id', getById);

module.exports = router;
