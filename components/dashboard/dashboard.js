import { useEffect } from "react";
import styles from "./dashboard.module.css";
import PeopleWidget from "./widgets/people.widget";
import CompaniesyWidget from './widgets/companies.widget';

export default function Dashboard({ widgets = [] }) {
     useEffect( ()=>{
          console.log(widgets)
     })
     
     return (
          <div className={`${styles.dashboardWrapper}`}>
               {widgets.map((widget, index) => {
               switch (widget) {
                    case 'People':
                         return <PeopleWidget key={index} />;
                    case 'Company':
                         return <CompaniesyWidget key={index} />;
                    default:
                         return null;
               }
               })}
          </div>
     );
}
