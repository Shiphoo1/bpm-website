import styles from "./Logos.module.css";
const Logos = () => {
  return (
    <div className={styles.logosWrapper}>
      <div className={styles.logosFlex}>
        <div className={styles.logosItems}></div>
        <div className={styles.logosItems}></div>
        <div className={styles.logosItems}></div>
        <div className={styles.logosItems}></div>
        <div className={styles.logosItems}></div>
        <div className={styles.logosItems}></div>
      </div>
    </div>
  );
};
export default Logos;
