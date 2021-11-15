import styles from "./SectionOne.module.css";
import { BsArrowRight } from "react-icons/bs";
const SectionOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.innerModal}>
          <h1 className={styles.header}>Effektiv Idarə et</h1>
          <p className={styles.par}>
            Prospect kiçik və orta ölçülü biznesin idarə edilməsi üçün nəzərdə
            tutulmuş bir proqram təminatıdır. Bu proqram təminatı ilə siz bütün
            biznes prosesləri bir mərkəzdən idarə edə, işlərin gedişatına və
            nəticələrə nəzarət edə bilərsiniz.
          </p>
          <div className={styles.button}>
            <div className={styles.boxItems}>TEST EDIN</div>
            <div className={styles.boxItems}>
              <BsArrowRight
                style={{ fontSize: "2.4rem", marginTop: "0.8rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.clip}></div>
      </div>
    </div>
  );
};
export default SectionOne;
