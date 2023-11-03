import styled from './nadvar.module.css'
import HOMEIcon from '../../assets/home-simple-door.svg'

const Nadvar = () => {
  return (
    <div className={styled.container__nav}>
      <nav>
        <button onClick={() => alert('Home!!..')}>
          <img src={HOMEIcon} alt="icon home" />  
        </button>
      </nav> 
    </div>
  )
}

export default Nadvar