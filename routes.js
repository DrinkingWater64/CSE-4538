const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");

router.get("/", homeController.getHome);
router.get("/book-list", bookController.getBookList);
router.post("/book-list/delete", bookController.deleteBook);
router.post("/book-list/edit", bookController.editBook);
router.get("/books", bookController.getBook);
router.post("/books", bookController.postBook);
router.get("/edit", bookController.getEdit);
router.post("/edit", bookController.postEditBooks);

module.exports = router;
