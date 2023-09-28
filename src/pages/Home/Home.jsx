import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import "./Home.sass"

function Home({logements}) {
    return (
      <main>
        <Banner page="home" content="Chez vous, partout et ailleurs"/>
        <Gallery {...logements}/>
      </main>
    )
  }
  
  export default Home
  