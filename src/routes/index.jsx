import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import InfoSong from '../pages/InfoAlbum'
import About from '../pages/About'
const IndexRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />} />
        {/* Redireccionar el path / para que vaya siempre a /home */}
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/info-song/:id' element={<InfoSong />} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error404 />} />
  </Routes>
  )
}

export default IndexRouter