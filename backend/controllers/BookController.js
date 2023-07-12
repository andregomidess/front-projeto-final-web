const Book = require('../models/Book');
const ObjectId = require('mongoose').Types.ObjectId;


module.exports = class BookController {
  //criar um livro
  static async create(req, res) {

    const {
      title,
      subtitle = null,
      authors,
      publisher,
      publishedDate,
      description,
      ISBN = null,
      pageCount = null,
      averageRating = null,
      thumbnail = null,
      language = null,
      amount = null,
      buyLink = null
    } = req.body;

    //upload de imagem
    const image = req.file ? req.file.filename : '';

    //validations
    if (!title) {
      res.status(422).json({
        message: 'O titulo é obrigatório'
      });
      return;
    }

    if (!authors) {
      res.status(422).json({
        message: 'O autor é obrigatório'
      });
      return;
    }

    if (!publishedDate) {
      res.status(422).json({
        message: 'A data de publicação é obrigatório'
      });
      return;
    }

    if (!publisher) {
      res.status(422).json({
        message: 'A editora é obrigatório'
      });
      return;
    }

    if (!description) {
      res.status(422).json({
        message: 'A descrição é obrigatório'
      });
      return;
    }

    //criar um livro

    const book = new Book({
      title,
      subtitle,
      authors,
      publisher,
      publishedDate,
      description,
      ISBN,
      pageCount,
      averageRating,
      thumbnail,
      language,
      amount,
      buyLink,
      thumbnail: image
    })

    try {
      const newBook = await book.save();
      res.status(200).json({
        message: 'Livro cadastrado com sucesso',
        newBook
      });
    } catch (e) {
      res.status(500).json({
        message: e.message
      });
    }

  }

  static async getAll(req, res) {
    const books = await Book.find().sort('-createdAt');
    res.status(200).json({
      books: books
    });
  }

  static async getBookById(req, res) {
    const id = req.params.id;

    // checar se o ID é valido
    if (!ObjectId.isValid(id)) {
      res.status(422).json({
        message: 'ID inválido'
      });
      return;
    }

    const book = Book.findOne({
      _id: id
    });
    if (!book) {
      res.status(404).json({
        message: 'Livro não encontrado'
      });
    }

    res.status(200).json({
      book: book
    });
  }

  static async deleteBookById(req, res) {
    const id = req.params.id;

    // checar se o ID é valido
    if (!ObjectId.isValid(id)) {
      res.status(422).json({
        message: 'ID inválido'
      });
      return;
    }

    //checa se existe o livro na base de dados
    const book = await Book.findOne({
      _id: id
    });
    if (!book) {
      res.status(404).json({
        message: 'Livro não encontrado'
      });
      return;
    }

    await Book.findByIdAndRemove(id);
    res.status(200).json({
      message: 'Livro removido com sucesso!'
    });
  }

  static async updateBookById(req, res) {
    const id = req.params.id;
    const {
      title,
      subtitle,
      authors,
      publisher,
      publishedDate,
      description,
      ISBN,
      pageCount,
      averageRating,
      language,
      amount,
      buyLink,
      categories,
    } = req.body;

    const updatedData = {};

    // checar se o ID é valido
    if (!ObjectId.isValid(id)) {
      res.status(422).json({
        message: 'ID inválido'
      });
      return;
    }

    // checa se o livro existe
    const book = await Book.findOne({
      _id: id
    });
    if (!book) {
      res.status(404).json({
        message: 'Livro não encontrado'
      });
      return;
    }

    if (title) {
      updatedData.title = title;
    }

    if (subtitle) {
      updatedData.subtitle = subtitle;
    }

    if (authors) {
      updatedData.authors = authors;
    }

    if (publisher) {
      updatedData.publisher = publisher;
    }

    if (publishedDate) {
      updatedData.publishedDate = publishedDate;
    }

    if (description) {
      updatedData.description = description;
    }

    if (ISBN) {
      updatedData.ISBN = ISBN;
    }

    if (pageCount) {
      updatedData.pageCount = pageCount;
    }

    if (averageRating) {
      updatedData.averageRating = averageRating;
    }

    if (language) {
      updatedData.language = language;
    }

    if (amount) {
      updatedData.amount = amount;
    }

    if (buyLink) {
      updatedData.buyLink = buyLink;
    }

    if (categories) {
      updatedData.buyLink = categories;
    }

    if (req.file) {
      updatedData.thumbnail = req.file.filename;
    }


    await Book.findByIdAndUpdate(id, updatedData);
    res.status(200).json({ message: 'livro atualizado com sucesso' });

  }
}
