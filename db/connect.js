// get mongoose
const mongoose = require('mongoose');
// create funciton
async function connectDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected Successfully');
    }catch(err){
        console.error('MongoDB connection failed :', err);
        process.exit(1);
    }

}
// export
module.exports = connectDB;