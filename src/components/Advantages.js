import styles from "./Advantages.module.css";
import { HiLightningBolt } from "react-icons/hi";

const SectionTwo = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Üstünlüklərimiz</h1>
      <div className={styles.container}>
        <div className={styles.gridItems}>
          <HiLightningBolt style={{ fontSize: "4.7rem" }} color={"#8BC5E5"} />
          <div className={styles.name}>Rahat interfeys</div>
          <div className={styles.desc}>Free delivery for all orders</div>
        </div>
        <div className={styles.gridItems}>
          <HiLightningBolt style={{ fontSize: "4.7rem" }} color={"#8BC5E5"} />
          <div className={styles.name}>Rahat interfeys</div>
          <div className={styles.desc}>Free delivery for all orders</div>
        </div>
        <div className={styles.gridItems}>
          <HiLightningBolt style={{ fontSize: "4.7rem" }} color={"#8BC5E5"} />
          <div className={styles.name}>Rahat interfeys</div>
          <div className={styles.desc}>Free delivery for all orders</div>
        </div>
        <div className={styles.gridItems}>
          <HiLightningBolt style={{ fontSize: "4.7rem" }} color={"#8BC5E5"} />
          <div className={styles.name}>Rahat interfeys</div>
          <div className={styles.desc}>Free delivery for all orders</div>
        </div>
        <div className={styles.gridItems}>
          <HiLightningBolt style={{ fontSize: "4.7rem" }} color={"#8BC5E5"} />
          <div className={styles.name}>Rahat interfeys</div>
          <div className={styles.desc}>Free delivery for all orders</div>
        </div>
        <div className={styles.gridItems}>
          <HiLightningBolt style={{ fontSize: "4.7rem" }} color={"#8BC5E5"} />
          <div className={styles.name}>Rahat interfeys</div>
          <div className={styles.desc}>Free delivery for all orders</div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
