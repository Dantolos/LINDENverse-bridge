import { useEffect, useState } from "react";
import Link from "next/link";
import PersonForm from "./personform";

export default function PersonBox({ person, handleRefreshData }){
  const [editSectorVisible, setEditSectorVisible] = useState(false); // New state variable

  const toggleEditSector = () => {
    setEditSectorVisible(!editSectorVisible); // Toggle the visibility state
  };

  return (
    <div key={person._id} style={{ width: "100%", margin: '5px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '20px'  }}>
      <Link href={`/people/${person._id}`}>
        <h3>{person.firstname} {person.lastname}</h3>
      </Link>
      <p>{person.email}</p>
      <button onClick={toggleEditSector} className="btn">Quick edit</button>
      <Link href={`/people/${person._id}`} ><button className="btn">Person Page</button></Link>
      { editSectorVisible && ( // Render the EditSector div based on the visibility state
        <div className="EditSector" >
          <PersonForm content={person} handleRefreshData={handleRefreshData} id={person._id}/>
        </div>
      )}
    </div>
  )
}