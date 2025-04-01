import { Navigate, useParams } from "react-router"
import { getHeroById } from "../helpers";


export const HeroPage = () => {

  const {id} = useParams();

  const hero = getHeroById( id )
  
  if (!hero) {
    return <Navigate to='/Marvel'/>
  }

  return (
    <h1>Hero######Pageeeee</h1>
  )
}
