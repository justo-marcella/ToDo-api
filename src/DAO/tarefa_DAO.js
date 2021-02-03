module.exports = class TarefaDAO{
    constructor(bd){
        this.bd = bd;
    }

    listaTarefas(){
        return new Promise((resolve, reject)=>{
            this.bd.all("SELECT * FROM TAREFAS", (error, rows)=>{
                if (error){
                    reject(`Erro na consulta ${error}`)
                }else{
                    resolve(rows)
                }
            })
        })



    }





}
