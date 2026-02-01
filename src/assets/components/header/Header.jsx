import { useEffect } from 'react';
import '../../../styles/header/header.css'
import { gsap } from 'gsap';

const Header = () => {

useEffect(() => {
  gsap.fromTo('#ghoul-red', {
    rotate: 280,
    opacity: 0,
  } ,{
    delay: 0.4,
    rotate: 0 ,
    duration: 0.5,
    opacity: 1,
    ease: 'power2.out',
  })
},[])


  return (
    <>
    <header>
        <h1>Ken Kaneki</h1>
        <div id='human-ghoul'>Human   
          <div className='font-ease-lake'> | </div>
          <div className='font-ease-lake' id='ghoul-red'> <span id="ghoul-red-word">Ghoul</span></div>
        </div>
    </header>
    </>
  )
}

export default Header