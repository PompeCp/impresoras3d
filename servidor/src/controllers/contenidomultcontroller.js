const conten =require('../model/contenidomult');

exports.listarcontenidosmult =async (req, res) => {
    const contenidomult = await conten().listcontenidosmult();
    res.json({ contenidomult })
};


exports.listarcontenidomult =async (req, res) => {
    const { id } = req.params;
    const contenidomult = await conten().listcontenidomult([id]);
    res.json({ contenidomult })
};

exports.agregarcontenidomult =async (req, res) => {
    const { tipo, url } = req.body;
    const datos = [tipo, url];
    await conten().agregarcontenidosmult(datos);
    res.json({ msg: "contenidomult agregado" });
};

exports.eliminacontenidomult =async (req, res) => {
    const { id } = req.params;
    await conten().eliminarcontenidosmult([id]);
    res.json({ msg: "contenidomult eliminado" });
};

exports.editarcontenidomult =async (req, res) => {
    const { id } = req.params;
    const { tipo, url } = req.body;
    const datos = [tipo, url, id];
    await conten().editarcontenidosmult(datos);
    res.json({ msg: "contenidomult modificado" });
};


