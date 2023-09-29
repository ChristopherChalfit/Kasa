import { Link } from 'react-router-dom'
import './Gallery.sass'
function Gallery({logements}) {
    return (
        <section className='logements'>
        <div className='logements__list'>
            {logements && logements.map((location) => (
                <div key={location.id} className='logements__list-item'>
                    <Link to={"/Kasa/logements/" + location.id} className='logements__list-item-card'>
                        <img src={location.cover} alt={location.title} className=' logements-cover'/>
                        <h2 className='logements-title'>{location.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    </section>
    )
  }
  
  export default Gallery
  