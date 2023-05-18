import '../styles/ContainerCards.css'
import Card from './Card'
import Albums from '../assets/Albums'

const ContainerCards = ({albumNameSearch}) => {

  const AlbumsSearch=Albums.filter((album)=> album.Name.includes(albumNameSearch));
  console.log(AlbumsSearch);

  return (
    <section className="ContainerCards">
        {albumNameSearch==null ? <> </> : AlbumsSearch.length==0 ? <h2 style={{color:'#fafafa'}}>No Se Pudo Encontrar una Concidencia :(</h2>: <></> }
        {albumNameSearch ? AlbumsSearch.map((album) => (<Card key={album.id} data={album}/>)) : Albums.map((album)=>(<Card key={album.id} data={album}/>))}
    </section>
  )
}

export default ContainerCards