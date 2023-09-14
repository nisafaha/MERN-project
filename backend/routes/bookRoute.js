import express from "express";
import { Book } from "../models/bookModel.js";


const router = express.Router();

// Route for add book
router.post("/", async (req, res) => {

});

// Route for get all book
router.get("/", async (req, res) => {

});

// Route for get book by id
router.get("/:id", async (req, res) => {

});

// Route for update book by id
router.put("/:id", async (req, res) => {

});

// Route for delete book by id
router.delete("/:id", async (req, res) => {

});

export default router;