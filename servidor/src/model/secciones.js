const database = require('../database');

module.exports =function(){

async function listsecciones(){

    const secciones = await database.query("SELECT * FROM secciones");
    return  secciones

}
async function listseccion(id){
    const secciones = await database.query("SELECT * FROM secciones WHERE id_secciones = ?",id);
    return  secciones

}

async function agregarsecciones(datos){
    const secciones = await database.query("INSERT INTO secciones(nombre,imagen,descripcion) VALUES(?,?,?)",datos);
    return  secciones

}

async function eliminarsecciones(id){
    const secciones = await database.query("DELETE FROM secciones WHERE id_secciones = ?",id);
    return  secciones

}

async function editarsecciones(datos){
    const secciones = await database.query("UPDATE secciones SET nombre = ?, imagen = ?,  descripcion = ? WHERE id_secciones = ?",datos);
    return  secciones

}

return{
    listsecciones,
    listseccion,
    eliminarsecciones,
    agregarsecciones,
    editarsecciones
}


}