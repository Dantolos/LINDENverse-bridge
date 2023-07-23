import styles from "./toolbar.module.css";
import { useState } from "react";
import Tool from "./tool";
import PersonForm from "../../people/personform";


export default function Toolbar({ handleRefreshData }) {
     const [ tools, setTools ] = useState({
          workbench: false,
          add: false
     })

     const handleToolClick = (e) => {
          console.log(e.target.name) 

          setTools({
               ...tools,
               'workbench': !tools.workbench,
               [`${ e.target.name }`]:  true
          })
     }

     const handleSubmitAdd = () => {
          handleRefreshData();
          setTools({
               ...tools,
               'workbench': !tools.workbench
          })
     }

     return(
          <>
               <div className={`${styles.toolbarWrapper}`}>
                    <Tool handleToolClick={handleToolClick} icon="LuPlus"/>  

                    { tools.workbench && (
                         <div className={`L3Lshadow ${styles.toolbarWorkbench} `}>
                                { tools.add && (
                                   <div>
                                        <PersonForm handleRefreshData={handleSubmitAdd}/>
                                   </div>
                                )}
                         </div>
                    )}        
               </div>
          </>
          
     );
}