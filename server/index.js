const app = require('./server');

const port =  process.env.PORT || 8000;

// Start server
app.listen(port, () => {
    console.log(`You are listening on port ${port} for requests to respond to.`);
});