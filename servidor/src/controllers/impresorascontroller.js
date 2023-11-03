const impre =require('../model/impresoras');

exports.listarimpresoras =async (req, res) => {
    const impresoras = await impre().listimpresoras();
    res.json({  impresoras })
};


exports.listarimpresora =async (req, res) => {
    const { id } = req.params;
    const impresoras = await impre().listimpresora([id]);
    res.json({ impresoras })
};

exports.agregarimpresoras =async (req, res) => {
    const {nombre,imagen,descripcion } = req.body;
    const datos = [nombre,imagen,descripcion];
    await impre().agregarimpresoras(datos);
    res.json({ msg: "impresoras agregado" });
};

exports.eliminaimpresoras =async (req, res) => {
    const { id } = req.params;
    await impre().eliminarimpresoras([id]);
    res.json({ msg: "impresoras eliminado" });
};

exports.editarimpresoras =async (req, res) => {
    const { id } = req.params;
    const { nombre,imagen,descripcion } = req.body;
    const datos = [nombre,imagen,descripcion, id];
    await impre().editarimpresoras(datos);
    res.json({ msg: "impresoras modificado" });
};


