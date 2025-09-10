import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul className="d-flex list-unstyled">
        <li><NavLink to='/'>Homepage</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='products'>Products</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
