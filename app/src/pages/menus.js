/* *
  title: menu.js 

  date: 5/28/2019

  author:  javier olaya

  description: react navLinks that displays the main menu  
         
 */
import {NavLink} from 'react-router-dom';
import Picture from '../components/Picture';

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

export const MainMenu = () => <nav className="main-menu">
    <Picture activeStyle={selectedStyle} ></Picture>
    <NavLink to="/Appointments" activeStyle={selectedStyle} >[Appointments]</NavLink>
    <NavLink to="/Profile" activeStyle={selectedStyle} >[Profile]</NavLink>
    <NavLink to="/MemberShip" activeStyle={selectedStyle} >[MemberShip]</NavLink>
    <NavLink to="/Location" activeStyle={selectedStyle} >[Location]</NavLink>
    <NavLink to="/Physicians" activeStyle={selectedStyle} >[Physicians]</NavLink>
</nav>