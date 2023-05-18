import NavSearch from '../components/NavSearch'
import ContainerCards from '../components/ContainerCards'
import { useState } from 'react'

const Home = () => {
  const [isAlbumSearch,setIsAlbumSearch]=useState(false);
  const [albumName, setAlbumName] = useState("")

  const findAlbum=(album)=>{
      setIsAlbumSearch(true)
      setAlbumName(album)
  }

  return (
    <>
        <NavSearch findAlbum={findAlbum} /> 
        {isAlbumSearch ? <ContainerCards albumNameSearch={albumName}/> : <ContainerCards/>}
    </>
  )
}

export default Home