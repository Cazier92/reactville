// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'

const Nav = ({setDaytime}) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo'><img src={Logo} alt="" /></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <Clock setDaytime={setDaytime}/>
    </nav>
  )
}

export default Nav