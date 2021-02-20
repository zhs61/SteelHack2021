import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [error, setError] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { currentUser, logout } = useAuth();
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   console.log("current user ", currentUser);
  // }, []);

  // window.addEventListener("resize", showButton);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      // history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <nav className="navbar">
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        SKI
        <i className="fas fa-skiing" />
      </Link>
      {/* </div> */}
      {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
      {/* </div> */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
            Products
          </Link>
        </li>

        {currentUser ? (
          <li className="nav-item">
            <Link className="nav-links" onClick={handleLogout}>
              Log Out
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Log In
            </Link>
          </li>
        )}
      </ul>
      {/* {button && <Button>Log In</Button>} */}
    </nav>
  );
}

export default Navbar;
