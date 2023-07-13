import styles from "../dashboard.module.css";
import Link from "next/link";
import { LuBuilding2 } from "react-icons/lu"

export default function CompaniesWidget(){
     return (
          <div className={`${styles.widgetContainer} L3Lshadow ${styles.companiesWrapper}`}>
               <div className={`${styles.widgetHeader}`}>
                    <LuBuilding2 size="30" style={{marginRight: '10px' }} />
                    <h3><b>Companies</b></h3> 
                    <Link  className={`${styles.widgetButton}`} href="/people"><button className="btn">see Comanies</button></Link>
               </div>
          </div>
     )
}