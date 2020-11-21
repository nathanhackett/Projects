//From John Keating Lecture 20.01-05 REST

const mongoose = require('mongoose');
// create a mongoose schema for clients
const ClientSchema = mongoose.Schema({
    Title: String,
    Firstname: String,
    Surname: String,
    Mobile: Number,
    Home_Phone: Number,
    Email_Address: String,
    Role: String,
    U18: String,
    D_O_B: String,
    Parent_Guardian: String,
    Permission_to_Message_Mobile: String,
    Mobile: Number,
    Home_Phone: Number,
    PG_Email_Address: String,
    Record_Created: String,
    Marital_Status: String,
    Referred_by: String,
    AddressLine1: String, 
    AddressLine2: String, 
    Town: String, 
    CountyCity: String, 
    Eircode: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Client', ClientSchema);