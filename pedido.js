import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({

cliente: String,

productos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto'
}],

total: Number,
fechaPedido: { type: Date, default: Date.now }

});

export default mongoose.model('Pedido', pedidoSchema);
