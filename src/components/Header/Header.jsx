import { NavLink } from 'react-router-dom'
import './Header.sass'
import Logo from '../../assets/images/logo.svg'
function Header() {
    return (
      <header className="header">
        <NavLink to="/">
            <img src={Logo}></img>
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
  