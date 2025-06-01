import Customer from "./components/Customer"
import DigitalExperience from "./components/DigitalExperience"
import Footer from "./components/Footer"
import GotProject from "./components/GotProject"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Orgainization from "./components/Orgainization"
import Service from "./components/Service"
import WorkStill from "./components/WorkStill"

function App() {


  return (
    <>
    <div className="bg-[url(./assets/heroGroup.png)] bg-no-repeat  ">
      <Nav/>
    <Hero/>
    </div>
    <DigitalExperience/>
    <WorkStill/>
    <Service/>
    <Orgainization/>
    <Customer/>
    <GotProject/>
    <Footer/>
      
    </>
  )
}

export default App
