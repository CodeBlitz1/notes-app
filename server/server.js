const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/notes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://Shripad:test123@ac-ux3enfi-shard-00-00.0gy0bum.mongodb.net:27017,ac-ux3enfi-shard-00-01.0gy0bum.mongodb.net:27017,ac-ux3enfi-shard-00-02.0gy0bum.mongodb.net:27017/?ssl=true&replicaSet=atlas-z89hga-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));