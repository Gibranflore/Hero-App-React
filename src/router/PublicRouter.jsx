
import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router'

export const PublicRoute = ( {children} ) => {
    
    const {logged} = useContext(AuthContext)
    
    //si estoy autentificado muestro el children si no lo envia al login
    return ( logged) ? <Navigate to={ '/marvel' } /> : children 
    
}