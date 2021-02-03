const TarefaDAO = require("../DAO/tarefa_DAO");
const tarefaDAO = require("../DAO/tarefa_DAO");

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
    
}