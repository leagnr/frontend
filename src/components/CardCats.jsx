import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/CardCatsStyle.css'



function CardCats () {

  const [cats, setCats] = useState()

//methode pour recuperer les donnees depuis l'API
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

  return cats &&(
    <>

    <div className='cat'>
      <img src={cats.url}/>

      <div className='info-cat'>
        <h2>{cats.breeds[0].name}</h2>
        <h3>Description :</h3><p>{cats.breeds[0].description}</p>
        <h3>Origine :</h3><p>{cats.breeds[0].origin}</p>
        <h3>Espérence de vie :</h3><p>Entre <strong>{cats.breeds[0].life_span}</strong> ans </p>
        <h3>Poids moyen :</h3><p>Entre <strong>{cats.breeds[0].weight.metric}</strong> kgs</p>        
      </div>
    </div>

    </>
  )
  }
  export default CardCats   