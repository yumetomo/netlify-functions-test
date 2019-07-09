exports.handler = async () => {
  return {
    statusCode: 200,
    body: process.env.KEY
  };
};
