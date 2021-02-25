const { Model } = require('sequelize');
const quotesService = require('../services/quotes.service');

const postHandler= async (req, res) =>{
    const id = req.params.id;
    const quotesList= quotesService.postQuotesService(id);
    res.status(200).send(quotesList);
};

module.exports ={ postHandler};