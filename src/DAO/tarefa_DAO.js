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
    listaUmaTrf(parametroTrf){
        return new Promise((resolve, reject)=>{
            let selectTrf = "SELECT * FROM TAREFAS WHERE ID=?"
            this.bd.all(selectTrf, parametroTrf, (error, rows)=>{
                if(error){
                    reject(`[ERRO] Erro na consulta.  ${error}`)
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

    mudaTarefa(parametro){
        return new Promise((resolve, reject)=>{
            let query = "UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, ID_USUARIO = ? WHERE ID=?" 
                this.bd.run(query, parametro, (error)=>{
                    if(error){
                        reject(`[ERRO]Erro na atualização da tarefa ${error}`)
                    }else{
                        resolve('Tarefa atualizada com sucesso.')
                    }
                })
        })
    }

    deletaTarefa(parametroDel){
        return new Promise((resolve, reject)=>{

            let queryDel = 'DELETE FROM TAREFAS WHERE ID=?'
        this.bd.run(queryDel, parametroDel, (error, rows)=>{
            if(error){
                reject(`[ERRO]Erro ao deletar tarefa ${error}`)
            }else{
                resolve(`Tarefa deletada com sucesso.`)
            }
        })
        })
        
    }


}
