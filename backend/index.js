import express from "express";
import {PORT, mongodb} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";

 
const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Hello World!");
});

// Route save book
app.post("/addbooks", async (req, res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send request"
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);

    } 
    catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
});

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json(books);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
});

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