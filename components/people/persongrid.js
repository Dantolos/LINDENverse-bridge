import { useEffect, useState } from "react";
import PersonBox from "./personbox";
import Searchbar from "../utils/searchbar";

export default function PersonGrid( {handleRefreshData, refreshData} ) {
  //const [refreshData, setRefreshData] = useState(refreshData);
  const [peopleData, setPeopleData] = useState([]);
  const [searchString, setSeachString] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/people/get/?searchString=${searchString}`);
        const text = await response.text();
        //console.log("Response text:", text); // Log the response text
        const data = JSON.parse(text); // Try parsing the response as JSON
        setPeopleData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setPeopleData([]);
      }
    };
    fetchData();
  }, [refreshData, searchString]);

  const handleSearchChange = (e) => {
    setSeachString(e)
    console.log(e)
  }

  return (
    <>
      <Searchbar handleSearchChange={handleSearchChange} />
      <div style={{ width: "100%", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div style={{width: '100%'}}><p style={{textAlign: 'center'}}>{peopleData.length} persons found!</p></div>
        { peopleData.map((person) => (
          <PersonBox key={person._id} person={person} handleRefreshData={handleRefreshData}/>
        ))}
      </div>
    </>
    
  );
}
