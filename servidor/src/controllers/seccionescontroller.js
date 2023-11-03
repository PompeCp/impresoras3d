const sec =require('../model/secciones');

exports.listarsecciones =async (req, res) => {
    const secciones = await sec().listsecciones();
    res.json({ secciones })
};


exports.listarseccion =async (req, res) => {
    const { id } = req.params;
    const secciones = await sec().listseccion([id]);
    res.json({ secciones })
};

exports.agregarsecciones =async (req, res) => {
    const {nombre,imagen,descripcion } = req.body;
    const datos = [nombre,imagen,descripcion];
    await sec().agregarsecciones(datos);
    res.json({ msg: "secciones agregado" });
};

exports.eliminasecciones =async (req, res) => {
    const { id } = req.params;
    await sec().eliminarsecciones([id]);
    res.json({ msg: "secciones eliminado" });
};

exports.editarsecciones =async (req, res) => {
    const { id } = req.params;
    const { nombre,imagen,descripcion } = req.body;
    const datos = [nombre,imagen,descripcion, id];
    await sec().editarsecciones(datos);
    res.json({ msg: "secciones modificado" });
};


