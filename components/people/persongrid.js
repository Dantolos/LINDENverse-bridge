import { useEffect, useState } from "react";
import PersonBox from "./personbox";
import Searchbar from "../utils/searchbar";
import Loading from "../utils/loading";

export default function PersonGrid( {handleRefreshData, refreshData} ) {
  //const [refreshData, setRefreshData] = useState(refreshData);
  const [peopleData, setPeopleData] = useState([]);
  const [searchString, setSeachString] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/people?searchString=${searchString}`);
        console.log(response)
        const text = await response.text();
        const data = JSON.parse(text); // Try parsing the response as JSON
        console.log("Response text:", data);
        if(!data.success){
          return;
        }
        setPeopleData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setPeopleData([]);
        setLoading(false);
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
      { loading && (
          <Loading />
        )}
      <div style={{ width: "100%", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', position: 'relative' }}>
        <div style={{width: '100%'}}><p style={{textAlign: 'center'}}>{peopleData.length} persons found!</p></div>
        { peopleData.map((person) => (
          <PersonBox key={person._id} person={person} handleRefreshData={handleRefreshData}/>
        ))}

        
      </div>
    </>
    
  );
}
