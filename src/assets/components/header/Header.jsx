import '../../../styles/header/header.css'

const Header = () => {
  return (
    <>
    <header>
        <h1>Ken Kaneki</h1>
        <span id='human-ghoul-span'>Human 
          <span className='font-ease-lake'>|</span>
          <span className='font-ease-lake' id="ghoul-red">Ghoul</span>
        </span>
    </header>
    </>
  )
}

export default Header