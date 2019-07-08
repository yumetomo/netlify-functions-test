const fetch = require("node-fetch").default;

exports.handler = async () => {
  const URL = 'https://xivapi.com/Recipe/1?language=ja?key=${process.env.API_KEY}'
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      return {
        statusCode: 200,
        body: JSON.stringify(data.Results)
      };
    })
};
