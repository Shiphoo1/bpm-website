import styles from "./SnapShots.module.css";
import { MdOutlineDone } from "react-icons/md";

const SnapShots = () => {
  return (
    <div className={styles.container} id={"SnapShots"}>
      <div className={styles.header}>Nə üçün istifadə edə bilərəm</div>
      <div className={styles.snapShotsWrapper}>
        <div
          style={{ background: "url(/snapShots.svg)" }}
          className={styles.snaps}
        ></div>
        <div className={styles.text}>
          <div className={styles.textSmallHeader}>Əməkdaşlar</div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Əməkdaşlar jurnalı</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Əmrlər (məzuniyyət,ezamiyyət,icazə və s.)
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Şirkət strukturunun yaradılması
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Davamiyyət jurnalı</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Ştat cədvəli</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>İş rejimləri</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Bonuslar</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Əməkhaqqı hesabatı (Payroll)
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>İstehsalat təqvimi</div>
          </div>
        </div>
      </div>
      <div className={styles.snapShotsWrapper}>
        <div className={` ${styles.oppositeText}`}>
          <div className={styles.textSmallHeader}>Əməkdaşlar</div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Əməkdaşlar jurnalı</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Əmrlər (məzuniyyət,ezamiyyət,icazə və s.)
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Şirkət strukturunun yaradılması
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Davamiyyət jurnalı</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Ştat cədvəli</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>İş rejimləri</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Bonuslar</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Əməkhaqqı hesabatı (Payroll)
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>İstehsalat təqvimi</div>
          </div>
        </div>
        <div className={` ${styles.oppositeSnap}`}>
          <div
            style={{ background: "url(/snapShots.svg)" }}
            className={styles.oppositeSnapPic}
          ></div>
          <div className={styles.background} />
        </div>
      </div>
      <div className={styles.snapShotsWrapper}>
        <div
          style={{ background: "url(/snapShots.svg)" }}
          className={styles.snaps}
        ></div>
        <div className={styles.text}>
          <div className={styles.textSmallHeader}>Əməkdaşlar</div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Əməkdaşlar jurnalı</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Əmrlər (məzuniyyət,ezamiyyət,icazə və s.)
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Şirkət strukturunun yaradılması
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Davamiyyət jurnalı</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Ştat cədvəli</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>İş rejimləri</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>Bonuslar</div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>
              Əməkhaqqı hesabatı (Payroll)
            </div>
          </div>
          <div className={styles.textDesc}>
            <div className={styles.textDescIcon}>
              <MdOutlineDone fill={" #254ECA"} size={"1.4rem"} />
            </div>
            <div className={styles.textDescText}>İstehsalat təqvimi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapShots;
