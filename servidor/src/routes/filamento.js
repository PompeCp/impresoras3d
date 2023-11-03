const router = require('express').Router();
const filamentocontroller = require('../controllers/filamentocontroller');

// CONSULTAR TODOS LOS FILAMENTO
router.get('/', filamentocontroller.listarfilamentos);

// CONSULTAR UN FILAMENTO
router.get('/:id', filamentocontroller.listarfilamento);

// AGREGAR FILAMENTO
router.post('/', filamentocontroller.agregarfilamentos);

// ELIMINAR FILAMENTO
router.delete('/:id', filamentocontroller.eliminafilamentos);

// MODIFICAR FILAMENTO
router.put('/:id', filamentocontroller.editarfilamentos);

module.exports = router;