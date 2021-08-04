import './styles.scss'

import Logo from '../../assets/images/logo.svg'

export const Header = () => {
   return (
      <header>
         <a href="/">
            <img src={Logo} alt="logo" />
         </a>
      </header>
   )
}