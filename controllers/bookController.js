const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  let id;
  try {
    data = await bookModel.find();
    console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre, id: book._id });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};


const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};

const postBookList = async (req, res) => {
    console.log(req.params.name);
    if(req.params.name == ':delete'){
    await bookModel.findByIdAndDelete(req.body.id);
    res.redirect("/book-list");
    }
    else if(req.params.name == ':edit'){
      this.id = req.body.id;
      console.log(this.id);
      res.redirect('/edit');
    }
}

const deleteBook = async (req, res) => {
  await bookModel.findByIdAndDelete(req.body.id);
  res.redirect('/book-list');
}

const getEdit = (req, res) => {
  res.render('editBooks');
}

const editBook = (req, res) => {
  this.id = req.body.id;
  console.log(this.id);
  res.redirect('/edit');
}

const postEditBooks = async (req, res) => {
  await bookModel.findByIdAndUpdate(this.id, {name: req.body.name, author: req.body.author, genre: req.body.genre}, (err, docs) => {
    if(err){
      console.log(err);
    }else{
      console.log("updated :", docs );
    }
  }).clone();
  res.redirect('/book-list');
} 





module.exports = { getBookList, getBook, postBook, postBookList, postEditBooks, getEdit, deleteBook, editBook};
