const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    participant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    lastMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Message'
    },
    unreadMessage : {
        type : Number,
        default : 0
    }
}, {timestamps : true});

const conversationModel = mongoose.model('Conversation', conversationSchema);

module.exports = conversationModel;