//From John Keating CS230 Lecture 20.01-05 REST

const Session = require('../models/session.models.js');
// Create a new Quotation and save to the database

exports.create = (req, res) => {
    // Create a new Quotation (using schema)
    const sessions = new Session({
        SessionDate: req.body.SessionDate,
        SessionTime: req.body.SessionTime,
        Client_s: req.body.Client_s,
        Therapist: req.body.Therapist,
        Fee: req.body.Fee,
        SessionNumber: req.body.SessionNumber,
        SessionDuration: req.body.SessionDuration,
        Issue_Flag: req.body.Issue_Flag,
        Notes: req.body.Notes
    });
    // Save Quotation in the database
    sessions.save()
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
    Session.find()
    .then(sessions => {
        res.send(sessions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};


// Find a single note with a noteId
exports.findOne = (req, res) => {
    Session.findById(req.params._Id)
    .then(sessions => {
        if(!sessions) {
            return res.status(404).send({
                message: "sessions not found with id " + req.params._Id
            });
        }
        res.send(sessions);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "sessions not found with id " + req.params._Id
            });
        }
        return res.status(500).send({
            message: "Error retrieving sessions with id " + req.params._Id
        });
    });
};


// Update a Quotation identified by the noteId in the request
exports.update = (req, res) => {
    // Find the Quotation and update it with the request body
    Session.findByIdAndUpdate(req.params._Id, {
        SessionDate: req.body.SessionDate,
        SessionTime: req.body.SessionTime,
        Client_s: req.body.Client_s,
        Therapist: req.body.Therapist,
        Fee: req.body.Fee,
        SessionNumber: req.body.SessionNumber,
        SessionDuration: req.body.SessionDuration,
        Issue_Flag: req.body.Issue_Flag,
        Notes: req.body.Notes
    },  { $set: req.body }, // $set - modify only the supplied fields
        { new: true }) // "new: true" return updated object
    .then(sessions => {
        if(!sessions) {
            return res.status(404).send({
                message: "sessions not found with id " + req.params._Id
            });
        }
        res.send(sessions);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "sessions not found with id " + req.params._Id
            });
        }
        return res.status(500).send({
            message: "Error updating sessions with id " + req.params._Id
        });
    });
};


// Update a Quotation identified by the quotationId in the request
exports.updateQuote = (req, res) => {
    // Find the Quotation and update it with the request body
    Session.findByIdAndUpdate(req.params._Id, {
        SessionDate: req.body.SessionDate,
        SessionTime: req.body.SessionTime,
        Client_s: req.body.Client_s,
        Therapist: req.body.Therapist,
        Fee: req.body.Fee,
        SessionNumber: req.body.SessionNumber,
        SessionDuration: req.body.SessionDuration,
        Issue_Flag: req.body.Issue_Flag,
        Notes: req.body.Notes
    },
        { new: true }) // "new: true" return updated object
    .then(sessions => {
        if(!sessions) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params._Id
            });
        }
        res.send(sessions);
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
    Session.findByIdAndRemove(req.params._Id)
    .then(sessions => {
        if(!sessions) {
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
    Session.find()
    .then(sessions => {
        res.render('Sessions_view',{
            results: sessions
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
    console.log("Searching sessions: "+search)
    Session.find({ sessions: new RegExp(search,"ig")})
    .then(sessions => {
        res.render('Sessions_view',{
            results: sessions
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
    Session.find({ author: new RegExp(search,"ig")})
    .then(sessions => {
        res.render('Sessions_view',{
            results: sessions
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};