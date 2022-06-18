const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://zaki:zaki1234@authentication.ve9w8n4.mongodb.net/?retryWrites=true&w=majority")
};