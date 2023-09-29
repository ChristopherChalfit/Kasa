import { NavLink } from 'react-router-dom'
import './Header.sass'
import Logo from '../../assets/images/logo.svg'
function Header() {
    return (
      <header className="header">
        <NavLink to="/Kasa/">
            <img src={Logo}></img>
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
  