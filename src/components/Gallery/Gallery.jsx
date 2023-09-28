import { Link } from 'react-router-dom'
import Datagallery from '../../data/logements.json'
import './Gallery.sass'
function Footer({logements}) {
    return (
        
        <section className='logements'>
        <div className='logements__list'>
            {logements && logements.map((location) => (
                <div key={location.id} className='logements__list-item'>
                    <Link to={"/logements/" + location.id} className='logements__list-item-card'>
                        <img src={location.cover} alt={location.title} className=' logements-cover'/>
                        <h2 className='logements-title'>{location.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    </section>
    )
  }
  
  export default Footer
  