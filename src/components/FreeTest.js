import styles from "./FreeTest.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const FreeTest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexWrapper}>
        <div className={styles.text}>
          <div className={styles.textHeader}>Pulsuz Yoxlayın</div>
          <div className={styles.textDescription}>
            Justo, nullam magna est eget nullam. Velit auctor condimentum quam
            pretium egestas sed eu auctor nulla. Vitae lacus.
          </div>
          <div className={styles.button}>
            <div className={styles.buttonItems}>İNDİ YOXLA</div>
            <div className={styles.buttonItems}>
              <BsArrowRight
                style={{ fontSize: "2.4rem", marginTop: "0.8rem" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <div className={styles.circleWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.smallCircle}></div>
          </div>
          <div
            style={{ background: "url(/hand.svg)" }}
            className={styles.handPic}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default FreeTest;
