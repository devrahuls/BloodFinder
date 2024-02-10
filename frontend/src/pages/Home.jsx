import  Hero  from "../components/hero"
import Navbar from "../components/navbar"
import Feat from "../components/feat"
import BloodGroupInfo from "../components/bloodGroupInfo"
import BloodGroupForm from "../components/bloodGroupForm"
import Footer from "../components/footer"

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <Feat/>
        <BloodGroupInfo/>
        <BloodGroupForm/>
        <Footer/>
    </>
  )
}

export default Home