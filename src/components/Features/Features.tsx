import { useEffect, useState } from "react";
import styles from "./Features.module.scss";
import {
  FaBullhorn,
  FaMagic,
  FaRegComments,
  FaRegFileAlt,
} from "react-icons/fa";

export const Features = () => {
  const [isStartAnimation, setIsStartAnimation] = useState(false);

  useEffect(() => {
    const scrollPosition = () => {
      if (window.scrollY > 100) {
        setIsStartAnimation(true);
        console.log("oi");
      }
    };

    window.addEventListener("scroll", scrollPosition);

    return window.removeEventListener("scroll", scrollPosition);
  }, []);

  return (
    <section className={styles["section-features"]} id="features">
      <div className="container">
        <div className={styles["features-content"]}>
          <h1>Features</h1>

          <div className={styles["features"]}>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <FaRegComments color="white" size={35} />
              </div>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              </p>
            </div>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <FaBullhorn color="white" size={35} />
              </div>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              </p>
            </div>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <FaMagic color="white" size={35} />
              </div>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              </p>
            </div>
            <div className={styles["feature"]}>
              <div className={styles["icon"]}>
                <FaRegFileAlt color="white" size={35} />
              </div>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
