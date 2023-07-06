import { useState } from "react";
import PersonGrid from "../components/people/persongrid";
import PersonForm from "../components/people/personform";

function Index() {
  const [refreshData, setRefreshData] = useState(false);

  const handleRefreshData = () => {
    setRefreshData(!refreshData);
  }

  return (
    <>
      <h1>LINDENverse</h1>
      <div style={{width: '100%', display: 'flex'}}>
      
        <div style={{width: '30%'}}>
          <PersonForm handleRefreshData={handleRefreshData} />
        </div>
        
        <div style={{width: '70%', maxHeight: '70vh', overflowY: 'scroll'}}>
          <PersonGrid refreshData={refreshData} handleRefreshData={handleRefreshData}/>
        </div>
      </div>
    </>
  )
}

export default Index

