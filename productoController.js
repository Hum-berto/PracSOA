import Producto from '../models/producto.js';

// Obtener todos los productos
export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // Aquí puedes agregar paginación si es necesario
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// Crear un producto
export const createProducto = async (req, res) => {
  const { nombre, precio, enStock, descripcion, imagenUrl } = req.body;

  // Validación básica
  if (!nombre || !precio || enStock === undefined || !descripcion) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  try {
    const nuevoProducto = new Producto({ nombre, precio, enStock, descripcion, imagenUrl });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear producto' });
  }
};
