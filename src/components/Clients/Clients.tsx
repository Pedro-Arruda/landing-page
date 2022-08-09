import styles from "./Clients.module.scss";

export const Clients = () => {
  return (
    <section className={styles["clients-section"]} id="clients">
      <div className="container">
        <div className={styles["clients-content"]}>
          <h1>WHAT OUR CLIENTS SAY</h1>
          <div className={styles["clients"]}>
            <div className={styles["client"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/testimonials/01.jpg"
                alt=""
              />
              <div className={styles["client-info"]}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <p>
                  <strong>- John Doe</strong>
                </p>
              </div>
            </div>
            <div className={styles["client"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/testimonials/02.jpg"
                alt=""
              />
              <div className={styles["client-info"]}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <p>
                  <strong>- John Doe</strong>
                </p>
              </div>
            </div>
            <div className={styles["client"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/testimonials/03.jpg"
                alt=""
              />
              <div className={styles["client-info"]}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <p>
                  <strong>- John Doe</strong>
                </p>
              </div>
            </div>
            <div className={styles["client"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/testimonials/04.jpg"
                alt=""
              />
              <div className={styles["client-info"]}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <p>
                  <strong>- John Doe</strong>
                </p>
              </div>
            </div>
            <div className={styles["client"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/testimonials/05.jpg"
                alt=""
              />
              <div className={styles["client-info"]}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <p>
                  <strong>- John Doe</strong>
                </p>
              </div>
            </div>
            <div className={styles["client"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/testimonials/06.jpg"
                alt=""
              />
              <div className={styles["client-info"]}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </p>
                <p>
                  <strong>- John Doe</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
