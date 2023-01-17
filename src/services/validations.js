const productValidate = (name) => {
  if (!name) return { status: 400, response: { message: '"name" is required' } };
  if (name.length <= 5) {
    return {
      status: 422,
      response: { message: '"name" length must be at least 5 characters long' },
    };
  }
};

module.exports = {
  productValidate,
};
