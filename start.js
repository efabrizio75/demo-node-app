/*
 * Application entry point, monitored by nodemon.
 * IMPORTANT: Make sure the models for MongoDB are created BEFORE the application starts
 * by placing all required models at the top of the file.
 */
require('./models/Registration');
const app = require('./app');
const mongoose = require('mongoose');

//Open the connection to MongoDB specified in the local environment file
mongoose.connect(process.env.DATABASE, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

//Manages the result of opening the connection to MongoDB
mongoose.connection
   .on('open', () => {
      console.log("Mongoose connection opened...");
   })
   .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
   });

//Start the Express server on the port specified via the environment variable
const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);
});