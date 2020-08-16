const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.generateToken = async (data) => {
  return jwt.sign(data, config.md5HashKey, { expiresIn: '1d' });
};

exports.decodeToken = async (token) => {
  const data = await jwt.verify(token, config.md5HashKey);
  return data;
}

exports.authorize = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    response.sendStatus(401).json({
      message: 'Restricted access',
    });
  } else {
    jwt.verify(token, config.sendGridKey, (err, decoded) => {
      if (err) {
        response.sendStatus(401).json({
          erro: 'Invalid token'
        });
      } else {
        next();
      }
    });
  }
};
