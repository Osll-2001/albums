import '../styles/NavSearch.css'
import { Link } from 'react-router-dom'

const NavSearch = () => {
  return (
    <nav className="NavSearch">
        <div className="ItemsNavDiv">
            <ul className='Items'>
            <Link className='Link' to={`/`}><li className='Item'>Home</li></Link>
            <Link className='Link' to={'/about'}><li className='Item'>Acerca De</li></Link>
            </ul>
        </div>
        <div className="Search">
            <input type="text"  className='InputSearch' placeholder='Nombre del Album'/>
            <button className='ButtonSearch'>Search</button>
        </div>
    </nav>
  )
}

export default NavSearch