import { useEffect } from "react";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  // const fetchImagens = async () => {
  //   const response = await fetch("https://source.unsplash.com/random");
  //   console.log(response);
  // };

  // useEffect(() => {
  //   fetchImagens();
  // }, []);

  return (
    <section className={styles["section-gallery"]}>
      <div className="container">
        <div className={styles["gallery-content"]}>
          <h1>Gallery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>

          <div className={styles["gallery"]}>
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/01-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/02-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/03-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/04-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/05-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/06-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/07-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/08-small.jpg"
              alt=""
            />
            <img
              src="https://react-landing-page-template.herokuapp.com/img/portfolio/09-small.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
