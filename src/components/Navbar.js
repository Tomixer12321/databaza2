import "./Navbar.css"
import {NavLink} from "react-router-dom"

const Footer = () => {
  return <header>
    <nav>
        <NavLink to="/">Domov</NavLink>
        <NavLink to="all-movies">Filmy</NavLink>
    </nav>
  </header>
}

export default Footer