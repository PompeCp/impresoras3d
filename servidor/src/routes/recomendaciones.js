const router = require('express').Router();
const recomendacionescontroller = require('../controllers/recomendacionescontroller');

// CONSULTAR TODOS LAS recomendaciones
router.get('/', recomendacionescontroller.listarrecomendaciones);

// CONSULTAR UNA recomendacion
router.get('/:id', recomendacionescontroller.listarrecomendacion);

// AGREGAR recomendaciones
router.post('/', recomendacionescontroller.agregarrecomendaciones);

// ELIMINAR recomendaciones
router.delete('/:id', recomendacionescontroller.eliminarecomendaciones);

// MODIFICAR recomendaciones
router.put('/:id', recomendacionescontroller.editarrecomendaciones);

module.exports = router;