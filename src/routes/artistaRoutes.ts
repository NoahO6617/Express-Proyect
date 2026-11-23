
import { Router } from 'express';

import {
  listarArtistas,
  buscarArtista,
  insertarArtista,
  modificarArtista,
  borrarArtista
} from '../controllers/artistaController.js';

const router = Router();

router.get('/', listarArtistas);
router.get('/:id', buscarArtista);
router.post('/', insertarArtista);
router.put('/:id', modificarArtista);
router.delete('/:id', borrarArtista);

export default router;
