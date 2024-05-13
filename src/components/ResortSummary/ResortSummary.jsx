import { isMobile } from "react-device-detect";
import styles from "./ResortSummary.module.css";

export const ResortSummary = ({
  resortName,
  slogan,
  src,
  description,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.resortName}>{resortName}</div>
      <div className={styles.slogan}>{slogan}</div>
      <div className={styles.imgContainer}>
        <img src={src} className={styles.bigImg} alt="Resort" />
      </div>
      <p className={styles.description}>{description}</p>
      <div
        className={styles.content}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        {children}
      </div>
    </div>
  );
};
