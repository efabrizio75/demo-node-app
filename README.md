# Tutorial - Node application with Express

This is a very simple Node application with Express, created following the tutorial by James Hibbard on [SitePoint](https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/).

Prior to following this tutorial I had never used Pug or Mongoose, so this was an opportunity to learn something new.

The tutorial has been followed to the letter, with the exception of the following:
* The Express server port is configurable via environment variable;
* The list of users registered appears also as a definition list; 
* There is a link to view the list of registered users on the collection form;
* There is an additional route that shows the HTTP headers from the request;
* The Bootstrap source is referenced via CDN, not with a local inclusion;

## Technology stack

- Node.js (the container)
- Express (the backend)
- MongoDB (the data persistence layer)
- Pug (the frontend template engine)
- Bootstrap (the template styling)

## Installation steps

1. Clone the repository.
1. Run `npm install` to install the dependencies.
1. Create a `.env` file in the project root called `PORT` and `DATABASE` to store the port number of the server and the MongoDB connection string, respectively.
1. (optional) If running MongoDB locally, start the server with `mongod`.
1. Run `npm run watch` to start the server and monitor for changes.
1. Visit <http://localhost:PORT>/ to see the application running.
1. Visit <http://localhost:PORT>/registrations to see the list of submissions.

### Acknowledgements

Obviously this is totally free to use and distribute as you wish.
All credit goes to SitePoint and James Hibbard for the tutorial idea, and the code I used to make this repository.
