const axios = require('axios');
const Book = require('../models/Book');

module.exports = class LoaderBookDB {
  static async loader() {
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const searchTerms = ['programming', 'science', 'ciencia', 'java', 'python', 'arte', 'poema', 'esporte', 'soccer', 'games', 'web', 'war', 'guerra'];
    const maxResults = 20;
    const fields = 'items(volumeInfo(title,subtitle,authors,publisher,publishedDate,description,industryIdentifiers,pageCount,averageRating,imageLinks,language),saleInfo(retailPrice, buyLink))';

    try {
      for (const searchTerm of searchTerms) {
        const requestUrl = `${url}?q=${searchTerm}&maxResults=${maxResults}&fields=${fields}`;
        const response = await axios.get(requestUrl);
        const books = response.data.items.map(item => item.volumeInfo);

        for (const bookData of books) {
          const {
            title,
            subtitle = null,
            authors,
            publisher = null,
            publishedDate = null,
            description = null,
            industryIdentifiers = null,
            pageCount = null,
            imageLinks = null,
            language = null,
            averageRating = null,
          } = bookData;

          const saleInfo = bookData.saleInfo || {};
          //const authorss = bookData.authors.join(', ') || null;
          const { retailPrice, buyLink } = saleInfo;
          const amount = retailPrice?.amount || null;
          const industryIdentifier = industryIdentifiers?.[0]?.identifier || null;

          const book = new Book({
            title,
            subtitle,
            authors: authors,
            publisher,
            publishedDate,
            description,
            ISBN: industryIdentifier,
            pageCount,
            thumbnail: imageLinks?.thumbnail,
            language,
            amount,
            buyLink,
            averageRating,
          });
          console.log(book);

          try {
            const savedBook = await book.save();
            console.log("Livro salvo:", savedBook);
          } catch (error) {
            console.error("Erro ao salvar o livro:", error);
          }
        }
      }
    } catch (error) {
      console.error("Erro na requisição à API do Google Books:", error);
    }
  }
}
