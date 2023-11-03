const router = require('express').Router();
const contenidomultcontroller = require('../controllers/contenidomultcontroller');

// CONSULTAR TODOS LOS CONTENIDO
router.get('/', contenidomultcontroller.listarcontenidosmult);

// CONSULTAR UN CONTENIDO
router.get('/:id', contenidomultcontroller.listarcontenidomult);

// AGREGAR CONTENIDO
router.post('/', contenidomultcontroller.agregarcontenidomult);

// ELIMINAR CONTENIDO
router.delete('/:id', contenidomultcontroller.eliminacontenidomult);

// MODIFICAR CONTENIDO
router.put('/:id', contenidomultcontroller.editarcontenidomult);

module.exports = router;