import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import styles from "./structure.module.css";

export default function StructurListItem({ dirname, hasIndexChild, path  }) {
     return (
          <div className={`${styles.structur_list_item} L3Lshadow`}>
               <p>{dirname} </p>
               { hasIndexChild && 
                    <Link href={path}><LuChevronRight size="15" color="grey"/></Link>
               }
          </div>
     )
}