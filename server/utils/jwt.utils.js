// Imports
const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
    expiresIn: process.env.ACCESS_EXPIRATION
  })
  return accessToken;
};

const generateRefreshToken = (payload) => {
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: process.env.REFRESH_EXPIRATION
  })
  return refreshToken;
};

// Exports
module.exports = {
  generateAccessToken,
  generateRefreshToken
}