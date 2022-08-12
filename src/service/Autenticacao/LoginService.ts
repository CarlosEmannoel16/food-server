import ClienteRepository from "../../repository/ClienteRepository";
import bcrypt from "bcrypt"

class LoginService{
    async verificarLogin(data: iLogin){
      const cliente =  await ClienteRepository.pegarPeloEmail(data.email)

      if(!cliente){
        return({message: ""})
      }else{
        const isLogin =  bcrypt.compareSync(cliente.senha, data.senha)
        const isemail = cliente.email === data.email
        if(isLogin && isemail){
            
        }
      }
    }
}