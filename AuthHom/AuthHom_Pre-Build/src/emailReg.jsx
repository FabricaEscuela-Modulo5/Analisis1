const emailReg = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
function isEmailRegex(email) {
  return emailReg.test(email);
}

module.exports = isEmailRegex;
