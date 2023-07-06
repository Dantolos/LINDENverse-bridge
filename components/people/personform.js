import { useEffect, useState } from "react"
import Alert from "../utils/alert";

export default function PersonForm({ handleRefreshData, content = false }){

    const [firstname, setFirstname] = content.firstname ? useState(content.firstname) : useState('');
    const [lastname, setLastname] = content.lastname ? useState(content.lastname) : useState('');
    const [email, setEmail] = content.email ? useState(content.email) : useState('');

    const [alert, setAlert] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstname(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastname(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    //hide message after 2sec
    const handleAlert = () => {
        setTimeout(()=>{
            setAlert(false)
        }, 2000)
    }

    const addPerson = async (e) => {
        e.preventDefault(); 
        const res = await fetch('/api/people/add', {
            method: "POST", 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                createdAt: new Date()
            }),
        });
        handleRefreshData();
        const data = await res.json();
        setAlert(data)
        handleAlert()
    }

    const updatePerson = async (e) => {
        e.preventDefault(); 
        const res = await fetch('/api/people/update', {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                createdAt: new Date()
            }),
        });
        handleRefreshData();
        const data = await res.json();
        setAlert(data)
        handleAlert()
    }

    const deletePerson = async (e) => {
        e.preventDefault(); 
        const res = await fetch('/api/people/delete', {
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: email
            }),
        });
        handleRefreshData();
        const data = await res.json();
        setAlert(data)
        handleAlert()
    }

    return (
        <div>
            <form>
                <label htmlFor="firstname">
                    Firstname:
                    <input type="text" value={firstname} onChange={handleFirstNameChange} />
                </label>
                <label htmlFor="lastname">
                    Lastname:
                    <input type="text" value={lastname} onChange={handleLastNameChange} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange}  disabled={content !== false} />
                </label>
            
                <div style={{display: 'flex'}}>
                    { content === false ? (
                        <button type="submit" onClick={addPerson}>add new</button>
                    ) : (
                        <>
                            <button type="submit" onClick={updatePerson}>update</button>
                            <button type="submit" onClick={deletePerson}>delete</button>
                        </>    
                    )}
                </div> 
                
                {
                    alert !== false && (
                        <Alert type={alert.type} message={alert.message}/>
                    )
                }
                
                
            </form>
        </div>
    )
}