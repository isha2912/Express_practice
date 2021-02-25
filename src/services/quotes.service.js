const quoteUtils = require('../utils/quotes.utils')


const postQuotesService = async (body, id) => {

    const quotesFromApi = await quoteUtils.getQuotes(id);
    // const todos = await Todo.create({ title: body.title, status: body.status });
    return quotesFromApi;
  };

  module.exports={ postQuotesService,}