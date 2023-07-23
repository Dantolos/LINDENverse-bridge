import { useEffect, useState } from "react";
import Link from "next/link";
import PersonForm from "./personform";
import styles from "./people.module.css";

export default function PersonBox({ person, handleRefreshData }){
  const [editSectorVisible, setEditSectorVisible] = useState(false); // New state variable

  const toggleEditSector = () => {
    setEditSectorVisible(!editSectorVisible); // Toggle the visibility state
  };

  return (
    <div key={person._id} className={`${styles.personBoxContainer} L3Lshadow`}>
      <Link href={`/data/people/${person._id}`}>
        <h3>{person.firstname} {person.lastname}</h3>
      </Link>
      <p>{person.email}</p>
      <button onClick={toggleEditSector} className="btn">Quick edit</button>
      <Link href={`/data/people/${person._id}`} ><button className="btn">Person Page</button></Link>
      { editSectorVisible && ( // Render the EditSector div based on the visibility state
        <div className="EditSector" >
          <PersonForm content={person} handleRefreshData={handleRefreshData} id={person._id}/>
        </div>
      )}
    </div>
  )
}