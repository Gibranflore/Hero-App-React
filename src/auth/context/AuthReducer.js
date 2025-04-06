import { types } from "../types/types";



export const AuthReducer = ( state = {}, action ) => { //es state es es estado actual esta vacio
    //el action que estado queremos realizar en el, este tiene login y logout

    switch (action.types) {
        case types.login:
            //si estamos autentificados va a mandar el return
            return {
                ...state, //esta si tiene mas valores el state los desestructura de una vez los guarda
                logged: true,
                user: action.payload //va amandar el action y va a guardar datos mandado por el ususario
            };
    
        case types.logout:
            //cuando no estamos autentifiados no va mandar el nombre
            return {
                logged: false,
            };
        default:
            return state;
    }
}