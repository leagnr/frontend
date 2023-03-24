import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/CardCatsStyle.css'



function CardCats () {

  const [cats, setCats] = useState()

//méthode pour récupérer les données depuis l'API
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p') 

      if (response.status === 200) {
        const data = response.data[0]
        setCats(data)
      }
    }
    loadData()
  }, [])


//méthode pour afficher un nouveau chat lorsque l'on clique sur le bouton
/*   const handleClick = () => {
    loadData();
  }

  useEffect(() => {
    loadData()
  }, []) */


  return cats &&(
    <>
      <div className="header-cat">
        <h2>{cats.breeds[0].name}</h2>
      </div>

      <div className="cat">      
        <div className="body-cat">
          <img src={cats.url}/>
        </div>

        <div className='info-cat'>
          <h3>Description :</h3><p>{cats.breeds[0].description}</p>
          <h3>Origine :</h3><p>{cats.breeds[0].origin}</p>
          <h3>Espérence de vie :</h3><p>{cats.breeds[0].life_span} ans </p>
          <h3>Poids moyen :</h3><p>{cats.breeds[0].weight.metric} kgs</p>        
          <button /* onClick={handleClick} */> DÉCOUVRIR UNE NOUVELLE RACE DE CHAT </button>
        </div>
      </div>
    </>
  )
  }


  export default CardCats 

  