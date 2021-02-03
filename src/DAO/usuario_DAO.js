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
}