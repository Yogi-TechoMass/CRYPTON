const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    usn: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: "Cybersecurity enthusiast"
    },
    profilePicture: {
        type: String,
        default: "https://api.dicebear.com/7.x/avataaars/svg?seed=crypton"
    },
    badges: [{
        name: String,
        dateEarned: Date
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
