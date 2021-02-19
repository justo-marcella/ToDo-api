const usuarioModels = require("../models/usuarioModels");
const UsuarioDAO = require("../DAO/usuario_DAO");

module.exports = (app, bd)=> {

    const daoUsuarios = new UsuarioDAO(bd)
    
    app.get("/usuario", async (req, res)=>{
        
        try{
            const retornoListaUsu = await daoUsuarios.listaUsuarios();
            res.send(retornoListaUsu);
        }
        catch(error){
            res.send(error);
        }
        })

    app.post("/usuario", async  (req, res)=>{
            
        try{
            const insereUsuario = await daoUsuarios.insereUsuario([req.body.nome, req.body.email, req.body.senha]);
            res.send(`Usuário inserido com sucesso. ${insereUsuario}`)
            }
        catch(error){
            res.send(error);
            }
    })

    app.put("/usuario/:EMAIL", async  (req, res)=>{
        let parametro = [req.body.NOME, req.body.EMAIL, req.body.SENHA, req.params.EMAIL];
            try{
                const alteraUsuario = await daoUsuarios.atualizaUsuario(parametro);
                res.send(alteraUsuario)
            }
            catch(error){
                res.send(error);
            }
    })

    app.delete("/usuario/:EMAIL", async (req, res)=>{
        let parametroDel = [req.params.EMAIL];
        try{
            const apagaUsuario = await daoUsuarios.deletaUsuario(parametroDel);
            res.send(apagaUsuario)
        }
        catch(error){
            res.send(error);
        }

    })

}