import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flexbox}>
          <img src={logo} alt="logoNuKenzie"></img>
        </div>
      </div>
    </header>
  );
};
