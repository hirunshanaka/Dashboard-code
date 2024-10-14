const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection URL and Database Name
const uri = "mongodb://localhost:27017"; // For local MongoDB
const dbName = "test001";

let db;

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB");
    db = client.db(dbName); // Select the database
  })
  .catch((error) => console.error("Could not connect to MongoDB", error));

// API route to handle book uploads
app.post("/upload-book", async (req, res) => {
  const { bookTitle, authorName, imageURL, category, bookDescription } = req.body;

  try {
    // Insert book into MongoDB collection
    const result = await db.collection("books").insertOne({
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
    });

    res.status(201).send({ message: "Book uploaded successfully!", bookId: result.insertedId });
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).send({ message: "Error uploading book", error });
  }
});

// API route to get all books
app.get("/all-books", async (req, res) => {
  try {
    res.set("Cache-Control", "no-store"); // Disable caching
    const books = await db.collection("books").find().toArray();
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send({ message: "Error fetching books", error });
  }
});

// API route to delete a book by ID
app.delete("/book/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.collection("books").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
      res.status(200).send({ message: "Book deleted successfully!" });
    } else {
      res.status(404).send({ message: "Book not found!" });
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send({ message: "Error deleting book", error });
  }
});

// API route to edit a book by ID
app.put("/book/:id", async (req, res) => {
  const { id } = req.params;
  const { bookTitle, authorName, imageURL, category, bookDescription } = req.body;

  try {
    const result = await db.collection("books").updateOne(
      { _id: new ObjectId(id) },
      { $set: { bookTitle, authorName, imageURL, category, bookDescription } }
    );

    if (result.modifiedCount === 1) {
      res.status(200).send({ message: "Book updated successfully!" });
    } else {
      res.status(404).send({ message: "Book not found!" });
    }
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: "Error updating book", error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

