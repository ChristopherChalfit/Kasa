import Error404 from '../../assets/images/404.webp'
import { NavLink } from 'react-router-dom'
import './Error.sass'
function Error() {
    return (
      <main className='errorpage'>
      <img src={Error404} alt="Erreur" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
          Retourner sur la page d’accueil
      </NavLink>
  </main>
    )
  }
  
  export default Error
  