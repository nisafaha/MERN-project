import express from "express";
import {PORT, mongodb} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js";
 
const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Hello World!");
});

app.use("/books", bookRoute);


// Route save book
// app.post("/addbooks", async (req, res) => {
//     try {
//         if(
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.publishYear
//         ) {
//             return res.status(400).send({
//                 message: "Send request"
//             });
//         }

//         const newBook = {
//             title: req.body.title,
//             author: req.body.author,
//             publishYear: req.body.publishYear,
//         };

//         const book = await Book.create(newBook);

//         return res.status(201).send(book);

//     } 
//     catch (err) {
//         console.log(err.message);
//         res.status(500).send({message: err.message});
//     }
// });

// // Route get all books
// app.get("/books", async (req, res) => {
//     try {
//         const books = await Book.find({});
//         return res.status(200).json({
//             count: books.length,
//             data: books,
//         });
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({message: err.message});
//     }
// });


// // Route get book by id
// app.get("/books/:id", async (req, res) => {
//     try {

//         const {id} = req.params;
//         const book = await Book.findById(id);

//         return res.status(200).json({
//             count: book.length,
//             data: book,
//         });
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({message: err.message});
//     }
// });

// app.put("/books/:id", async (req, res) => {
//     try{
//         if (
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.publishYear
//         ) {
//             return res.status(400).send({
//                 message: "Send request"
//             });
//         }

//         const {id} = req.params;
//         const result = await Book.findByIdAndUpdate(id, req.body);

//         if(!result) {
//             return res.status(404).json({
//                 message: "Not found"
//             });
//         }
//         return res.status(200).send({
//             message: "Updated"
//         });

//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({message: err.message});
//     }
// });


// app.delete("/books/:id", async (req, res) => {
//     try {
//         const {id} = req.params;
//         const result = await Book.findByIdAndDelete(id);

//         if(!result) {
//             return res.status(404).json({
//                 message: "Not found"
//             });
//         }
//         return res.status(200).send({
//             message: "Deleted"
//         });
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({message: err.message});
//     }
// });
mongoose
    .connect(mongodb)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`App listening on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });