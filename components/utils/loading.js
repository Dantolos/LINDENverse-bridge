import React from "react";
import styles from "./loading.module.css";

export default function Loading(){
     return(
          <div className={styles["loading-spinner"]}>
               <div className={styles["lds-ripple"]}><div></div><div></div></div>
          </div>
     )
}