import "./Navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return <header>
    <nav>
        <NavLink to="/">Domov</NavLink>
        <NavLink to="all-movies">Filmy</NavLink>
        <NavLink to="Form">Formular</NavLink>
    </nav>
  </header>
}

export default Navbar 