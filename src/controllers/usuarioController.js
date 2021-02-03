const usuarioModels = require("../models/usuarioModels");
const usuarioDAO = require("../DAO/usuario_DAO");

module.exports = (app, bd)=> {

    const daoUsuarios = new usuarioDAO(bd)
    
    app.get("/usuario", async (req, res)=>{
        
        try{
            const retornoListaUsu = await daoUsuarios.listaUsuarios();
            res.send(retornoListaUsu);
        }
        catch(error){
            res.send(error);
        }
        })



}