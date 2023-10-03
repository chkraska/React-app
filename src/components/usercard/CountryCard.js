import React from "react";
import styles from "./CountryCard.module.css";

export default function CountryCard({ countryName, capital, region }) {
  return (
    <div className={styles.card}>
        
      <h3 className={styles.title}>{countryName ?? "Nie dotyczy"}</h3>
      <p className={styles.content}>Stolica: {capital ?? "Nie dotyczy"}</p>
      <p className={styles.content}>Kontynent: {region ?? "Nie dotyczy"}</p>
    </div>
  );
}
