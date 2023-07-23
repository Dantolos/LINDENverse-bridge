import { useState } from "react";

import PersonGrid from "../../../components/people/persongrid";
import PersonForm from "../../../components/people/personform";

import styles from "./people.module.css";
import Toolbar from "../../../components/utils/toolbar/toolbar";

export default function PeoplePage(){
     const [refreshData, setRefreshData] = useState(false);

     const handleRefreshData = () => {
          setRefreshData(!refreshData);
     }

     return (
     <>
          <div className='Sidebar L3Lshadow'>
               <Toolbar handleRefreshData={handleRefreshData} />
          </div>   
          <div className='Content'>
               <div className={`${styles.peoplewrapper}`}>
                    <div style={{width: '80%'}}>
                         <PersonGrid refreshData={refreshData} handleRefreshData={handleRefreshData}/>
                    </div>
               </div>
          </div>
     </>
     )
}