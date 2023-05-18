import React from 'react'
import '../styles/ContainerInfoSong.css'
import Songs from '../assets/Songs'
import ItemAlbum from './ItemAlbum'

const ContainerInfoSong = ({idSong}) => {

  console.log(idSong)
  const dataSong=Songs.filter(song=> song.id==idSong)
  console.log(dataSong)

  return (
    <div className='ContainerInfo'>
        <div className='InfoAlbum'>
          <div className='Cover'>
              <img src={dataSong[0].urlCover} className='imgCover'/>
          </div>
          <div className='Info'>
            <h1>{dataSong[0].Name}</h1>
            <h2>{dataSong[0].Band}</h2>
            <h2>{dataSong[0].Year}</h2>
            <h3>{dataSong[0].numberSongs} Canciones</h3>
          </div>
        </div>
        <div className='ListSong'>
          <h1 className='TitleListSong'>Lista de canciones</h1>
          {dataSong[0].songs?.map((song)=>(<ItemAlbum key={song.id} song={song}></ItemAlbum>))}
        </div>
    </div>
  )
}

export default ContainerInfoSong