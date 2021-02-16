const moment = require("moment");
const jwt = require("jwt-simple");
const { tokenSecret } = require("./keys.dev");

module.exports = {
  encodeToken: (user) => {
    return jwt.encode(
      {
        exp: moment().add(2, "hour").unix(),
        iat: moment().unix(),
        sub: user._id,
      },
      tokenSecret
    );
  },
  decodeToken: (token) => {
    return jwt.decode(token, tokenSecret);
    //   const now = moment().unix();
    //   // check if the token has expired
    //   if (now > payload.exp) callback('Token has expired.');
    //   else callback(null, payload);
  },
};
