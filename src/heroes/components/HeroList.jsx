
import { useMemo } from 'react';
import { getHerosByPublisher } from '../helpers'
import { HeroCard } from './';

export const HeroList = ( {publisher} ) => {


    const heros = useMemo( () => getHerosByPublisher(publisher), [publisher] );

<getHerosByPublisher/>

    return (
        <>
            <div className=' row rows-cols-1 row-cols-md-3 g-3'>
            
            {
                heros.map( heros => (
                //el map ordena una lista  que tiene heros su key es el id y muestra el superhero
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
