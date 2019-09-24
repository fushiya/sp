const crypto = require('crypto');

const hshs = [
    'sha1', 'md5', 'sha256', 'sha512'
]

module.exports = (secret, key) => {
    return crypto.createHmac(hshs[0], secret)
        .update(key)
        .digest('hex');
}