// const mongoose = require("mongoose");


// const connectDatabase = async () => { 
//     mongoose.connect(process.env.DB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).then((data) => {
//         console.log(`MongoDB connected with server: ${data.connection.host}`);
//     })
// }

// module.exports = connectDatabase

const mongoose = require("mongoose");

const connectDatabase = async () => {
    mongoose.connect(process.env.DB_URL)
        .then((data) => {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

module.exports = connectDatabase;
