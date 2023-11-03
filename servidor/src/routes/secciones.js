const router = require('express').Router();
const seccionescontroller = require('../controllers/seccionescontroller');

// CONSULTAR TODOS LAS secciones
router.get('/', seccionescontroller.listarsecciones);

// CONSULTAR UNA secciones
router.get('/:id', seccionescontroller.listarseccion);

// AGREGAR secciones
router.post('/', seccionescontroller.agregarsecciones);

// ELIMINAR secciones
router.delete('/:id', seccionescontroller.eliminasecciones);

// MODIFICAR secciones
router.put('/:id', seccionescontroller.editarsecciones);

module.exports = router;