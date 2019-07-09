const axios = require('axios');

exports.handler = async () => {
  const URL = `https://xivapi.com/Town?key=${process.env.API_KEY}`;
  return axios.get(URL)
    .then(({ data: data }) => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))
    .catch(e => ({
      statusCode: 400,
      body: e
    }));
};
