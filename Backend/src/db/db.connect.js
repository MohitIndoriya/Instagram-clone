let mongoose = require("mongoose")
mongoose.set('strictQuery', false);
let connect = async () => {
    return mongoose.connect("mongodb://localhost:27017")
}

module.exports = connect