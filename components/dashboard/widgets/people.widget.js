import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LuUsers } from "react-icons/lu";
import styles from "./../dashboard.module.css";
import Link from "next/link";


export default function PeopleWidget(){

     const [stats, setStats] = useState([]);
     const [lastDocuments, setLastDocuments] = useState(false);

     useEffect(() => {
   
         const fetchData = async () => {
          try {
            const response = await fetch(`/api/people/stats`);
            const text = await response.text();
            const data = JSON.parse(text); 

            console.log("Response text:", data);
            setStats(data)

            const lastdoks = await fetch(`/api/people?limit=5`);
            const lastdokstext = await lastdoks.text();
            const lastdoksdata = JSON.parse(lastdokstext); 
            setLastDocuments(lastdoksdata.data)
            console.log("Response text:", lastdoksdata.data);

            if(!data.success){
              return;
            }
           
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
         fetchData();

         const fetchLastFiveDocuments = async () => {
          try {
            const documents = await People.find().sort({ createdAt: -1 }).limit(5);
            console.log(documents);
            setLastDocuments(documents)
            // Set the documents to state or use them as needed
          } catch (error) {
            console.error(error);
          }
        };
        fetchLastFiveDocuments();
     }, []);
   
     return (
       <div className={`${styles.widgetContainer} L3Lshadow ${styles.peopleWrapper}`}>
        <div className={`${styles.widgetHeader}`}>
          <LuUsers size="30" style={{marginRight: '10px' }} />
          <h3><b>People ({stats.count})</b></h3> 
          <Link  className={`${styles.widgetButton}`} href="/data/people"><button className="btn">see People</button></Link>
        </div>
         
        <ResponsiveContainer width="100%" height="50%">
            <LineChart  
                width={500}
                height={250}
                data={stats.countByDay}
                margin={{
                top: 5,
                right: 30,
                left: -30,
                bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" stroke="1"/>
                <YAxis stroke="1"/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#9F9577" strokeWidth="3" dot={{ strokeWidth: 2, r: 3 }} />
            </LineChart>
        </ResponsiveContainer>
        
        <div className="" style={{}}>
          <h3>Last 5 Uploads</h3>
          { lastDocuments && lastDocuments.map((doc)=>
            <div style={{ borderBottom: 'solid 1px rgb(175, 175, 175)', padding: '5px 2px' }}>
              <p style={{ margin: 0, fontSize: '.9em' }}>{doc.firstname} <b>{doc.lastname}</b></p>
            </div>
          )}
        </div>
       </div>
     )
}

