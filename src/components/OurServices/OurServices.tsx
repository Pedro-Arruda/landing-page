import {
  FaChartBar,
  FaCloud,
  FaCode,
  FaDesktop,
  FaDownload,
  FaRegComments,
} from "react-icons/fa";
import styles from "./OurService.module.scss";

export const OurServices = () => {
  return (
    <section className={styles["section-our-services"]}>
      <div className="container">
        <div className={styles["our-services-content"]}>
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>

          <div className={styles["our-services"]}>
            <div className={styles["service"]}>
              <div className={styles["icon"]}>
                <FaRegComments color="white" size={35} />
              </div>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis bibendum dolor feugiat at.
              </p>
            </div>
            <div className={styles["service"]}>
              <div className={styles["icon"]}>
                <FaChartBar color="white" size={35} />
              </div>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis bibendum dolor feugiat at.
              </p>
            </div>
            <div className={styles["service"]}>
              <div className={styles["icon"]}>
                <FaCloud color="white" size={35} />
              </div>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis bibendum dolor feugiat at.
              </p>
            </div>
            <div className={styles["service"]}>
              <div className={styles["icon"]}>
                <FaCode color="white" size={35} />
              </div>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis bibendum dolor feugiat at.
              </p>
            </div>
            <div className={styles["service"]}>
              <div className={styles["icon"]}>
                <FaDesktop color="white" size={35} />
              </div>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis bibendum dolor feugiat at.
              </p>
            </div>
            <div className={styles["service"]}>
              <div className={styles["icon"]}>
                <FaDownload color="white" size={35} />
              </div>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis bibendum dolor feugiat at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
