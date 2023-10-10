import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Caroussel from "../../components/Caroussel/Caroussel";
import Error from "../Error/Error";
import "./_Logements.sass";
import Tag from "../../components/Tags/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
function Logements({logement}) {
  const { id } = useParams();
  if(logement === undefined){
    return <Error />;
  }
  const location = logement.find((location) => location.id === id);
  if (!location) {
    return <Error />;
  } else {
    return (
      <main className="logement">
        <Caroussel image={location.pictures}/>
        <section className="logement--card">
          <div className="logement__container">
          <div className="logement--title">
            <h1 className="logement--textred">{location.title}</h1>
            <p className="logement--textred">{location.location}</p>
            <Tag tags={location.tags} />
          </div>
          <div className="logement__container-host">
          <Host hostName={location.host.name} hostPicture={location.host.picture} />
          <Rating rating={location.rating}/>
          </div>
          </div>
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
