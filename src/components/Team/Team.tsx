import styles from "./Team.module.scss";

export const Team = () => {
  return (
    <section className={styles["section-team"]} id="team">
      <div className="container">
        <div className={styles["team-content"]}>
          <h1>MEET THE TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>

          <div className={styles["team"]}>
            <div className={styles["person"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/team/04.jpg"
                alt=""
              />
              <h3>John Doe</h3>
              <p>Director</p>
            </div>
            <div className={styles["person"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/team/01.jpg"
                alt=""
              />
              <h3>John Doe</h3>
              <p>Director</p>
            </div>
            <div className={styles["person"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/team/02.jpg"
                alt=""
              />
              <h3>John Doe</h3>
              <p>Director</p>
            </div>
            <div className={styles["person"]}>
              <img
                src="https://react-landing-page-template.herokuapp.com/img/team/03.jpg"
                alt=""
              />
              <h3>John Doe</h3>
              <p>Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
