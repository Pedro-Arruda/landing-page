import styles from "./GetInTouch.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const GetInTouch = () => {
  return (
    <section className={styles["get-touch-section"]} id="get-touch">
      <div className="container">
        <div className={styles["get-touch-content"]}>
          <div className={styles["get-touch-form"]}>
            <h1>GET IN TOUCH</h1>
            <p>
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </p>

            <form className={styles["form-container"]}>
              <div className={styles["input-container"]}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>

              <textarea placeholder="Message" />
              <button>Send Message</button>
            </form>
          </div>
          <div className={styles["get-touch-info"]}>
            <h3>Contact Info</h3>

            <h4>Address</h4>
            <p>4321 California St, San Francisco, CA 12345</p>

            <h4>Phone</h4>
            <p>+1 123 456 1234</p>

            <h4>Email</h4>
            <p>info@company.com</p>
            <div className={styles["icons"]}>
              <i>
                <FaFacebookF size={18} />
              </i>
              <i>
                <FaTwitter size={18} />
              </i>
              <i>
                <FaInstagram size={18} />
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
