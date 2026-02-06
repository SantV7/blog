import { useEffect } from 'react'
import '../../../styles/skills.css'
import ScrollReveal from 'scrollreveal'
const Skills = () => {

  useEffect(() => {
    ScrollReveal().reveal('#main-info', {
       reset: true,
       delay:0.15,
       distance: '57px',
       duration: 860,
    })
  }, [])

  
  return (
    <>
    <aside id='info'>
      <section id='main-info' className='main-info'>
        <div id='main-data-kaneki'>
          <p>Nome: Ken Kaneki</p>
          <p>
            Sexo: Masculino
          </p>
        
          <p>Kagune: Rinkaku</p>
          <p>Variações: Diversas varias </p>
        </div>
      </section>

      <section id='skills-section'>
        <header>
          <h1>Habilidades</h1>
        </header>
        <div id='skills-document'>
          <p>Classe: Ghoul de um olho</p>
          <p>Estamina: Alta</p>
          <p>Força: Nível - SSS</p>
          <p>Resistência: Nível - +SSS</p>
          <p>Alcance: 12M com suas Kagunes</p>
          <p>Velocidade: Nível - SSS</p>
        </div>
      </section>
    </aside>
    </>
  )
}

export default Skills