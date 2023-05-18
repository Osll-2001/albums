import React from 'react'

const ItemAlbum = ({song}) => {
  return (
    <div>
        <h4>{song.numTrack}.- {song.name} - {song.length}</h4>
    </div>
  )
}

export default ItemAlbum