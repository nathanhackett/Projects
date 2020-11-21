//From John Keating Lecture 20.01-05 REST, Lecture 22.01-05

module.exports = (app) => {
    const Client = require('../controllers/client.controllers.js');
    // Default message for /
    app.get('/', Client.root);

    // Create a new Quotation
    app.post('/Client', Client.create);
    // Retrieve all Quotations
    app.get('/Client', Client.findAll);
    // Retrieve a single Quotation specified by quotationId
    app.get('/Client/:_Id', Client.findOne);
    // Update a Quotation specified by quotationId
    app.put('/Client/:_Id', Client.update);
    // Delete a Quotation specified by quotationId
    app.delete('/Client/:_Id', Client.delete);

    // Search for Quotations matching s
    app.get('/Client/:s', Client.searchQuotation);
    app.get('/Client/:s', Client.searchAuthor);
}