import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";


const AppHeader = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Box  display="flex" data-testid="dbbox">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Box className="navPage">
         <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {props.children}
      </Box>
    </Box>
  );
};

export { AppHeader };