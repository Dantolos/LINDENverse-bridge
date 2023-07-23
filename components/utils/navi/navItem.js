import Link from "next/link";
import { useEffect, useState } from "react";
import * as luIcons from "react-icons/lu";

export default function NavItem({ icon, navlink, linktext, linktarget = ''}) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    if (icon && luIcons[icon]) {
      setIconComponent(() => luIcons[icon]);
    }
  }, [icon]);

  return (
    <Link href={navlink} target={linktarget}>
      <div className="navbtn">
        {IconComponent && <IconComponent style={{ marginRight: "10px" }} />}
        {linktext}
      </div>
    </Link>
  );
}
