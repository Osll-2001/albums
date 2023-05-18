import { useParams } from 'react-router-dom'
import NavSearch from '../components/NavSearch'
import ContainerInfoSong from '../components/ContainerInfoSong';

const InfoSong = () => {
    const {id}=useParams();
  return (
    <>
       <NavSearch/>
       <ContainerInfoSong idSong={id}/>
    </>
  )
}

export default InfoSong