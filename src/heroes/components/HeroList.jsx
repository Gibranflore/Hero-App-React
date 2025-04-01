
import { getHerosByPublisher } from '../helpers'
import { HeroCard } from './';

export const HeroList = ( {publisher} ) => {


    const heros = getHerosByPublisher(publisher);

<getHerosByPublisher/>

    return (
        <>
            <div className=' row rows-cols-1 row-cols-md-3 g-3'>
            
            {
                heros.map( heros => (
                //el map ordena una lista  que tiene heros su key es el id y muesta el superhero
                <HeroCard
                key={heros.id} {...heros}
                //desestructuramos todas los datos que tengan en el heroes data ..heros
                />

                ))
            }
            </div>
        </>
    )
}
