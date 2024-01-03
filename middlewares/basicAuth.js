const basicAuth = require('express-basic-auth');

const users = {
  'admin': 'password1234',
};

const basicAuthMiddleware = basicAuth({ users, challenge: true });

module.exports = basicAuthMiddleware;
