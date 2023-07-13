import Link from "next/link";
import { LuLayoutDashboard, LuGitCompare } from "react-icons/lu"
export default function Navigation(){
     return (  
          <div className="navigation">
               <Link href="/"><div className="navbtn"><LuLayoutDashboard color="" style={{marginRight: '10px'}}/> Dashboard</div></Link>
               <Link href="https://flow.livelearninglabs.ch/" target="_blank"><div className="navbtn"><LuGitCompare color="" style={{marginRight: '10px'}}/> Flow</div></Link>
          </div>
     )
}