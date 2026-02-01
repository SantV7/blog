import Header from "./assets/components/header/Header"
import '../src/styles/main/main.css'
import './styles/global.css'


function App() {
  
  return (
    <>
     <Header />
     
     <main>
       <section-grid>
         <section id="human-kaneki">
         </section>
         
         <section id="ghoul-kaneki">
         </section>

         <section id="img-kaneki">
          {/* Here stay the imgs sbout Kaneki */}
         </section>
       </section-grid>
     </main>
    </>
  )
}

export default App
