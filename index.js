const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const connectDataBase = require('./config/database');
const app = express();

dotenv.config({path:path.join(__dirname, '/config/config.env')});
connectDataBase();

app.listen(() => {
    console.log(`App is running on port ${process.env.PORT} in ${process.env.NODE_ENV} phase`);
})