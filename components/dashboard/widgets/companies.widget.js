import styles from "../dashboard.module.css";

export default function CompaniesWidget(){
     return (
          <div className={`${styles.widgetContainer} L3Lshadow ${styles.companiesWrapper}`}>
               Companies
          </div>
     )
}