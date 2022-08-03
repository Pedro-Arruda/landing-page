import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["center-container"]}>
        <h2>REACT LANDING PAGE</h2>
        <nav className={styles["nav"]}>
          <ul>
            <li>FEATURES</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>GALLERY</li>
            <li>TESTIMONIALS</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
