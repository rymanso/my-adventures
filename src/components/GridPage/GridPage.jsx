import { Header } from "../Header/Header";
import styles from "./GridPage.module.css";
export const GridPage = ({ title, children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.grid}>{children}</div>
      </div>
    </>
  );
};

export const GridTextBox = ({ title, children }) => {
  return (
    <div className={styles.gridTextBox}>
      <div className={styles.gridTextBoxTitle}>{title}</div>
      <div className={styles.gridTextBoxText}>{children}</div>
    </div>
  );
};
