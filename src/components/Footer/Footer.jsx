import "./Footer.sass"
import WhiteLogo from '../../assets/images/WhiteLogo.webp'
function Footer() {
    return (
        <footer className='footer'>
        <img src={WhiteLogo} alt="Logo de Kasa" className='footer__image' />

        <p className='footer__info'>© 2020 Kasa. All rights reserved</p>
       </footer>
    )
  }
  
  export default Footer
  