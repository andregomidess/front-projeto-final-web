const router = require('express').Router();
const UserController = require('../controllers/UserController');

//middlewares
const verifyToken = require('../helpers/check-token');
const {imageUpload} = require('../helpers/image-upload');
const LoaderBookDB = require('../loader/loaderBooksDB');

router.get('/loader', LoaderBookDB.loader);
router.post('/register', imageUpload.single("image"), UserController.register);
router.post('/login', UserController.login);
router.get('/checkUser', UserController.checkUser);
router.get('/:id', UserController.getUserById);
router.patch('/edit/:id', verifyToken, imageUpload.single("image"), UserController.editUser);

module.exports = router;