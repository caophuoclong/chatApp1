const crypto = require("crypto");
const algorithm = "sha512";

module.exports = {
  encrypt: (pass, salt) => {
    const hmac = crypto.createHmac(algorithm, salt);
    const update = hmac.update(pass);
    const password_after_hash = update.digest("hex");
    return password_after_hash;
  },
};
