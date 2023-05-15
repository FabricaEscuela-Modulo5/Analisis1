const passReg = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/
  );
  const isPassRegex = (password) => {
    return passReg.test(password);
  };
  module.exports = isPassRegex;