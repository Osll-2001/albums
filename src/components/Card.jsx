import '../styles/Card.css'
import { Link } from 'react-router-dom'

const Card = ({data}) => {

  return (
    <Link className='infoAlbumLink' to={`/info-song/${data.id}`}>
    <div className="ContainerCard">
        <div className="Card">
            <div className="ImageCard">
                <img src={data.urlCover} alt="Album cover"/>
            </div>
            <div className="DescriptionCard">
                <h3 className='NameAlbum'>{data.Name}</h3>
                <p className='BandAlbum'>{data.Band}</p>
                <p className='YearAlbum'>{data.Year}</p>
                <p className='SongsAlbum'>{data.numberSongs} Canciones</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Card