const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getPerfil } = require('../controllers/users.controller');


router.post('/registro', registerUser);
router.post('/login', loginUser);
router.post('/home', loginUser);
router.get('/perfil', getPerfil);


module.exports = router;
