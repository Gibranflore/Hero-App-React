import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  const {login} = useContext( AuthContext )
  const navigate = useNavigate()

  //esto nos ayuda para una restencion para que no pueda regresar y se direge a otra pagina:: esta conectado al boton
  const onLogin = () => {

    login('Gibran Flores');

    navigate('/', {
        replace: true
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <hr/>

      <button 
        onClick={onLogin}
        className="btn btn-primary">
        Login
      </button>


    </div>
  )
}
