const axios = require('axios');

exports.handler = async () => {
  const URL = `https://xivapi.com/Town?key=1c309dc1c3f545a9aa2b804f`;
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
