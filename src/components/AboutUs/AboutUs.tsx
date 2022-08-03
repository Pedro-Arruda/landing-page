import styles from "./AboutUs.module.scss";
import about from "../../assets/about.jpg";

export const AboutUs = () => {
  return (
    <section className={styles["section-about"]} id="about-us">
      <div className="container">
        <div className={styles["about-content"]}>
          <img src={about} alt="sobre" />
          <div className={styles["info-about"]}>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <h2>Why Choose Us?</h2>
            <div className={styles["details-info"]}>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Tempor incididunt</li>
                <li>Lorem ipsum dolor</li>
                <li>Incididunt ut labore</li>
              </ul>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Tempor incididunt</li>
                <li>Lorem ipsum dolor</li>
                <li>Incididunt ut labore</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
