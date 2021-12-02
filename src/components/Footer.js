import styles from "./Footer.module.css";
import PageScroll from "./PageScroll";
import { BsArrowRight } from "react-icons/bs";
import { SiFacebook, SiTwitter, SiLinkedin, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.container} id={"Footer"}>
      <div className={styles.smallContainer}>
        <PageScroll />
        <div className={styles.logos}>
          <SiFacebook size={"2rem"} fill={"#919EAB"} />
          <SiTwitter size={"2rem"} fill={"#919EAB"} />
          <SiLinkedin size={"2rem"} fill={"#919EAB"} />
          <SiInstagram size={"2rem"} fill={"#919EAB"} />
        </div>
        <div className={styles.copyright}>
          © PRONET MMC 2003-2020. Bütün hüquqlar qorunur.
        </div>
      </div>
      <div className={styles.smallContainer2}>
        <div className={styles.header}>
          Yenilikləri qaçırmamaq üçün abunə ol!
        </div>
        <form>
          <input name={"emailInput"} placeholder={"Enter your email"}></input>
        </form>
        <div className={styles.button}>
          ABUNƏ OL
          <BsArrowRight size={"2.2rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
