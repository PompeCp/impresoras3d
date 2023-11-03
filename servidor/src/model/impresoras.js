const database = require('../database');

module.exports =function(){

async function listimpresoras(){

    const impresoras = await database.query("SELECT * FROM impresoras");
    return  impresoras

}
async function listimpresora(id){
    const impresoras = await database.query("SELECT * FROM impresoras WHERE id_impresoras = ?",id);
    return  impresoras

}

async function agregarimpresoras(datos){
    const impresoras = await database.query("INSERT INTO impresoras(nombre,imagen,descripcion) VALUES(?,?,?)",datos);
    return  impresoras

}

async function eliminarimpresoras(id){
    const impresoras = await database.query("DELETE FROM impresoras WHERE id_impresoras = ?",id);
    return  impresoras

}

async function editarimpresoras(datos){
    const impresoras = await database.query("UPDATE impresoras SET nombre = ?, imagen = ?,  descripcion = ? WHERE id_impresoras = ?",datos);
    return  impresoras

}

return{
    listimpresoras,
    listimpresora,
    eliminarimpresoras,
    agregarimpresoras,
    editarimpresoras
}


}