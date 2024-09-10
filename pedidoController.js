import Pedido from '../models/pedido.js';

// Crear un pedido
export const createPedido = async (req, res) => {
  const { cliente, productos, total } = req.body;

  // Validación básica
  if (!cliente || !productos || !total) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  try {
    const nuevoPedido = new Pedido({ cliente, productos, total });
    await nuevoPedido.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear pedido' });
  }
};

// Obtener todos los pedidos
export const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('productos'); // Populate para obtener detalles del producto
    res.json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
};
