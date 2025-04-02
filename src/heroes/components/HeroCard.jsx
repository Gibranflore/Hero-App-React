import { Link } from "react-router"

//Este es el coponente hijo que toma los props de alter ego ya character
const CharacterByHero = ({alter_ego, characters}) => {
    return (alter_ego !== characters) ? <></> : (<p>{characters}</p>)
}

//Este es el componente padre
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const HeroImage = `/assets/heroes/${id}.jpg`
    //llamamos a la carpeta donde estan las imagenes por el nombre de id

    return (
    <>
        <div className="col animate__animated animate__fadeIn">
            <div className="card ">
                <div className="row no-gutters ">
                    <div className="col-4 ">
                        <img src={HeroImage} className="card-img  " alt={superhero} />
                    </div>

                    <div className="col-8 ">

                        <div className="card-body ">

                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {/* {
                            (alter_ego !== characters) && (<p>{characters}</p>)
                        } */}
                            <CharacterByHero alter_ego={alter_ego} characters={characters}/>

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        
                        <Link to={`/hero/${id}`}
                            >
                            Mas info...</Link>
                        
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </>
    )
}
//<Link to={`/hero/${id}`}
// necesita incluir el id porque ese valor representa un identificador único que permite acceder a la información específica de un héroe
//  en tu aplicación. Esto es útil cuando estás creando rutas dinámicas para manejar páginas individuales o detalles de cada héroe.