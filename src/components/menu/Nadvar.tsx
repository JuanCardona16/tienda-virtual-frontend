import styled from './nadvar.module.css'
import HOMEIcon from '../../assets/home-simple-door.svg'
import PROFILEIcon from '../../assets/user.svg'
import FAVORITEIcon from '../../assets/heart.svg'

const Nadvar = () => {
  return (
    <div className={styled.container__nav}>
      <nav className={styled.nav}>
        <button className={styled.nav__button} onClick={() => alert('Home!!..')}>
          <img src={HOMEIcon} alt="icon home" width={32} />
        </button>
        <button className={styled.nav__button} onClick={() => alert('Home!!..')}>
          <img src={HOMEIcon} alt="icon home" width={32} />  
        </button>
        <button className={styled.nav__button} onClick={() => alert('Home!!..')}>
          <img src={HOMEIcon} alt="icon home" width={32} />  
        </button>
        <button className={styled.nav__button} onClick={() => alert('Home!!..')}>
          <img src={FAVORITEIcon} alt="icon favorites" width={32} />  
        </button>
        <button className={styled.nav__button} onClick={() => alert('User profile!!..')}>
          <img src={PROFILEIcon} alt="icon profile" width={32} />  
        </button>
      </nav> 
    </div>
  )
}

export default Nadvar