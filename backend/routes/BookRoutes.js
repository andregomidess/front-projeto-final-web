const router = require('express').Router();

const BookController = require('../controllers/BookController');

//middleware
const verifyToken = require('../helpers/check-token');
const {imageUpload} = require('../helpers/image-upload');
const LoaderBookDB = require('../loader/loaderBooksDB');

//router.get('/loader', LoaderBookDB.loader); // rota para dar carga no banco
router.post('/create', verifyToken, imageUpload.single("image"), BookController.create);
router.get('/', BookController.getAll);
router.get('/:id', BookController.getBookById);
router.delete('/:id', verifyToken, BookController.deleteBookById);
router.patch('/:id', verifyToken, imageUpload.single("image"), BookController.updateBookById);


module.exports = router;