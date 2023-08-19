// Imports 
const winston = require("winston");
const { combine, timestamp, json, errors } = winston.format;

// Configure logger
const logger = winston.createLogger({
  level: "info",
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [
    new winston.transports.Console()
  ],
});

// Exports
module.exports = {
  logger
};
