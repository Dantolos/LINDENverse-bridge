import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import People from "../../../models/People";
import Tool from "../../../components/utils/toolbar/tool";
import styles from "./people.module.css";

export async function getStaticPaths() {
  try {
    // Fetch the dynamic paths for the people
    const people = await People.find({}, '_id');
     console.log(people)
    // Generate an array of objects with the `params` key
    const paths = people.map((person) => ({
      params: { id: person._id.toString() }
    }));

    // Return the paths object with `fallback: false`
    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps(context) {
     try {
       const { id } = context.params;
       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/people/${id}`);
       const text = await res.text();
       const data = JSON.parse(text);
   
       return { props: { data } };
     } catch (error) {
       console.error("Error fetching data:", error);
       return { props: { data: null } };
     }
   }

export default function PersonPage({ data }) {
  const person = data ? data.data : null;

  if (!person) {
    return <div className="Content"><h2>Error: Person not found</h2></div>;
  }

  return (
     <>
          <div className="Sidebar">
            <Tool icon="LuChevronLeft" link="/data/people"/>
          </div>
          <div className={`Content ${styles.personWrapper}`}>
               <div className={`L3Lshadwo ${styles.personContainer}`} > 
                <h1>
                      {person.firstname} {person.lastname}
                </h1>
                <p>
                      <strong>E-Mail:</strong> {person.email}
                </p>
               </div>
          </div>
     </>
    
  );
}
