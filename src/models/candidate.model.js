const mongoose = require('mongoose');

const cadidateSchema = new mongoose.Schema({
    image: {
        type: String,
        unique: true,
        trim: true
    },
    name: {
        first: {
            type: String,
            required: true,
            trim: true
        },
        last: {
            type: String,
            required: true,
            trim: true
        },
    },
    profession: {
        type: String,
        required: true,
        trim: true
    },
    networks: {
        type: [String],
        unique: true,
        trim: true
    },
    information: {
        age: {
            type: Number,
            required: true,
            trim: true,
            min: 18
        },
        address: {
            community: {
                type: String,
                required: true,
                trim: true
            },
            locality: {
                type: String,
                required: true,
                trim: true
            },
            pc: {
                type: Number,
                required: true,
                trim: true
            }
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        },
        keywords: {
            type: [String],
            trim: true,
        },
        training: {
            type: {
                type: String,
                required:true,
                trim: true
            },
            name: {
                type: String,
                required: true,
                trim: true
            },
            center: {
                type: String,
                trim: true
            }
        }
    }
},{timestamps:true});


const Candidate = mongoose.model('candidates', cadidateSchema);
module.exports = Candidate;
