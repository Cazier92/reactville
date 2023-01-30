// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'
import Wallet from './Wallet'

const Nav = ({setDaytime, cash}) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo'><img src={Logo} alt="" /></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <Wallet cash={cash}/>
      <Clock setDaytime={setDaytime}/>
    </nav>
  )
}

export default Nav