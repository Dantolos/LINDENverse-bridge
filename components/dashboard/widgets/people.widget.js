import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LuUsers } from "react-icons/lu";
import styles from "./../dashboard.module.css";
import Link from "next/link";

export default function PeopleWidget(){

     const [stats, setStats] = useState([]);

     useEffect(() => {
   
         const fetchData = async () => {
          try {
            const response = await fetch(`/api/people/stats`);
            //console.log(response)
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
        <div className={`${styles.widgetHeader}`}>
          <LuUsers size="30" style={{marginRight: '10px' }} />
          <h3><b>People ({stats.count})</b></h3> 
          <Link  className={`${styles.widgetButton}`} href="/people"><button className="btn">see People</button></Link>
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
               
       </div>
     )
}

