import { useEffect, useState } from "react"
import Alert from "../utils/alert";

export default function PersonForm({ handleRefreshData = false, content = false, id = false }){

    const [form, setForm] = useState({ 
        id: id || '',
        firstname: content.firstname || '',
        lastname: content.lastname || '',
        email: content.email || ''
    });

    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //hide message after 2sec
    const handleAlert = (delay = 0) => {
        setTimeout(()=>{
            setAlert(false)
        }, delay)
    }

    const addPerson = async (e) => {
        e.preventDefault(); 
        const res = await fetch('/api/people', {
            method: "POST", 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: form.firstname,
                lastname: form.lastname,
                email: form.email,
                createdAt: new Date()
            }),
        });
        handleRefreshData();
        const data = await res.json();
        setAlert(data)
        handleAlert(5000)
        
        if(data.type !== 'error'){
            setForm({
                id: false,
                firstname: '',
                lastname: '',
                email: ''
            })
        }
        
    }

    const updatePerson = async (e) => {
        e.preventDefault(); 
        const res = await fetch(`/api/people/${form.id}`, {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                firstname: form.firstname,
                lastname: form.lastname,
                email: form.email,
                createdAt: new Date()
            }),
        });
        handleRefreshData();
        const data = await res.json();
        setAlert(data)
        handleAlert(5000)
    }

    const deletePerson = async (e) => {
        e.preventDefault(); 
        const res = await fetch(`/api/people/${form.id}`, {
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: form.email
            }),
        });
        handleRefreshData();
        const data = await res.json();
        setAlert(data)
        handleAlert(5000)
    }

    return (
        <div>
            <form>
                <label htmlFor="firstname">
                    Firstname:
                    <input type="text" value={form.firstname} name="firstname" onChange={handleChange} />
                </label>
                <label htmlFor="lastname">
                    Lastname:
                    <input type="text" value={form.lastname} name="lastname" onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" value={form.email} name="email" onChange={handleChange}  disabled={content !== false} />
                </label>
            
                <div style={{display: 'flex'}}>
                    { content === false ? (
                        <button type="submit" onClick={addPerson} className="btn">add new</button>
                    ) : (
                        <>
                            <button type="submit" onClick={updatePerson} className="btn">update</button>
                            <button type="submit" onClick={deletePerson} className="btn attention">delete</button>
                        </>    
                    )}
                </div> 
                
                {
                    alert !== false && (
                        <Alert type={alert.type} message={alert.message} handleAlert={handleAlert}/>
                    )
                }
                
                
            </form>
        </div>
    )
}