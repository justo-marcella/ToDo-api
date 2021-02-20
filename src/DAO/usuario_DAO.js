module.exports = class UsuarioDAO{
    constructor(bd){
        this.bd = bd;
    }

    listaUsuarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all("SELECT * FROM USUARIOS", (error, rows)=>{
                if(error){
                    reject(`Erro na consulta ${error}`)
                }else{
                    resolve(rows)
                }

            })
        })
    }

    
    listaUmUsr(parametroUsr){

        return new Promise((resolve, reject)=>{
            let selectUsr = "SELECT * FROM USUARIOS WHERE EMAIL=?"
            this.bd.all(selectUsr, parametroUsr, (error, rows)=>{
                if(error){
                    reject(`[ERRO] Erro na consulta.  ${error}`)
                }else{
                    resolve(rows)
                }
            })
        })
    }
        
    insereUsuario(usuario){
        return new Promise ((resolve, reject)=>{
            this.bd.all("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", usuario, (error, rows)=>{
                if(error){
                    reject(`Erro na inserção ${error}`)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    atualizaUsuario(parametro){
        
        return new Promise ((resolve, reject)=>{
            let query = "UPDATE USUARIOS SET NOME=COALESCE(?, NOME), EMAIL=COALESCE(?, EMAIL), SENHA=COALESCE(?, SENHA)  WHERE EMAIL=?"
                this.bd.run(query, parametro, (error, rows)=>{
                    if(error){
                        reject("Erro na atualização do usuário")
                    }else{
                        resolve("Usuário atualizado com sucesso.")
                    }
                } )
        })
    }

    deletaUsuario(parametroDel){

        return new Promise((resolve, reject)=>{
            let queryDel = "DELETE FROM USUARIOS WHERE EMAIL=?"
            this.bd.run(queryDel, parametroDel, (error, rows)=>{
                if(error){
                    reject(`Erro ao deletar usuário ${error}`)
                }else{
                    resolve("Usuário deletado com sucesso")
                }
            })
        })
    }


}