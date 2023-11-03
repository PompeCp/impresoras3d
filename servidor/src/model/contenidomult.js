const database = require('../database');

module.exports =function(){

async function listcontenidosmult(){

    const contenidomult = await database.query("SELECT * FROM contenidomult");
    return  contenidomult

}
async function listcontenidomult(id){
    const contenidomult = await database.query("SELECT * FROM contenidomult WHERE id_contenidomult = ?",id);
    return  contenidomult

}

async function agregarcontenidosmult(datos){
    const contenidomult = await database.query("INSERT INTO contenidomult(tipo,url) VALUES(?,?)",datos);
    return  contenidomult

}

async function eliminarcontenidosmult(id){
    const contenidomult = await database.query("DELETE FROM contenidomult WHERE id_contenidomult = ?",id);
    return  contenidomult

}

async function editarcontenidosmult(datos){
    const contenidomult = await database.query("UPDATE contenidomult SET tipo = ?,  url = ? WHERE id_contenidomult = ?",datos);
    return  contenidomult

}

return{
    listcontenidosmult,
    listcontenidomult,
    eliminarcontenidosmult,
    agregarcontenidosmult,
    editarcontenidosmult
}


}