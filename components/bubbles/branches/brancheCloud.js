import { useEffect, useState } from "react"
import Loading from "../../utils/loading";

export default function BrancheCloud() {
     const [brancheData, setBrancheData] = useState([]);
     const [loading, setLoading] = useState(false);

     useEffect((e) => {
          const fetchData = async () => {
               try {
                 setLoading(true);
                 const response = await fetch(`/api/bubbles/branches`);
                 console.log(response)
                 const text = await response.text();
                 const data = JSON.parse(text); // Try parsing the response as JSON
                 console.log("Response text:", data);
                 if(!data.success){
                   return;
                 }
                 setBrancheData(data.data);
                 setLoading(false);
               } catch (error) {
                 console.error("Error fetching data:", error);
                 setBrancheData([]);
                 setLoading(false);
               }
             };
             fetchData();
     }, [])

     return (
          <div className="" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '20px'}}>
               { loading && (
                    <Loading />
               )}
               { brancheData.map((branche) => (
                    <div key={branche._id} className="L3Lshadow" style={{ backgroundColor: 'white', margin: '5px', padding: '5px 20px', borderRadius:'20px', fontSize: '.85em'}}>{branche.branche}</div>
               ))}
          </div>
     )
}