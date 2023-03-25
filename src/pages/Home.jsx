import CardCats from '../components/CardCats'
import '../styles/HomeStyle.css'
//import CharacteristicCat from '../components/CharacteristicCat'
//import Button from '../components/Button'


function Home(cats) {
return cats && (
  <>
    <div className="header">
      <h1>BIENVENUE À LA DÉCOUVERTE DES CHATS</h1>
      <p>Le Chat domestique est l'espèce, ou la sous-espèce, issue de la domestication du Chat sauvage, mammifère carnivore de la famille des Félidés. Il est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification. Chaque chat est différent, découvrez-les.</p>
    </div>

  <div>
      <CardCats/>
      {/*  J'ai créer des components pour diviser mon code, mais lorsque je l'ai affiche, la page ne refresh pas, j'ai donc tous réunie sur une seule page pour cela fonctionne     
      <CharacteristicCat/>   
      <Button/>  */}
  
  </div>
  </>
  )
}

export default Home

