import { useEffect } from "react"
import styles from "./alert.module.css";

export default function Alert({type, message, handleAlert}){ 
     return (
          <div  className={`${styles.alert} ${styles[`alert-${type}`]}`}>
               {message} 
               <button onClick={(e) => { e.preventDefault(); handleAlert(); }}>x</button>
          </div>
     )
}