import '../styles/ContainerCards.css'
import Card from './Card'
import Songs from '../assets/Songs'

const ContainerCards = () => {
  return (
    <section className="ContainerCards">
        {Songs.map((song)=>(<Card key={song.id} data={song}/>))}
    </section>
  )
}

export default ContainerCards