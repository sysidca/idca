const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb+srv://admin:admin@idca-htq4w.mongodb.net/idca?retryWrites=true',
  secret: crypto,
}
