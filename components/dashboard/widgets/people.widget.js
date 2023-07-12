import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import styles from "./../dashboard.module.css";
import Link from "next/link";

export default function PeopleWidget(){

     const [stats, setStats] = useState([]);

     useEffect(() => {
   
         const fetchData = async () => {
          try {
            const response = await fetch(`/api/people/stats`);
            console.log(response)
            const text = await response.text();
            const data = JSON.parse(text); // Try parsing the response as JSON
            console.log("Response text:", data);
            setStats(data)
            if(!data.success){
              return;
            }
           
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
         fetchData();
     }, []);
   
     return (
       <div className={`${styles.widgetContainer} L3Lshadow ${styles.peopleWrapper}`}>
         <h3><b>People ({stats.count})</b></h3> 
               <ResponsiveContainer width="100%" height="50%">
                    <LineChart  width={500}
                         height={300}
                         data={stats.countByDay}
                         margin={{
                         top: 5,
                         right: 30,
                         left: 0,
                         bottom: 5,
                         }}>
                         <CartesianGrid strokeDasharray="3 3" />
                         <XAxis dataKey="_id" />
                         <YAxis />
                         <Tooltip />
                         <Legend />
                         <Line type="monotone" dataKey="count" stroke="#9F9577" />
                    </LineChart>
               </ResponsiveContainer>
               <Link href="/people"><button className="btn">see People</button></Link>
       </div>
     )
}

