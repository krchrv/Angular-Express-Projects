const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;
const TaskSchema = new Schema({
    title: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: 5,
        unique: true
    },
    description: { 
        type: String, 
        trim: true,
        default: ''
        },
    completed: { 
        type: Boolean, 
        required: true,
        default: false
    }
}, {timestamps: true});

TaskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Task', TaskSchema);