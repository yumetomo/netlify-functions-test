import fetch from ("node-fetch");

exports.handler = async () => {
  const URL = `https://xivapi.com/Town?key=${process.env.API_KEY}`;
  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      try {
        return {
          statusCode: 200,
          body: JSON.stringify(data.Results)
        };
      } catch (error) {
        return {
          statusCode: 400,
          body: error
        };
      }
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
