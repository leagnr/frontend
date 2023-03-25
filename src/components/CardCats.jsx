import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/CardCatsStyle.css'
import '../styles/CharacteristicStyle.css'
import '../styles/ButtonStyle.css'


function CardCats () {
const [cats, setCats] = useState()

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

const handleRefresh = () => {
  window.location.reload();
} 
  return cats &&(
    <>
    <div className='card-cat'>
      <img src={cats.url}/>

      <div className='description'>
        <h2>{cats.breeds[0].name}</h2>
        <h3>Description :</h3><p>{cats.breeds[0].description}</p>
        <h3>Origine :</h3><p>{cats.breeds[0].origin}</p>
        <h3>Espérence de vie :</h3><p>Entre <strong>{cats.breeds[0].life_span}</strong> ans </p>
        <h3>Poids moyen :</h3><p>Entre <strong>{cats.breeds[0].weight.metric}</strong> kgs</p>        
      </div>
    </div>

    {/* J'ai ainsi importé le contenu de mon components CHARACTERISTIC ici pour que cela fonctionne*/}
    <div className='characteristic'>
      <h2>Les caractéristiques du chats</h2>
      <table >
          <thead>
            <th>Attributs</th>
            <th>Note</th>
          </thead>
          <tbody>
            <tr>
              <td className='title'>Niveau d'affection</td>
              <td>{cats.breeds[0].affection_level} /5</td>
            </tr>
            <tr>
            <td className='title'>Niveau d'énergie</td>
            <td>{cats.breeds[0].energy_level} /5</td>
            </tr>
            <tr>
              <td className='title'>Niveau de sociabilité</td>
              <td>{cats.breeds[0].social_needs} /5</td>
            </tr>
            <tr>
            <td className='title'>Niveau d'intelligence</td>
            <td>{cats.breeds[0].intelligence} /5</td>
            </tr>
            <tr>
              <td className='title'>Niveau de rareté</td>
              <td>{cats.breeds[0].rare} /5</td>
            </tr>
            <tr>
            <td className='title'>Accepte les chiens</td>
              <td>{cats.breeds[0].dog_friendly} /5</td>
            </tr>
            <tr>
            <td className='title'>Vivre à l'intérieur</td>
              <td>{cats.breeds[0].indoor} /5</td>
            </tr>
          </tbody>
      </table>
    </div>

    {/* J'ai ainsi importé le contenu de mon components BOUTON ici pour que cela fonctionne */}
    <div className='button'>
      <button  onClick={handleRefresh}> DÉCOUVRIR UNE NOUVELLE RACE DE CHAT </button>
    </div>
    </>
  )
  }
  export default CardCats   