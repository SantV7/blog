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

          <section className="text-styling-kaneki-phases" id="text-about-kaneki-human">
              <p>Ken Kaneki era um estudante de literatura quieto e gentil. Passava o tempo lendo na livraria Anteiku, onde também trabalhava, e saía com seu único amigo próximo, Hide. Sua vida pacata terminou brutalmente após um encontro com a ghoul Rize, que o atacou. Para salvá-lo, médicos transplantaram órgãos dela, transformando-o em um híbrido humano-ghoul. Seu último ato como humano foi um simples café com Rize – ironia cruel que marcou o fim de sua vida normal.</p>        
          </section>
         </section>

         <section id="ghoul-kaneki">
          <header>
            <span></span>
            <div id="ghoul-age" className="age-area">21y</div>
          </header>

          <section className="text-styling-kaneki-phases" id="text-about-kaneki-ghoul">
             <p>Transformado em híbrido, Kaneki acordou para um pesadelo: sua fome agora era por carne humana. Treinado por Touka no Anteiku, aprendeu a controlar seu kagune e sobreviver no submundo dos ghouls. Seu cabelo embranqueceu do trauma e sua mente se dividiu entre sua gentileza original e a brutalidade necessária para viver. Adotou identidades como "Cascavel" e enfrentou torturas que forjaram sua força. Tornou-se um símbolo da ponte impossível entre humanos e ghouls, um líder relutante em uma guerra cruel.</p>
          </section>
         </section>

         <section id="married-kaneki-area">
          <header>
            <span></span>
            <div id="married-age" className="age-area">25y</div>
          </header>

          <section className="text-styling-kaneki-phases" id="text-about-kaneki-married">
            <p>Ken Kaneki encontrou paz ao lado de Touka. Juntos, administram o café :re e criam sua filha Ichika. O ex-Cascavel agora vive os dias simples que sempre desejou: família, livros e café. A luta acabou, o lar foi construído.</p>
          </section>
         </section>
       </section>
     </main>
    </>
  )
}

export default App
