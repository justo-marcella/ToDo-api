const TarefaDAO = require("../DAO/tarefa_DAO");

module.exports = (app, bd)=>{

    const daoTarefas = new TarefaDAO(bd)

    app.get("/tarefa", async (req, res)=>{
        try{
            const retornoListaTrf = await daoTarefas.listaTarefas();
            res.send(retornoListaTrf);
        }
        catch(error){
            res.send(error);
        }
    })

    app.get("/tarefa/:ID", async (req, res)=>{
        try{
            const retornoTrf = await daoTarefas.listaUmaTrf(req.params.ID);
            res.send(retornoTrf);
        }
        catch(error){
            res.send(error);
        }
    })

    app.post("/tarefa", async (req, res)=>{
        
        try{
            const insereTarefa = await daoTarefas.novaTarefa([req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, req.body.ID_USUARIO])
            res.send(insereTarefa);
        }
        catch(error){
            res.send(error);
        }
    })

    app.put("/tarefa/:ID", async (req, res)=>{
        let parametroPut = [req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, req.body.ID_USUARIO, req.params.ID];
        try{
            const alteraTarefa = await daoTarefas.mudaTarefa(parametroPut);
            res.send(alteraTarefa)
        }
        catch(error){
            res.send(error);
        }
    })

    app.delete("/tarefa/:ID", async (req, res)=>{
        let parametroDel = [req.params.ID];
        try{
            const apagaTarefa = await daoTarefas.deletaTarefa(parametroDel);
            res.send(apagaTarefa)
        }
        catch(error){
            res.send(error)
        }
    })


    
}