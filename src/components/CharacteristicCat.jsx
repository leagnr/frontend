import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/CharacteristicStyle.css'



function CharacteristicCat () {

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
  }, [])

  return cats &&(
    <div className='table'>
      <h2>Les caractéristiques du chats</h2>
    
      <table className='table-cat'>
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
  )
  }
  export default CharacteristicCat   