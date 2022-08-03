import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <div className={styles["overlay"]}>
        <div className="container">
          <div className={styles["hero-content"]}>
            <h1>WE ARE A LANDING PAGE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              dapibus leo nec ornare diam sed commodo nibh ante facilisis
              bibendum.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};
