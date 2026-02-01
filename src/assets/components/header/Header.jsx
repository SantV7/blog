import { useEffect } from 'react';
import '../../../styles/header/header.css'
import { gsap } from 'gsap';

const Header = () => {

useEffect(() => {
  gsap.to("#ghoul-red", {
    delay: 0.6,
    duration: 2.11,
    opacity: 1,
    ease: 'power2.out'
  })
},[])



  return (
    <>
    <header>
        <h1>Ken Kaneki</h1>
        <div id='human-ghoul'>Human   
          <div className='font-ease-lake'> | </div>
          <div className='font-ease-lake' id="ghoul-red"> Ghoul</div>
        </div>
    </header>
    </>
  )
}

export default Header