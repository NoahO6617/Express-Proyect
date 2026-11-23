
import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

export async function connectDb(): Promise<void> {
  try {
    if (!uri) {
      throw new Error('Falta configurar MONGO_URI en el archivo .env');
    }

    await mongoose.connect(uri);

    console.log('MongoDB conectado correctamente');

  } catch (error) {
    console.error('Error conectando con MongoDB:', error);
    process.exit(1);
  }
}

