// Imports 
const { createLogger, format, transports } = require('winston');

// Logger middleware
const logger = createLogger({
  format: format.json(),
  transports: [
    new transports.Console()
  ],
  silent: false 
})

// Exports
module.exports = {
  logger
};