import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="container my-5">
      <ul className="d-flex list-unstyled">
        <li className="me-4"><NavLink to='/'>Homepage</NavLink></li>
        <li className="me-4"><NavLink to='/about-us'>About Us</NavLink></li>
        <li className="me-4"><NavLink to='products'>Products</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
