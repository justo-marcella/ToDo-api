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
    
    novaTarefa(tarefa){
        return new Promise((resolve, reject)=>{
            this.bd.all('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)', tarefa, (error, rows)=>{

                if(error){
                    reject(`[ERRO] Erro ao inserir tarefa. ${error}`)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    mudaTarefa(oarametro){
        return new Promise((resolve, reject)=>{
            
        })
    }







}
