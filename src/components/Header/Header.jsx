import { NavLink } from 'react-router-dom'
import './Header.sass'
import Logos from '../../assets/images/Logo.webp'
function Header() {
    return (
      <header className="header">
        <NavLink to="/">
            <img src={Logos}></img>
        </NavLink>
        <nav className='header__navbar'>
            <NavLink to="/">
                Accueil
            </NavLink>
            <NavLink to="/about">
                A Propos
            </NavLink>
        </nav>
      </header>
    )
  }
  
  export default Header
  