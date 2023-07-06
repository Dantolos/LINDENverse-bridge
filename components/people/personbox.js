import { useEffect, useState } from "react";
import PersonForm from "./personform";

export default function PersonBox({ person, handleRefreshData }){
  const [editSectorVisible, setEditSectorVisible] = useState(false); // New state variable

  const toggleEditSector = () => {
    setEditSectorVisible(!editSectorVisible); // Toggle the visibility state
  };

  return (
    <div key={person._id} style={{ width: "100%", margin: '5px', padding: '10px 20px', border: '1px solid lightgray', borderRadius: '20px'  }}>
      <h3>{person.firstname} {person.lastname}</h3>
      <p>{person.email}</p>
      <button onClick={toggleEditSector}>Edit</button>
      {editSectorVisible && ( // Render the EditSector div based on the visibility state
        <div className="EditSector">
          <PersonForm content={person} handleRefreshData={handleRefreshData}/>
        </div>
      )}
    </div>
  )
}