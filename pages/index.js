
import PersonBox from "../components/personbox";
import { useState } from "react";

function Index() {
  const [refreshData, setRefreshData] = useState(false);

  

  const addPerson = async () => {
    
    const randomNR = Math.floor(Math.random() * 1000);
    const res = await fetch('/api/people/add', {
      method: "POST", 
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:`Mr. Smith Nr ${randomNR}`,
        email: `test-${randomNR}@test.com`,
        createdAt: new Date()
      }),
    });
    const data = await res.json();
    setRefreshData(!refreshData);
  }
  
  return (
    <>
      <h1>LINDENverse</h1>
      <div style={{width: '100%'}}></div>
      <button onClick={addPerson}>Add new Person</button>

      <PersonBox refreshData={refreshData}></PersonBox>
    </>
  )
}

export default Index

