import { useState } from "react";
import BrancheCloud from "./brancheCloud";
export default function BrancheForm({ handleRefreshData = false, content = false, id = false }){

     const [form, setForm] = useState({ 
          id: id || '',
          branche: content.branche || '',
     });

     const handleChange = (e) => {
          setForm({
               ...form,
               [e.target.name]: e.target.value
           })
     }

     const addBranche = async (e) => {
          e.preventDefault(); 
          const res = await fetch('/api/bubbles/branches', {
               method: "POST", 
               headers:{
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    branche: form.branche,
                    createdAt: new Date()
               }),
          });
       
          const data = await res.json();
          
          if(data.type !== 'error'){
              setForm({
                  id: false,
                  branche: ''
              })
          } 
     }

     return (
          <div>
               <form>
                    <label htmlFor="branche">
                         Branche Name:
                         <input type="text" value={form.branche} name="branche" onChange={handleChange} />
                    </label>

                    <button type="submit" onClick={addBranche} className="btn">add new</button>
               </form>

               <BrancheCloud />
          </div>
     )
}