const database = require('../database');

module.exports =function(){

async function listrecomendaciones(){

    const recomendaciones = await database.query("SELECT * FROM recomendaciones");
    return  recomendaciones

}
async function listrecomendacion(id){
    const recomendaciones = await database.query("SELECT * FROM recomendaciones WHERE id_recomendaciones = ?",id);
    return  recomendaciones

}

async function agregarrecomendaciones(datos){
    const recomendaciones = await database.query("INSERT INTO recomendaciones(recomendacion) VALUES(?)",datos);
    return  recomendaciones

}

async function eliminarrecomendaciones(id){
    const recomendaciones = await database.query("DELETE FROM recomendaciones WHERE id_recomendaciones = ?",id);
    return  recomendaciones

}

async function editarrecomendacioness(datos){
    const recomendaciones = await database.query("UPDATE recomendaciones SET recomendacion = ? WHERE id_recomendaciones = ?",datos);
    return  recomendaciones

}

return{
    listrecomendaciones,
    listrecomendacion,
    eliminarrecomendaciones,
    agregarrecomendaciones,
    editarrecomendacioness
}


}