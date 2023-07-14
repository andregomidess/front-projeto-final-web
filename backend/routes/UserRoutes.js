const router = require('express').Router();
const UserController = require('../controllers/UserController');

//middlewares
const verifyToken = require('../helpers/check-token');
const {imageUpload} = require('../helpers/image-upload');

router.post('/register', imageUpload.single("image"), UserController.register);
router.post('/login', UserController.login);
router.get('/getFavoriteBooks', verifyToken, UserController.getFavoriteBooks);
router.get('/checkUser', UserController.checkUser);
router.get('/:id', UserController.getUserById);
router.patch('/edit/:id', verifyToken, imageUpload.single("image"), UserController.editUser);
router.post('/favoriteBook', verifyToken, UserController.favoriteBook);



module.exports = router;
