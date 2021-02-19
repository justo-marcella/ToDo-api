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

    app.post("/tarefa", async (req, res)=:{
        
        try{
            const insereTarefa = await daoTarefas.novaTarefa([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.ID_usuario]);
            res.send(`Tarefa inserida com sucesso. ${insereTarefa}`)
        }
        catch(error){
            res.send(error);
        }
    })

    app.put("/tarefa/:titulo", async (req, res)=>{
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.ID_usuario];
        try{
            const alteraTarefa = await daoTarefas.mudaTarefa(parametro);
            res.send(alteraTarefa)
        }
        catch(error){
            res.send(error);
        }
    })

    app.delete("/tarefa/:titulo", async (req, res)=>{
        let parametroDel = [req.params.TITULO];
        try{
            const apagaTarefa = await daoTarefas.deletaTarefa(parametroDel);
            res.send(apagaTarefa)
        }
        catch(error){
            res.send(error)
        }
    })


    
}