import { Router } from 'express';
import { createPedido, getPedidos } from '../controllers/pedidoController.js';

const router = Router();

router.get('/', getPedidos);
router.post('/', createPedido);

export default router;
