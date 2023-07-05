import { useEffect, useState } from "react";

import mongoose from 'mongoose';
import connectMongo from "../utils/connectdb";
import People from "../models/People";

export default function PersonBox({ refreshData }) {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch("/api/people/get");
          const text = await response.text();
          console.log("Response text:", text); // Log the response text
          const data = JSON.parse(text); // Try parsing the response as JSON
          setPeopleData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setPeopleData([]);
        }
      };
    

    fetchData();

 
  }, [refreshData]);

  return (
    <div style={{ width: "100%", display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{width: '100%'}}><p style={{textAlign: 'center'}}>{peopleData.length}</p></div>
      {peopleData.map((person) => (
        <div key={person._id} style={{ width: "150px", margin: '5px', padding: '20px', border: '1px solid lightgray', borderRadius: '20px'  }}>
          <h1>{person.name}</h1>
          <p>{person.email}</p>
        </div>
      ))}
    </div>
  );
}
