const Book = require('../model/book.js')

const gohome = (req, res) =>{
    res.render('../view/home.ejs');
}

const goBook = (req, res) => {
    const query = Book.find();
    query.select('name writer genre');
    query.exec((err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.render('../view/books.ejs', {data: result});
        }
    })
}

const goAddBook= (req, res) => {
    res.render('../view/addbooks.ejs');
}

const addBooks_post = (req, res) => {
    let book  = new Book({
        name: req.body.name,
        writer: req.body.writer,
        genre: req.body.genre
    })
    book.save((err,res) => {
        if  (err){
            console.log(err);
        } else{
            console.log(res);
        }
    })
    // res.send(book);
}

module.exports = {gohome, goBook, goAddBook, addBooks_post}