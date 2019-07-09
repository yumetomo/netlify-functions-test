exports.handler = async () => {
  console.log(process.env.KEY);

  return {
    statusCode: 200,
    body: process.env.KEY
  };
};
