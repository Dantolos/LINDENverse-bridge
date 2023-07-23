import Link from "next/link";
import { LuLayoutDashboard, LuGitCompare } from "react-icons/lu"
import NavItem from "./navItem";

export default function Navigation(){
     return (  
          <div className="navigation">
               <NavItem icon="LuLayoutDashboard" navlink="/" linktext="Dashboard"/>
               <NavItem icon="LuDatabase" navlink="/data" linktext="Datasets" />
               <NavItem icon="LuGitCompare" navlink="https://flow.livelearninglabs.ch/" linktext="Flow" linktarget="_blank"/>
          </div>
     )
}