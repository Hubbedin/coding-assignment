'use strict';

require('dotenv').config();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET_KEY,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_URL
};

module.exports = config;