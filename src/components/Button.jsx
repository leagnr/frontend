import axios from 'axios'
import {useState } from 'react' 
import '../styles/ButtonStyle.css'



function Button() {

const [cats, setCats] = useState()

const loadData = async () => {
const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
  
if (response.status === 200) {
const data = response.data[0]
setCats(data)
}}
  
const handleRefresh = () => {
loadData();
}

  return (
    <>
    <div className='button'>
      <button onClick={handleRefresh}> DÉCOUVRIR UNE NOUVELLE RACE DE CHAT </button>
    </div>
    </>
  )
  }
  export default Button   