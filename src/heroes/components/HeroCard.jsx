import { Link } from "react-router"

const CharacterByHero = ({alter_ego, characters}) => {
    return (alter_ego !== characters) ? <></> : (<p>{characters}</p>)

}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const HeroImage = `/assets/heroes/${id}.jpg`
    //llamamos a la carpeta donde estan las imagenes

    return (
    <>
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={HeroImage} className="card-img" alt={superhero}/>
                    </div>

                    <div className="col-8">

                        <div className="card-body">

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
