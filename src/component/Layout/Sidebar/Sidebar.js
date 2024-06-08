import React from "react";
import "./Sidebar.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { Box } from "@mui/material";
import FingerprintTwoToneIcon from '@mui/icons-material/FingerprintTwoTone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { NavLink, useNavigate } from "react-router-dom";
import { Images } from "../../../assets";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate()
  return (
    <Box>
      <div className={`sidebar ${showSidebar ? "showSidebar" : "hideSidebar"}`}>
        <div onClick={() => navigate("/dashboard")} className="logoName cursorPointer">
          <img
            src={Images.AppLogo}
            alt="logo"
          />
        </div>
        <p className="divider"></p>
        <div className="sidebarMiddlePart">
          <div className="projectDiv">
            <div className="signalProject">
              <div>
                <p>MENU</p>
              </div>
            </div>
            <ul className="sidebarList light_grey_color">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "inactive fontWeight light_grey_color"
                }
                to="/dashboard"
              >
                <li className="eachSidebarList">
                  <DashboardOutlinedIcon />
                  Dashboard
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "inactive fontWeight light_grey_color"
                }
                to="/employees"
              >
                <li className="eachSidebarList">
                  <GroupsOutlinedIcon />
                  Employees
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "inactive fontWeight light_grey_color"
                }
                to="/attendance"
              >
                <li className="eachSidebarList">
                  <FingerprintTwoToneIcon />
                  Attendance
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "inactive fontWeight light_grey_color"
                }
                to="/report"
              >
                <li className="eachSidebarList">
                  <LaunchOutlinedIcon />
                  Report
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "inactive fontWeight light_grey_color"
                }
                to="/termsofservice"
              >
                <li className="eachSidebarList" data-tesid="profileId">
                  <MonetizationOnOutlinedIcon />
                  Calculate Salary
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "inactive fontWeight light_grey_color"
                }
                to="/"
              >
                <li className="eachSidebarList" data-tesid="profileId">
                  <DescriptionOutlinedIcon />
                  Documents
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "inactive fontWeight light_grey_color"
                }
                to="/privacyandpolicy"
              >
                <li className="eachSidebarList" data-tesid="profileId">
                  <SettingsOutlinedIcon />
                  Settings
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Sidebar
