import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <p className={styles.footerText}>
        © 2024 Community Directory. All rights reserved.
      </p>
      <div className={styles.footerLinks}>
        <a className={styles.footerLink} href="#">
          Privacy Policy
        </a>
        <a className={styles.footerLink} href="#">
          Terms of Service
        </a>
        <a className={styles.footerLink} href="#">
          Contact Us
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
