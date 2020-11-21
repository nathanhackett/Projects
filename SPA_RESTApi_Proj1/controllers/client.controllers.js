//From John Keating CS230 Lecture 20.01-05 REST

const Client = require('../models/client.models.js');
// Create a new Quotation and save to the database

exports.create = (req, res) => {
    // Create a new Quotation (using schema)
    const clients = new Client({
        Title: req.body.Title,
        Firstname: req.body.Firstname,
        Surname: req.body.Surname,
        Mobile: req.body.Mobile,
        Home_Phone: req.body.Home_Phone,
        Email_Address: req.body.Email_Address,
        Role: req.body.Role,
        U18: req.body.U18,
        D_O_B: req.body.D_O_B,
        Parent_Guardian: req.body.Parent_Guardian,
        Permission_to_Message_Mobile: req.body.Permission_to_Message_Mobile,
        Mobile: req.body.Mobile,
        Home_Phone: req.body.Home_Phone,
        PG_Email_Address: req.body.PG_Email_Address,
        Record_Created: req.body.Record_Created,
        Marital_Status: req.body.Marital_Status,
        Referred_by: req.body.Referred_by,
        AddressLine1: req.body.AddressLine1, 
        AddressLine2: req.body.AddressLine2, 
        Town: req.body.Town, 
        CountyCity: req.body.CountyCity, 
        Eircode: req.body.Eircode
    });
    // Save Quotation in the database
    clients.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Quotation."
        });
    });
};


//Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Client.find()
    .then(clients => {
        res.send(clients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};


// Find a single note with a noteId
exports.findOne = (req, res) => {
    Client.findById(req.params._Id)
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "clients not found with id " + req.params._Id
            });
        }
        res.send(clients);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "clients not found with id " + req.params._Id
            });
        }
        return res.status(500).send({
            message: "Error retrieving clients with id " + req.params._Id
        });
    });
};


// Update a Quotation identified by the noteId in the request
exports.update = (req, res) => {
    // Find the Quotation and update it with the request body
    Client.findByIdAndUpdate(req.params._Id, {
        Title: req.body.Title,
        Firstname: req.body.Firstname,
        Surname: req.body.Surname,
        Mobile: req.body.Mobile,
        Home_Phone: req.body.Home_Phone,
        Email_Address: req.body.Email_Address,
        Role: req.body.Role,
        U18: req.body.U18,
        D_O_B: req.body.D_O_B,
        Parent_Guardian: req.body.Parent_Guardian,
        Permission_to_Message_Mobile: req.body.Permission_to_Message_Mobile,
        Mobile: req.body.Mobile,
        Home_Phone: req.body.Home_Phone,
        PG_Email_Address: req.body.PG_Email_Address,
        Record_Created: req.body.Record_Created,
        Marital_Status: req.body.Marital_Status,
        Referred_by: req.body.Referred_by,
        AddressLine1: req.body.AddressLine1, 
        AddressLine2: req.body.AddressLine2, 
        Town: req.body.Town, 
        CountyCity: req.body.CountyCity, 
        Eircode: req.body.Eircode
    },  { $set: req.body }, // $set - modify only the supplied fields
        { new: true }) // "new: true" return updated object
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "clients not found with id " + req.params._Id
            });
        }
        res.send(clients);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "clients not found with id " + req.params._Id
            });
        }
        return res.status(500).send({
            message: "Error updating clients with id " + req.params._Id
        });
    });
};


// Update a Quotation identified by the quotationId in the request
exports.updateQuote = (req, res) => {
    // Find the Quotation and update it with the request body
    Client.findByIdAndUpdate(req.params._Id, {
        Title: req.body.Title,
        Firstname: req.body.Firstname,
        Surname: req.body.Surname,
        Mobile: req.body.Mobile,
        Home_Phone: req.body.Home_Phone,
        Email_Address: req.body.Email_Address,
        Role: req.body.Role,
        U18: req.body.U18,
        D_O_B: req.body.D_O_B,
        Parent_Guardian: req.body.Parent_Guardian,
        Permission_to_Message_Mobile: req.body.Permission_to_Message_Mobile,
        Mobile: req.body.Mobile,
        Home_Phone: req.body.Home_Phone,
        PG_Email_Address: req.body.PG_Email_Address,
        Record_Created: req.body.Record_Created,
        Marital_Status: req.body.Marital_Status,
        Referred_by: req.body.Referred_by,
        AddressLine1: req.body.AddressLine1, 
        AddressLine2: req.body.AddressLine2, 
        Town: req.body.Town, 
        CountyCity: req.body.CountyCity, 
        Eircode: req.body.Eircode
    },
        { new: true }) // "new: true" return updated object
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params._Id
            });
        }
        res.send(clients);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params._Id
            });
        }
        return res.status(500).send({
            message: "Error updating Quotation with id " + req.params._Id
        });
    });
};


// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params._Id)
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params._Id
            });
        }
        res.send({message: "Quotation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params._Id
            });
        }
        return res.status(500).send({
            message: "Could not delete Quotation with id " + req.params._Id
        });
    });
};

//From John Keating CS230 Lecture 22.01-05
// Default message for / (get)
exports.root = (req, res) => {
    Client.find()
    .then(clients => {
        res.render('Client_view',{
            results: clients
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};
// search for quotations, matching string on quote field
exports.searchQuotation = (req, res) => {
    var search = req.params.s;
    console.log("Searching clients: "+search)
    Client.find({ clients: new RegExp(search,"ig")})
    .then(clients => {
        res.render('Client_view',{
            results: clients
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};
// search for quotations, matching string on author field
exports.searchAuthor = (req, res) => {
    var search = req.params.s;
    console.log("Searching Authors: "+search)
    Client.find({ author: new RegExp(search,"ig")})
    .then(clients => {
        res.render('Client_view',{
            results: clients
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};