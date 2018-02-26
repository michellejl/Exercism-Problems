var TwoFer = function () { };

TwoFer.prototype.twoFer = function (who) {

  let message = `One for ${who ? who : 'you'}, one for me.`;

  return message;
};

module.exports = TwoFer;
