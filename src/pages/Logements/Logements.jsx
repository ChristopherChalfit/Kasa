import { useParams } from "react-router-dom";
import DataGallery from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Caroussel from "../../components/Caroussel/Caroussel";
import Error from '../Error/Error'
import "./_Logements.sass";
import Tag from "../../components/Tags/Tag";
function Logements() {
  const { id } = useParams();
  const location = DataGallery.find((location) => location.id === id);
  if (!location) {
    return <Error/>
  } else {
    return (
      <main className="logement">
        <Caroussel/>
        <section className="logement--card">
        <h1>{location.title}</h1>
        <p>{location.location}</p>
          <Tag tags={location.tags}/>
        <div className="logement--information">
          <Collapse title="Description" content={location.description} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {location.equipments.map((equipements, index) => (
                  <li key={index}>{equipements}</li>
                ))}
              </ul>
            }
          />
        </div>
        </section>
      </main>
    );
  }
}

export default Logements;
