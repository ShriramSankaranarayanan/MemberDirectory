import React from "react";
import styles from "../styles/Header.module.css";
import membersData from "../data/members.json";

const Header: React.FC = () => {
  const memberCount = Array.isArray(membersData) ? membersData.length : 0;
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Member Directory</h1>
      <p className={styles.headerSubtitle}>
        {`Explore our community of ${memberCount} members. Use the search and filter options below to find specific members.`}
      </p>
    </div>
  );
};

export default Header;
