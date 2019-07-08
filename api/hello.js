const fetch = require("node-fetch");
exports.handler = async () => {
  const URL = 'https://xivapi.com/Recipe/1?language=ja'
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      return {
        statusCode: 200,
        body: JSON.stringify(data.Results)
      };
    })
};
