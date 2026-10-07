const mongoose = require('mongoose');

const connectDataBase = () => {
    try{
    console.log(`DB connected successfully in ${process.env.DB_LOCAL_URI}`)
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = connectDataBase;