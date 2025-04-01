import { heroes } from "../data/Heros";


export const getHerosByPublisher = (publisher) => {

    const validpublisher = ['DC Comics', 'Marvel Comics']
    if ( !validpublisher.includes(publisher) ) {
        throw new Error(`${publisher} No es valido el publisher`)
    }
    return heroes.filter( heroes => heroes.publisher === publisher )
}
