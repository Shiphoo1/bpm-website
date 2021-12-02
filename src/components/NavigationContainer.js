import styles from "./Navigation.module.css";
import PageScroll from "./PageScroll";
import Registration from "./Registration";
import { animateScroll as scroll } from "react-scroll";
const NavigationContainer = () => {
  const classNameReg = `${styles.navItems} ${styles.i7}`;
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          scroll.scrollToTop();
        }}
        className={`${styles.navItems} ${styles.i1}`}
      >
        BPM
      </div>
      <PageScroll />
      <div className={`${styles.navItems} ${styles.i6}`}>Daxil ol</div>
      <Registration classNameReg={classNameReg} />
    </div>
  );
};

export default NavigationContainer;
//blalala //
