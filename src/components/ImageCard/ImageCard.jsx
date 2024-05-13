import styles from "./ImageCard.module.css";
import { Link } from "react-router-dom";

export const ImageCard = ({ src, title, linkTo, children }) => {
  return (
    <Link to={linkTo} style={{ color: "inherit", textDecoration: "inherit" }}>
      <div className={styles.card}>
        <img src={src} className={styles.picture} alt="card-pic" />
        <p className={styles.title}>{title}</p>
        <div className={styles.details}>{children}</div>
      </div>
    </Link>
  );
};
