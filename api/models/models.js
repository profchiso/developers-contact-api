const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
const devloperSchema = new Schema({
    fullname:{
        type: String,
        required: "devloper's name required"
    },
   email: {
       type: String,
       required: "developer's E-mail required"
    },
    phone:{
        type: String,
        required: "Phone Number required"
    },
    stack:{
        type: String,
        required: "Enter developer's stack"
    },
    dateAdded:{
        type: Date,
        default: Date.now

    }
});

module.exports = mongoose.model('developers',devloperSchema );