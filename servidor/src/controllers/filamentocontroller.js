const filamen =require('../model/filamento');

exports.listarfilamentos =async (req, res) => {
    const filamento = await filamen().listfilamentos();
    res.json({ filamento })
};


exports.listarfilamento =async (req, res) => {
    const { id } = req.params;
    const filamento = await filamen().listfilamento([id]);
    res.json({ filamento })
};

exports.agregarfilamentos =async (req, res) => {
    const { nombre,descripcion } = req.body;
    const datos = [nombre,descripcion];
    await filamen().agregarfilamento(datos);
    res.json({ msg: "filamento agregado" });
};

exports.eliminafilamentos =async (req, res) => {
    const { id } = req.params;
    await filamen().eliminarfilamentos([id]);
    res.json({ msg: "filamento eliminado" });
};

exports.editarfilamentos =async (req, res) => {
    const { id } = req.params;
    const { nombre,descripcion } = req.body;
    const datos = [nombre,descripcion, id];
    await filamen().editarfilamentos(datos);
    res.json({ msg: "filamento modificado" });
};


