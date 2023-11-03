import styled from './header.module.css'
import LOGO from '../../assets/LOGO-PROYECTO-3.png'
import BELL from '../../assets/bell.svg'
import CART from '../../assets/cart.svg'

const Header = () => {
  return (
    <header className={styled.header}>
      <img className={styled.imageLogo} src={LOGO} alt="LOGO" width={100} />
      <div className={styled.header_navigation}>
        <button className={styled.header__button} onClick={() => alert("Mi carrito de compras!!")}>
          <img src={CART} alt="carrito de compras" />
        </button>
        <button className={styled.header__button} onClick={() => alert("Notificacion activada!!")}>
          <img src={BELL} alt="notifications" />
        </button>
      </div>
    </header>
  )
}

export default Header