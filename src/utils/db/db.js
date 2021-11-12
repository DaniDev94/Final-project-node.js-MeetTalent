 const mongoose = require("mongoose");
require("dotenv").config();
const urlDb = process.env.ATLASDBURL;
//console.log(urlDb)
const connectWithDb = async () => {
  try {
    const db = await mongoose.connect(urlDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(name);
    console.log(`Connected with db name: ${name} in host: ${host}`);
  } catch (error) {
    console.error("Error to connect with db", error);
  }
};
module.exports = {
  connectWithDb,
};
 