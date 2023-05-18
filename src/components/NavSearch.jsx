import '../styles/NavSearch.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavSearch = ({findAlbum}) => {

  const [nameAlbum, setNameAlbum] = useState("")

  const handleNameAlbum=({target})=>{
    setNameAlbum(target.value)
  }

  const searchAlbum=()=>{
    const nameCapitalized = nameAlbum.charAt(0).toUpperCase() + nameAlbum.slice(1).toLowerCase();
      findAlbum(nameCapitalized)
  }

  return (
    <nav className="NavSearch">
        <div className="ItemsNavDiv">
            <ul className='Items'>
            <Link className='Link' to={`/`}><li className='Item'>Home</li></Link>
            <Link className='Link' to={'/about'}><li className='Item'>About</li></Link>
            </ul>
        </div>
        <div className="Search">
            <input type="text"  className='InputSearch' value={nameAlbum} name='inputSearch' onChange={handleNameAlbum} placeholder='Album name'/>
            <button className='ButtonSearch' onClick={searchAlbum}>Search</button>
        </div>
    </nav>
  )
}

export default NavSearch