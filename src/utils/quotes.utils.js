const { default: axios } = require('axios');
const { Model } = require('sequelize');

const httpGet = async (path) => {
  const response = await axios.get(path);
  return response.data;
};

const getQuotes = async (id) => {
  const quotesList = await httpGet(`https://api.quotable.io/quotes/${id}`);
  return quotesList;
};

module.exports = { httpGet, getQuotes}