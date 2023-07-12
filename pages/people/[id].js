import Link from "next/link";
import {LuChevronLeft} from "react-icons/lu";

export default function PersonPage({ data }){
     const person = data.data
     return (
          <div className="Content">
               <div className="personpage">
                    <Link href="/people"><LuChevronLeft size="25"/></Link>
                    <h1>{ person.firstname } { person.lastname }</h1>
                    <p><strong>E-Mail:</strong> { person.email }</p>
               </div>
          </div>
          
     );
}

export async function getServerSideProps(context) {
     const { id } = context.query;
   
     const res = await fetch(`http://localhost:3000/api/people/${id}`);
     
     const text = await res.text();
     const data = JSON.parse(text);
    
     return { props: { data } }
}