module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello world!!'
      })
  };
};

module.exports.helloagain = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello world Again!!'
      })
  };
};