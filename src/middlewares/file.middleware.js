const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudStorage } = require('multer-storage-cloudinary');
require("dotenv").config();

const storage = new CloudStorage({
    cloudinary: cloudinary,
    params: {
        folder: process.env.NODE_ENV
    }
})


const upload = multer({ storage });

module.exports = upload;
