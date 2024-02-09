import  Hero  from "../components/hero"
import Navbar from "../components/navbar"
import Feat from "../components/feat"
import BloodGroupInfo from "../components/bloodGroupInfo"
import BloodGroupForm from "../components/bloodGroupForm"

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <Feat/>
        <BloodGroupInfo/>
        <BloodGroupForm/>
    </>
  )
}

export default Home