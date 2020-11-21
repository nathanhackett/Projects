//From John Keating Lecture 20.01-05 REST

const mongoose = require('mongoose');
// create a mongoose schema for therapists
const SessionSchema = mongoose.Schema({
    SessionDate: String,
    SessionTime: String,
    Client_s: String,
    Therapist: String,
    Fee: String,
    SessionNumber: Number,
    SessionDuration: Number,
    Issue_Flag: String,
    Notes: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Session', SessionSchema);