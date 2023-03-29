const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// To fetch FDF file for portfolio form
app.get("/api/get-definition-file", async (req, res) => {
  const client = await MongoClient.connect(
    "mongodb+srv://user_1:mukul@cluster0.zu4ssht.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("Demo");
  const result = await db.collection("File_Definiton_File").find({}).toArray();
  res.json(result);
});

app.listen(port, () => `Listening on port ${port}`);
