import { useState } from "react";
import BrancheForm from "../../../components/bubbles/branches/brancheForm";
import Toolbar from "../../../components/utils/toolbar/toolbar";

export default function PeoplePage(){
     const [refreshData, setRefreshData] = useState(false);

     const handleRefreshData = () => {
          setRefreshData(!refreshData);
     }

     return (
     <>
          <div className='Sidebar L3Lshadow'>
          </div>   
          <div className='Content'>
               <BrancheForm />
          </div>
     </>
     )
}