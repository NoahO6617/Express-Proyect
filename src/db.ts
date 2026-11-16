
import mongoose from 'mongoose';

const uri = process.env.MONGO_URI
    ?? 'mongodb://localhost:27017/app';

async function connectDb() {
    await mongoose.connect(uri);
    console.log('MongoDB conectado');
}

connectDb();
