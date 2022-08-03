import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["center-container"]}>
          <h2>REACT LANDING PAGE</h2>
          <nav className={styles["nav"]}>
            <ul>
              <li>
                <a href="#features">FEATURES</a>
              </li>
              <li>
                <a href="#about-us">ABOUT US</a>
              </li>
              <li>
                <a href="#our-services">SERVICES</a>
              </li>
              <li>
                <a href="#gallery">GALLERY</a>
              </li>
              <li>
                <a href="#clients">CLIENTS</a>
              </li>
              <li>
                <a href="#team">TEAM</a>
              </li>
              <li>
                <a href="#get-touch">CONTACT</a>
              </li>
            </ul>
            <button
              className={styles["hidden"]}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FaBars size={26} />
            </button>
          </nav>
        </div>

        {isOpen && (
          <div className={styles["responsive-menu-active"]}>
            <ul>
              <li>
                <a href="#features">FEATURES</a>
              </li>
              <li>
                <a href="#about-us">ABOUT US</a>
              </li>
              <li>
                <a href="#our-services">SERVICES</a>
              </li>
              <li>
                <a href="#gallery">GALLERY</a>
              </li>
              <li>
                <a href="#clients">CLIENTS</a>
              </li>
              <li>
                <a href="#team">TEAM</a>
              </li>
              <li>
                <a href="#get-touch">CONTACT</a>
              </li>
            </ul>
          </div>
        )}

        {!isOpen && (
          <div className={styles["responsive-menu-hidden"]}>
            <ul>
              <li>FEATURES</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>GALLERY</li>
              <li>TESTIMONIALS</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
