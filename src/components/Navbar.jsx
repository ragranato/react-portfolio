import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          className="toggle"
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faBars} className="burger" />
        </button>
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/experience">
          Experience
        </Link>
      </div>
    </div>
  );
}

export default Navbar