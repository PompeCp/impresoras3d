const recomen =require('../model/recomendaciones');

exports.listarrecomendaciones =async (req, res) => {
    const recomendaciones = await recomen().listrecomendaciones();
    res.json({ recomendaciones })
};


exports.listarrecomendacion =async (req, res) => {
    const { id } = req.params;
    const recomendaciones = await recomen().listrecomendacion([id]);
    res.json({ recomendaciones })
};

exports.agregarrecomendaciones =async (req, res) => {
    const { recomendacion } = req.body;
    const datos = [recomendacion];
    await recomen().agregarrecomendaciones(datos);
    res.json({ msg: "recomendaciones agregado" });
};

exports.eliminarecomendaciones =async (req, res) => {
    const { id } = req.params;
    await recomen().eliminarrecomendaciones([id]);
    res.json({ msg: "recomendaciones eliminado" });
};

exports.editarrecomendaciones =async (req, res) => {
    const { id } = req.params;
    const { recomendacion } = req.body;
    const datos = [recomendacion, id];
    await recomen().editarrecomendaciones(datos);
    res.json({ msg: "recomendaciones modificado" });
};


