import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // Importación por defecto de la conexión a MongoDB
import productoRoutes from './routes/productoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';

// Configuración de variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB(); // Ejecuta la función para conectar a MongoDB

// Inicializar la aplicación
const app = express();

// Middleware para permitir CORS
app.use(cors()); // Permite todas las solicitudes desde cualquier origen

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/productos', productoRoutes); // Rutas para productos
app.use('/api/pedidos', pedidoRoutes);     // Rutas para pedidos

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});
