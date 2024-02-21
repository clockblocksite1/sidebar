import "./sidebar.scss";
import { FaHome } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoFolderSharp } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { BiAdjust } from "react-icons/bi";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { SiLogstash } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Dicorprime</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <FaHome className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/users" style={{textDecoration:"none"}}>
              <RiUserSearchLine className="icon"/>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" style={{textDecoration:"none"}}>
              <MdOutlineProductionQuantityLimits className="icon"/>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <IoFolderSharp className="icon"/>
            <span>Olders</span>
          </li>
          <li>
            <TfiStatsUp className="icon"/>
            <span>Stats</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BiAdjust className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MdSettingsSystemDaydream className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <SiLogstash className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <IoMdSettings className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <RiProfileLine className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <IoIosLogOut className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption" ></div>
      </div>
    </div>
  );
};

export default Sidebar;