import './navbar.css';
import { Link, useLocation } from 'react-router-dom';



const Navbar = () => {

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return(
    <div className="navbar">
        <h3 className='appname'><i class="pro fa-solid fa-user-tie"></i>it's Me</h3>
        <ul className="nav-links">
          <li>
            <Link className={isActive('/') ? "active" : "hyperlinks"} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={isActive('/about') ? "active" : "hyperlinks"} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={isActive('/skills') ? "active" : "hyperlinks"} to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className={isActive('/myworks') ? "active" : "hyperlinks"} to="/myworks">
              My Works
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar;

