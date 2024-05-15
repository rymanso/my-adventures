import styles from "./GridPage.module.css";
export const GridPage = ({ title, children, id }) => {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.title}>{title}</div>
      <div className={styles.grid}>{children}</div>
    </div>
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
