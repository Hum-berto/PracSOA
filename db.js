import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Verifica si MONGO_URI está definida, y utiliza una URI por defecto si no lo está.
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/my_database'; // Cambia my_database por tu nombre de base de datos
    if (!uri) {
      throw new Error("MONGO_URI no está definida en el archivo .env");
    }

    // Conexión a MongoDB
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Termina la app si no puede conectar
  }
};

export default connectDB;
