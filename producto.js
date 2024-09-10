import mongoose from 'mongoose';

// Definimos el esquema para los productos
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  enStock: {
    type: Boolean,
    default: true
  },
  descripcion: {
    type: String,
    required: true
  },
  imagenUrl: {
    type: String,
    default: ''
  }
});

// Exportamos el modelo basado en el esquema
export default mongoose.model('Producto', productoSchema);
