const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const { country, category, apiKey, page, pageSize } = event.queryStringParameters;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
