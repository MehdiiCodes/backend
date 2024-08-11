const mongoose = require('mongoose');

const url = "mongodb+srv://mehdiicodes:akbarMehdi@akbarmehdi.q8tbfar.mongodb.net/?retryWrites=true&w=majority&appName=AkbarMehdi"

//Connect to the Database

//asynchronous - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
    
})
.catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;