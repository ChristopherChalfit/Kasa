import { NavLink } from 'react-router-dom'
import './Header.sass'
import Logos from '../../assets/images/Logo.svg'
function Header() {
    return (
      <header className="header">
        <NavLink to="/Kasa/">
            <img src={Logos}></img>
        </NavLink>
        <nav className='header__navbar'>
            <NavLink to="/Kasa/">
                Accueil
            </NavLink>
            <NavLink to="/Kasa/about">
                A Propos
            </NavLink>
        </nav>
      </header>
    )
  }
  
  export default Header
  