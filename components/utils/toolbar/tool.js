import { useState } from "react";
import styles from "./toolbar.module.css";
import * as luIcons from "react-icons/lu";
import Link from "next/link";

export default function Tool({ handleToolClick, icon, link = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = icon && luIcons[icon];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      {link ? (
        <Link href={link}>
          <div
            name="add"
            className={`${styles.toolWrapper}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {IconComponent && (
              <IconComponent
                size={isHovered ? "25" : "30"}
                color={isHovered ? "white" : "grey"}
                style={{ pointerEvents: "none" }}
              />
            )}
          </div>
        </Link>
      ) : (
        <button
          name="add"
          className={`${styles.toolWrapper}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleToolClick}
        >
          {IconComponent && (
            <IconComponent
              size={isHovered ? "25" : "30"}
              color={isHovered ? "white" : "grey"}
              style={{ pointerEvents: "none" }}
            />
          )}
        </button>
      )}
    </>
  );
}
