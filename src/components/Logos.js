import styles from "./Logos.module.css";
import {
  SiAsus,
  SiApple,
  SiXiaomi,
  SiSamsung,
  SiGoogle,
  SiBeatsbydre,
} from "react-icons/si";
const Logos = () => {
  return (
    <div className={styles.logosWrapper} id={"Logos"}>
      <div className={styles.logosFlex}>
        <div className={styles.logosItems}>
          <SiAsus size={"10rem"} fill={"#C9CBD0"} />
        </div>
        <div className={styles.logosItems}>
          <SiApple size={"5rem"} fill={"#C9CBD0"} />
        </div>
        <div className={styles.logosItems}>
          <SiXiaomi size={"5rem"} fill={"#C9CBD0"} />
        </div>
        <div className={styles.logosItems}>
          <SiSamsung size={"10rem"} fill={"#C9CBD0"} />
        </div>
        <div className={styles.logosItems}>
          <SiGoogle size={"5rem"} fill={"#C9CBD0"} />
        </div>
        <div className={styles.logosItems}>
          <SiBeatsbydre size={"5rem"} fill={"#C9CBD0"} />
        </div>
      </div>
    </div>
  );
};
export default Logos;
