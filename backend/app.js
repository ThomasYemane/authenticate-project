const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csrf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
// const { ValidationError } = require('sequelize');
// const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

if (isProduction) {
    //enable cars only in development
    app.use(cors());
}

app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);

//Set the csrf token and create req.csrdToken method
app.use(
    csrf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
); 
app.use(routes);
module.exports = app;