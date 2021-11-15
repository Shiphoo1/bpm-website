import styles from "./Navigation.module.css";
import Registration from "./Registration";
const NavigationContainer = () => {
  const classNameReg = `${styles.navItems} ${styles.i7}`;
  return (
    <div className={styles.container}>
      <div className={`${styles.navItems} ${styles.i1}`}>BPM</div>
      <div className={styles.navItems}>Haqqımızda</div>
      <div className={styles.navItems}>Niyə biz?</div>
      <div className={styles.navItems}>Biznes Həllər</div>
      <div className={styles.navItems}>Əlaqə</div>
      <div className={`${styles.navItems} ${styles.i6}`}>Daxil ol</div>
      <Registration classNameReg={classNameReg} />
    </div>
  );
};

export default NavigationContainer;
//blalala //
