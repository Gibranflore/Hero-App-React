//Va a usar el authcontext y va a proveer toda la imformacion a la aplicacion

import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

const init = () => {
    const user = JSON.parse (localStorage.getItem('user')) //para obtener el valor asociado a la clave 'user' en el almacenamiento local del navegador.
    //JSON.parse() convierte este valor, que originalmente es una cadena de texto, de vuelta a un objeto JavaScript.
    return {
        logged: !!user, //si eata autentificado regresara el usuario 
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer( AuthReducer, {}, init);

    
    const login = ( name = '') => {
        const user = { id: 'ABC', name }
        const action = { types: types.login, payload: user }
        //localStorage se guardan como cadenas de texto (string).
        localStorage.setItem('user', JSON.stringify(user) )
        dispatch(action)
    }
        
        const logout = ( ) => {
            localStorage.removeItem('user');
            const action = {types: types.logout};
            dispatch(action);
            //el dispatch va a esperar la oction que va a limpiarlo
    
    }

    return (
        <AuthContext.Provider value={ {...authState, login, logout } }  >
            {children}
        </AuthContext.Provider>
    )
}
