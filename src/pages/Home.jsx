import CardCats from '../components/CardCats'
import '../styles/HomeStyle.css'


function Home(cats) {
return cats && (
  <>

    <div className="header">
      <h1>BIENVENUE À LA DÉCOUVERTE DES CHATS</h1>
      <p>Le Chat domestique est l'espèce, ou la sous-espèce, issue de la domestication du Chat sauvage, mammifère carnivore de la famille des Félidés. Il est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification.</p>
    </div>

<div className='list'>
    <CardCats/>
</div>
  </>
  )
}

export default Home

