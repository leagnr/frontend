import axios from 'axios'
import { useEffect, useState } from 'react' 
import '../styles/ButtonStyle.css'



function Button() {

const [catData, setCatData] = useState()
const loadData = async () => {
const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
  
if (response.status === 200) {
const data = response.data[0]
setCatData(data)
}}
  
const handleRefresh = () => {
loadData() ;
 console.log('bouton cliquer = la page doit se refesh et faire apparaitre un nouveau chat')
}

useEffect(() => {
  setCatData()
 }, [])
  

  return (
    <>
    <div className='button-cat'>
      <button onClick={handleRefresh}> DÉCOUVRIR UNE NOUVELLE RACE DE CHAT </button>
    </div>
    </>
  )
  }
  export default Button   