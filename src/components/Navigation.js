import styles from "./Navigation.module.css";
import { useState } from "react";

const NavigationMenu = () => {
  return <div className={styles.nav_deactive}></div>;
};

const Navigation = () => {
  const [navStatus, setNavStatus] = useState(true);
  const navHandler = () => {
    setNavStatus(!navStatus);
  };
  return (
    <div>
      {navStatus && <NavigationMenu />}
      <div className={styles.wrapper} onClick={navHandler}>
        {/* <button></button> */}
        <span className={styles.icon}> </span>
      </div>
    </div>
  );
};
export default Navigation;
//blalala //
