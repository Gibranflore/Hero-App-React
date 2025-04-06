import { useContext } from 'react';
import { Link, NavLink, replace, useNavigate } from 'react-router';
import { AuthContext } from '../../auth/context/AuthContext';



export const Navbar = () => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const onLogout=()=>{
    navigate('/LoginPage', {
        replace: true
    });
    //replace bloquea la pagina anterior para que no puedas regredar
}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActivate}) => `nav-link nav-link ${ isActivate ? 'active' : '' }`}  
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActivate}) => `nav-link nav-link ${ isActivate ? 'active' : '' }`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActivate}) => `nav-link nav-link ${ isActivate ? 'active' : '' }`} 
                        to="/search"
                    >
                        search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-link nav-item text-primary'>
                        {user?.name}
                        // el ? es una condicion que si es null no muestra nada pero si tien el dato muestra le name
                    </span>
                    <button 
                    className='nav-item nav-link btn'
                    onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}