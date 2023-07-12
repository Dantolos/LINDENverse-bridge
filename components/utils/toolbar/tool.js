import { useState } from "react";
import styles from "./toolbar.module.css";

import { LuPlus } from "react-icons/lu";

export default function Tool({ handleToolClick }){

     const [isHovered, setIsHovered] = useState(false);

     const handleMouseEnter = () => {
       setIsHovered(true);
     };
   
     const handleMouseLeave = () => {
       setIsHovered(false);
     };

     return (
          <button 
               name="add"
               className={`${styles.toolWrapper}`} 
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={ (e) => handleToolClick(e) }
               >
               <LuPlus size={ isHovered ? '25' : '30'} color={ isHovered ? 'white' : 'grey'} style={{ pointerEvents: 'none' }} />
          </button>
     )
}