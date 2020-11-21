//From John Keating Lecture 20.01-05 REST

module.exports = (app) => {
    const Therapist = require('../controllers/therapist.controllers.js');
    // Default message for /
    app.get('/', Therapist.root);

    // Create a new Quotation
    app.post('/Therapist', Therapist.create);
    // Retrieve all Quotations
    app.get('/Therapist', Therapist.findAll);
    // Retrieve a single Quotation specified by quotationId
    app.get('/Therapist/:_Id', Therapist.findOne);
    // Update a Quotation specified by quotationId
    app.put('/Therapist/:_Id', Therapist.update);
    // Delete a Quotation specified by quotationId
    app.delete('/Therapist/:_Id', Therapist.delete);

    // Search for Quotations matching s
    app.get('/Therapist/:s', Therapist.searchQuotation);
    app.get('/Therapist/:s', Therapist.searchAuthor);
}