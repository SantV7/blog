import '../../../styles/header/header.css'

const Header = () => {
  return (
    <>
    <header>
        <h1>Ken Kaneki</h1>
        <span id='human-ghoul-span'>Human   
          <span className='font-ease-lake'> | </span>
          <div className='font-ease-lake' id="ghoul-red"> Ghoul</div>
        </span>
    </header>
    </>
  )
}

export default Header