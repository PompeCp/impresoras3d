const database = require('../database');

module.exports =function(){

async function listfilamentos(){

    const filamento = await database.query("SELECT * FROM filamento");
    return  filamento

}
async function listfilamento(id){
    const filamento = await database.query("SELECT * FROM filamento WHERE id_filamento = ?",id);
    return  filamento

}

async function agregarfilamento(datos){
    const filamento = await database.query("INSERT INTO filamento(nombre,descripcion) VALUES(?,?)",datos);
    return  filamento

}

async function eliminarfilamentos(id){
    const filamento = await database.query("DELETE FROM filamento WHERE id_filamento = ?",id);
    return  filamento

}

async function editarfilamentos(datos){
    const filamento = await database.query("UPDATE filamento SET nombre = ?,  descripcion = ? WHERE id_filamento = ?",datos);
    return  filamento

}

return{
    listfilamento,
    listfilamentos,
    eliminarfilamentos,
    agregarfilamento,
    editarfilamentos
}


}