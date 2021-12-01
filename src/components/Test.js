import styles from "./Test.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
const SectionOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.innerModal}>
          <h1 className={styles.header}>Effektiv Idarə et</h1>
          <p className={styles.par}>
            Prospect kiçik və orta ölçülü biznesin idarə edilməsi üçün nəzərdə
            tutulmuş bir proqram təminatıdır. Bu proqram təminatı ilə siz bütün
            biznes prosesləri bir mərkəzdən idarə edə, işlərin gedişatına və
            nəticələrə nəzarət edə bilərsiniz.
          </p>
        </div>
      </div>
      <div className={`${styles.item2}`}>
        <div style={{ background: "url(/test.svg)" }} className={styles.image}>
          <div className={styles.smallButton}>
            <BsArrowLeft style={{ fontSize: "2.4rem", fill: "#919eab" }} />
          </div>
          <div className={styles.smallButton}>
            <BsArrowRight style={{ fontSize: "2.4rem", fill: "#919eab" }} />
          </div>
        </div>
      </div>

      {/* <div className={styles.smallButton}></div> */}
    </div>
  );
};
export default SectionOne;
