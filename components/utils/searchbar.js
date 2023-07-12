import { useState } from "react";
import styles from "./searchbar.module.css";

export default function Searchbar({ handleSearchChange }) {

     const handleSearchTextChange = async (e) => {
          handleSearchChange(e.target.value)
     }

     return (
          <div className={styles["searchbar"]}>Search by First and Lastname
               <input type="text" onChange={handleSearchTextChange} />
          </div>
     );
}