const router = require('express').Router();
const impresorascontroller = require('../controllers/impresorascontroller');

// CONSULTAR TODOS LAS impresoras
router.get('/', impresorascontroller.listarimpresoras);

// CONSULTAR UNA impresoras
router.get('/:id', impresorascontroller.listarimpresora);

// AGREGAR impresoras
router.post('/', impresorascontroller.agregarimpresoras);

// ELIMINAR impresoras
router.delete('/:id', impresorascontroller.eliminaimpresoras);

// MODIFICAR impresoras
router.put('/:id', impresorascontroller.editarimpresoras);

module.exports = router;