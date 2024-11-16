import styles from "./GridPage.module.css";

export const Section = ({ title, children, id }) => {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
};

export const GridPage = ({ title, children, id }) => {
  return (
    <Section title={title} id={id}>
      <div className={styles.grid}>{children}</div>
    </Section>
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
