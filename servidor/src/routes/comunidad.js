const router = require("express").Router();
const comunidadcontroller = require("../controllers/comunidadcontroller");
const path = require("path");
const multer = require("multer");
const uploadPath = path.join(__dirname, '../public/upload');
const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, cb) => {
    const now = new Date();
    now.setMilliseconds(0); // Establece los milisegundos en 0
    const fechaHora = now.getTime(); 
    const uniqueName = `${fechaHora}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// CONSULTAR TODOS LOS CONTENIDO
router.get("/", comunidadcontroller.listarcomunidad);

// CONSULTAR UN CONTENIDO
router.get("/:id", comunidadcontroller.listarcomunida);

// AGREGAR CONTENIDO
router.post("/", comunidadcontroller.agregarcomunidad);

// ELIMINAR CONTENIDO
router.delete("/:id", comunidadcontroller.eliminarcomunidad);

// MODIFICAR CONTENIDO
router.put("/:id", comunidadcontroller.editarcomunidad);

const upload = multer({ storage });



router.post('/images/post', upload.array('archivo', 2), async (req, res) => {

  const files = req.files;

  // Mover archivos a carpetas

  res.send('Archivos subidos');

});



module.exports = router;
