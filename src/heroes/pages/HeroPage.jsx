import { Navigate, replace, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers";
import { useMemo } from "react";



export const HeroPage = () => {

  const navigate = useNavigate()

  const {id} = useParams();
  // Por ejemplo, si tienes una ruta como /user/:id, puedes usar useParams 
  // para obtener el valor de id cuando el componente asociado a esa ruta se renderice:

  const hero = useMemo( () => getHeroById( id ), [ id ] )
  //useMemo es para guardar valores,  cuando el [id] cambie vuleve a disparar "getHeroById" y lo manda al "hero"
  //CallbackMemo es pra guardar funciones

  const onNavigateBack=()=>{
    navigate(-1);
  }
  //El navigate -1 regresa a la pagian anterior pero tambien puede sacarte de la app
  
  if (!hero) {
    return <Navigate to='/Marvel'/>
    //esto si ponemos nombres que no esxisten en la url te redirige a la pagina comodin
  }

  return (
    <div className="row mt-2 ">
        <div className="col-4"> 
          <img
            //El ${id} va a la ruta donde guardamos las images y lo llama por el id la imagen tiene el mismo nombre que en la data
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft bg-black"
            />
        </div>

            <div className="col-8">
              <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
                  <li className="list-group-item"> <b>publisher:</b> {hero.publisher} </li>
                  <li className="list-group-item"> <b>first_appearance:</b> {hero.first_appearance} </li>
                </ul>
                    <h5 className="mt-5">Characters</h5>
                    <p>{hero.characters}</p>
                    <button className="btn btn-outline-primary" onClick={onNavigateBack}>
                      Regresar
                    </button>
            </div>
      </div>
    )
  }

