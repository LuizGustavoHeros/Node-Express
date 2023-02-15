import mongoose from "mongoose";

mongoose.connect("mongodb+srv://senac:123@senac.39z8knd.mongodb.net/Senac");

let db = mongoose.connection;

export default db;