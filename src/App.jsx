import Header from "./assets/components/header/Header"
import '../src/styles/main/main.css'
import './styles/global.css'
import gsap from "gsap"
import { useEffect } from "react"
import Skills from "./assets/components/main/Skills"


function App() {
  useEffect(() => {
     gsap.fromTo('.animation-card', {
       opacity: 0,
       y: -230
      }, {
        opacity: 1,
        y:0,
        stagger: {
          each:0.1,
          from: 'end'
        },
        x: 0,
        ease: 'power2.inOut',
        duration: 2,
        delay:0.45,
    })
  }, [])

  return (
    <>
     <Header />
     
     <main>
       <section id="section-grid">
         <section className="animation-card" id="human-kaneki">
          <header>
            <span></span>
            <div id="human-age" className="age-area">18-19y</div>
          </header>  

          <section className="text-styling-kaneki-phases" id="text-about-kaneki-human">
              <p>Ken Kaneki era um estudante de literatura quieto e gentil. Passava o tempo lendo na livraria Anteiku, onde também trabalhava, e saía com seu único amigo próximo, Hide. Sua vida pacata terminou brutalmente após um encontro com a ghoul Rize, que o atacou. Para salvá-lo, médicos transplantaram órgãos dela, transformando-o em um híbrido humano-ghoul. Seu último ato como humano foi um simples café com Rize – ironia cruel que marcou o fim de sua vida normal.</p>        
            <div className="citacao"><q>Não era nem mesmo um encontro. Apenas um café. <cite>- Ken Kaneki</cite></q></div>
          </section>
         </section>

         <section className="animation-card" id="ghoul-kaneki">
          <header>
            <span></span>
            <div id="ghoul-age" className="age-area">19-20y</div>
          </header>

          <section className="text-styling-kaneki-phases" id="text-about-kaneki-ghoul">
             <p>Transformado em híbrido, Kaneki acordou para um pesadelo: sua fome agora era por carne humana. Treinado por Touka no Anteiku, aprendeu a controlar seu kagune e sobreviver no submundo dos ghouls. Seu cabelo embranqueceu do trauma e sua mente se dividiu entre sua gentileza original e a brutalidade necessária para viver. Adotou identidades como "Cascavel" e enfrentou torturas que forjaram sua força. Tornou-se um símbolo da ponte impossível entre humanos e ghouls, um líder relutante em uma guerra cruel.</p>
            <div className="citacao"><q>Se eu não posso ser feliz, então pelo menos posso ser forte. <cite>- Ken Kaneki</cite></q></div>
          </section>
         </section>

         <section className="animation-card" id="married-kaneki-area">
          <header>
            <span></span>
            <div id="married-age" className="age-area">23y</div>
          </header>

          <section className="text-styling-kaneki-phases" id="text-about-kaneki-married">
            <p>Ken Kaneki encontrou paz ao lado de Touka. Juntos, administram o café :re e criam sua filha Ichika. O ex-Cascavel agora vive os dias simples que sempre desejou: família, livros e café. A luta acabou, o lar foi construído.</p>
            <div className="citacao"><q>Eu não preciso de um mundo onde ninguém tem que chorar. Apenas um onde meus entes queridos possam sorrir. <cite>- Ken Kaneki</cite></q></div>
          </section>
         </section>
       </section>
     </main>
     <Skills />
    </>
  )
}

export default App
