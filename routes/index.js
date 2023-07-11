const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const auth = require('http-auth');
const {check, validationResult} = require('express-validator');
const express = require('express');

//Configure basic authentication of the http-auth module, specifying where the credentials are
const basic = auth.basic({
   file: path.join(__dirname, '../users.htpasswd'),
});

//Create the main router
const router = express.Router();

//Create the Registration model from the MongoDB so that mongoose is happy :-)
const Registration = mongoose.model('Registration');

/*
 * Route: '/'
 * Method: GET
 * Description: Renders the form.pug template
 */
router.get('/', (req, res) => {
  res.render('form', {title: 'Registration form'});
});

/*
 * Route: '/registrations'
 * Method: GET
 * Description: Renders the list_of_registrations.pug template with dataFetched from MongoDB
 */
router.get('/registrations', basic.check((req, res) => {
   Registration.find()
      .then( (dataFetched) => {
         res.render('list_of_registrations', {title: 'List of registrations', dataFetched});
      })
      .catch( (err) => {
         res.send(`Error reading registrations list from MongoDB: ${err.message}}`);
         console.log(`Error reading registrations list from MongoDB: ${err.message}}`)
      });
}));

/*
 * Route: '/'
 * Method: POST
 * Description: Processes the form data via bodyParser module and saves it to MongoDB
 * Parameters: name, email
 */
router.post('/',
   [
      check('name')
         .isLength({min: 3, max: 20})
         .withMessage('Please enter a name between 3 and 20 characters.'),
      check('email')
         .isLength({min: 5})
         .withMessage('Please enter a valid email address at least 5 characters long.'),
   ],
   (req, res) => {
      const err = validationResult(req);
      console.log(req.body);
      if( err.isEmpty()){
         const regDetails = new Registration(req.body);
         regDetails.save()
            .then( () => {res.send('Thank you for your registration!')})
            .catch( (err) => { console.log(`Error while saving data to MongoDB: ${err.message}}`)});
      } else {
         res.render('form', {
            title: "Registration form",
            errors: err.array(),
            data: req.body,
         });
      }
      
      
})

/*
 * Route: '/ema'
 * Method: GET
 * Description: Renders the request headers
 */
router.get('/ema', (req, res) => {
   res.send(req.headers);
});

module.exports = router;