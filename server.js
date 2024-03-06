// Importing required modules and dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Importing express app and Port
const app = express();
const PORT = process.env.PORT || 3001;

// Setting Handlebars.js engine with custom helpers
const hbs = exphbs.create({helpers});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Added session middleware with session object
app.use(session(sess));

// Import Express.js on the required template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//  Configure Express middleware: parse incoming JSON requests, handle URL-encoded form data, and serve static files from the 'public' directory.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Sync Sequelize models with the database (if necessary), then start the Express server listening on the specified PORT.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
