import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul className="d-flex list-unstyled">
        <li className="ms-4"><NavLink to='/'>Homepage</NavLink></li>
        <li className="ms-4"><NavLink to='/about-us'>About Us</NavLink></li>
        <li className="ms-4"><NavLink to='products'>Products</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
