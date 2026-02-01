import Header from "./assets/components/header/Header"
import '../src/styles/main/main.css'
import './styles/global.css'


function App() {
  
  return (
    <>
     <Header />
     
     <main>
       <section id="section-grid">
         <section id="human-kaneki">
          <header>
            <span></span>
            <div id="human-age" className="age-area">18y</div>
          </header>
         </section>

         <section id="ghoul-kaneki">
          <header>
            <span></span>
            <div id="ghoul-age" className="age-area">21y</div>
          </header>
         </section>

         <section id="img-kaneki">
          <header>
            <span></span>
            <div id="married" className="age-area">25y</div>
          </header>
         </section>
       </section>
     </main>
    </>
  )
}

export default App
