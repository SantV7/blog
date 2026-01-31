import Header from "./assets/components/header/Header"
import HumanKaneki from "./assets/components/main/HumanKaneki"
import '../src/styles/main/main.css'
import './styles/global.css'
import GhoulKaneki from "./assets/components/main/GhoulKaneki"
function App() {
  
  return (
    <>
    <Header />
    <main>
      <HumanKaneki /> 
      <GhoulKaneki />
    </main>
    </>
  )
}

export default App
