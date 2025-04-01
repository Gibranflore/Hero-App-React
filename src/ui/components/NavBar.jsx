import { Link, NavLink, replace, useNavigate } from 'react-router';


export const Navbar = () => {

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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-link nav-item text-primary'>
                        Gibran
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