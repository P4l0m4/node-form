const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const MongoClient = mongodb.MongoClient;
const dbName = "test-form";
dbConnection = mongodb.MongoClient.connect(connectionURL);

app.listen(port, () => {
  console.log("Server is up");
});

app.use(express.static(path.join(__dirname, "../src")));

//CONNECTION SETUP
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connected to database");
    const db = client.db(dbName);
    db.collection("messages").insertOne({
      message: "Midas",
    });
    console.log("data sent");
  }
);
