import { useParams } from 'react-router-dom'
import NavSearch from '../components/NavSearch'
import ContainerInfoAlbum from '../components/ContainerInfoAlbum';

const InfoAlbum = () => {
    const {id}=useParams();
  return (
    <>
       <NavSearch page={'Info'}/>
       <ContainerInfoAlbum idAlbum={id}/>
    </>
  )
}

export default InfoAlbum