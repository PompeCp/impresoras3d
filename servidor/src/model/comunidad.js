const database = require('../database');

module.exports =function(){

async function listcomunidad(){

    const comunidad = await database.query("SELECT * FROM comunidad");
    return  comunidad

}
async function listcomunida(id){
    const comunidad = await database.query("SELECT * FROM comunidad WHERE id_comu = ?",id);
    return  comunidad

}

async function agregarcomunidad(datos){
    const comunidad = await database.query("INSERT INTO comunidad(nombre,imagen,descripcion,link) VALUES(?,?,?,?)",datos);
    return  comunidad

}

async function eliminarcomunidad(id){
    const comunidad = await database.query("DELETE FROM comunidad WHERE id_comu = ?",id);
    return  comunidad

}

async function editarcomunidad(datos){
    const comunidad = await database.query("UPDATE comunidad SET nombre = ?,  imagen = ?,  descripcion = ?,  link = ? WHERE id_comu = ?",datos);
    return  comunidad

}

return{
    listcomunidad,
    listcomunida,
    agregarcomunidad,
    eliminarcomunidad,
    editarcomunidad
}


}