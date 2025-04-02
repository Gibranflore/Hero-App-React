import { heroes } from "../data/Heros"


export const getHeroById = ( id ) => {
    // exportando la data el " find " encuentra un valor en la data, heroes.id tiene que ser igual al id
    return heroes.find( heroes => heroes.id === id );
}