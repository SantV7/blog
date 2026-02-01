import Header from "./assets/components/header/Header"
import '../src/styles/main/main.css'
import './styles/global.css'
import HumanKaneki from "./assets/components/main/HumanKaneki"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

function App() {
  
  return (
    <>
     <Header />
     
     <main>
      <HumanKaneki />
  
     </main>
    </>
  )
}

export default App
