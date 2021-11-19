import styles from "./Comments.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
const Comments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.headerTextPrimary}>Müştəri rəyləri</div>
          <div className={styles.headerTextSecondary}>
            Rəyləri aşağıdan oxuya bilərsiniz
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.smallButton}>
            <BsArrowLeft color={"inherit"} style={{ fontSize: "2.4rem" }} />
          </div>
          <div className={styles.smallButton}>
            <BsArrowRight color={"inherit"} style={{ fontSize: "2.4rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
