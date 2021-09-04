import React from "react";
import styles from "./GlobalFilter.module.css";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles.container}>
      <span>
        Search:{" "}
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
