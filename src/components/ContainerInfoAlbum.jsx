import '../styles/ContainerInfoAlbum.css'
import Albums from '../assets/Albums'
import ItemAlbum from './ItemAlbum'

const ContainerInfoAlbum = ({idAlbum}) => {

  console.log(idAlbum)
  const dataAlbum=Albums.filter(album=> album.id==idAlbum)
  console.log(dataAlbum)

  return (
    <div className='ContainerInfo'>
        <div className='InfoAlbum'>
          <div className='Cover'>
              <img src={dataAlbum[0].urlCover} className='imgCover'/>
          </div>
          <div className='Info'>
            <h1>{dataAlbum[0].Name}</h1>
            <h2>{dataAlbum[0].Band}</h2>
            <h2>{dataAlbum[0].Year}</h2>
            <h3>{dataAlbum[0].numberSongs} Canciones</h3>
          </div>
        </div>
        <div className='ListSong'>
          <h1 className='TitleListSong'>Lista de canciones</h1>
          {dataAlbum[0].songs?.map((song)=>(<ItemAlbum key={song.id} song={song}></ItemAlbum>))}
        </div>
    </div>
  )
}

export default ContainerInfoAlbum