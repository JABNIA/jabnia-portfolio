import "./styles/navbar.css";
import { Link} from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { useState } from "react";

type NavItemsProps = {
  text: string;
  icon: IconDefinition;
  link: string;
};

function NavBar() {
  const [menuTrigger, setMenuTrigger] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  if (firstLoad) {
    return (
      <nav className="inactive">
        <h2 className="hidden"
        onClick={() => setFirstLoad(false)}
        >
          <span>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setMenuTrigger((curr): boolean => !curr)}
            />
          </span>
          <span>Navigation</span>
        </h2>
        <NavItem text="Home" icon={faHouse} link="/" />
        <NavItem text="Works" icon={faFolder} link="/projects" />
        <NavItem text="Skills" icon={faMicrochip} link="/skills" />
        <NavItem text="About Me" icon={faUser} link="/about" />
      </nav>
    );
  } 
  else 
  {
    return (
      <nav className={menuTrigger ? "active" : "inactive hide"}>
        <h2 className={menuTrigger ? "showing" : "hidden"}>
          <span>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setMenuTrigger((curr): boolean => !curr)}
              style={{color: "rgb(97, 237, 255)"}}
            />
          </span>
          <span style={{color:"rgb(181, 46, 214)"}}>Navigation</span>
        </h2>
        <NavItem text="Home" icon={faHouse} link="/" />
        <NavItem text="Works" icon={faFolder} link="/projects" />
        <NavItem text="Skills" icon={faMicrochip} link="/skills" />
        <NavItem text="About Me" icon={faUser} link="/about" />
      </nav>
    );
  }
}

function NavItem({ text, icon, link }: NavItemsProps) {
  return (
    <li className="nav-item">
      <Link to={link}>
        <span className="icon">
          <FontAwesomeIcon icon={icon} className="faicon" style={{color: "rgb(97, 237, 255)"}}/>
        </span>
        <span className="text">_{text}</span>
      </Link>
    </li>
  );
}

export default NavBar;
