// get mongoose
const mongoose = require('mongoose');
// create funciton
async function connectDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected Successfully');
        console.log("=======================================");
    }catch(err){
        console.error('MongoDB connection failed  :', err);
        console.log("=======================================");
        process.exit(1);
    }

}
// export
module.exports = connectDB;