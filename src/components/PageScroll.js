import styles from "./PageScroll.module.css";
import { Link } from "react-scroll";
const PageScroll = () => {
  return (
    <div className={styles.container}>
      <Link
        to={"FreeTest"}
        smooth={true}
        duration={1000}
        className={styles.navItems}
      >
        Haqqımızda
      </Link>
      <Link
        to={"FAQ"}
        smooth={true}
        duration={1000}
        className={styles.navItems}
      >
        Niyə biz?
      </Link>
      <Link
        to={"SnapShots"}
        smooth={true}
        duration={1000}
        className={styles.navItems}
      >
        Biznes Həllər
      </Link>
      <Link
        to={"Footer"}
        smooth={true}
        duration={1000}
        className={styles.navItems}
      >
        Əlaqə
      </Link>
    </div>
  );
};
export default PageScroll;
