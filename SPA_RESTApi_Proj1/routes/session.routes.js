//From John Keating Lecture 20.01-05 REST

module.exports = (app) => {
    const Session = require('../controllers/session.controllers.js');
    // Default message for /
    app.get('/', Session.root);

    // Create a new Quotation
    app.post('/Session', Session.create);
    // Retrieve all Quotations
    app.get('/Session', Session.findAll);
    // Retrieve a single Quotation specified by quotationId
    app.get('/Session/:_Id', Session.findOne);
    // Update a Quotation specified by quotationId
    app.put('/Session/:_Id', Session.update);
    // Delete a Quotation specified by quotationId
    app.delete('/Session/:_Id', Session.delete);

    // Search for Quotations matching s
    app.get('/Session/:s', Session.searchQuotation);
    app.get('/Session/:s', Session.searchAuthor);
}