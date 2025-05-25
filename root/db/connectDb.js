import mongoose from "mongoose";

const connectDb = async () => {
    try {
        // Check if we're already connected
        if (mongoose.connection.readyState === 1) {
            return mongoose.connection;
        }

        const conn = await mongoose.connect('mongodb://localhost:27017/getmeachai');
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
        
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}

export default connectDb;