import { useState } from "react";
import Dashboard from "../components/dashboard/dashboard";

function Index() {
  const [refreshData, setRefreshData] = useState(false);

  const handleRefreshData = () => {
    setRefreshData(!refreshData);
  }

  return (
    <>
      <div className="Content">
          <Dashboard widgets={['People', 'Company' ]}/>
      </div>
    </>
  )
}

export default Index

