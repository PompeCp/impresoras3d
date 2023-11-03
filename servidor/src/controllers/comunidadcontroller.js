const comu = require("../model/comunidad");

exports.listarcomunidad = async (req, res) => {
  const comunidad = await comu().listcomunidad();
  res.json({ comunidad });
};

exports.listarcomunida = async (req, res) => {
  const { id } = req.params;
  const comunidad = await comu().listcomunida([id]);
  res.json({ comunidad });
};

exports.agregarcomunidad = async (req, res) => {
  const { nombre, imagen, descripcion, link } = req.body;
  const datos = [nombre, imagen, descripcion, link];
  await comu().agregarcomunidad(datos);
  res.json({ msg: "comunidad agregado" });
};

exports.eliminarcomunidad = async (req, res) => {
  const { id } = req.params;
  await comu().eliminarcomunidad([id]);
  res.json({ msg: "comunidad eliminado" });
};

exports.editarcomunidad = async (req, res) => {
  const { id } = req.params;
  const { nombre, imagen, descripcion, link } = req.body;
  const datos = [nombre, imagen, descripcion, link, id];
  await comu().editarcomunidad(datos);
  res.json({ msg: "comunidad modificado" });
};
