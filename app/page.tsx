import Featured from "./components/Featured"
import Offer from "./components/Offer"
import Slider from "./components/Slider"

function Home() {
  return (
    <main>
     <Slider />
     <Offer />
     <Featured />
    </main>
  )
}

export default Home