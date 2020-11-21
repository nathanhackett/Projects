//From John Keating Lecture 20.01-05 REST

const mongoose = require('mongoose');
// create a mongoose schema for therapists
const TherapistSchema = mongoose.Schema({
    Title: String,
    Firstname: String,
    Surname: String,
    Role: String,
    Mobile: Number,
    Home_Phone: Number,
    Email_Address: String,
    AddressLine1: String, 
    AddressLine2: String, 
    Town: String, 
    CountyCity: String, 
    Eircode: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Therapist', TherapistSchema);