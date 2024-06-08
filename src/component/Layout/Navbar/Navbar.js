import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
import { Box, Stack, Avatar, Badge } from "@mui/material";
import { styled } from "@mui/system";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom";
import { Images } from "../../../assets";

const MyInput = styled("input")({
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  '::placeholder': {
    color: '#96907e',
  },
});

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const [profileModal, setProfileModal] = useState(false);
  const [invisible, setInvisible] = React.useState(false);
  let navigate = useNavigate();

  const handleButtonClick = () => {
    setInvisible(!invisible);
    let path = `/notification`;
    navigate(path);
  }

  useEffect(() => {
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="navApp light_grey_color"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          flexDirection: "row",
        }}
      >
        <Toolbar className="toolbar">
          <IconButton
            size="large"
            edge="start"
            data-testid="menuButton"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { md: "none" } }}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <MenuIcon className="icon" style={{ color: "#643FDB" }} />
          </IconButton>
          <Stack
            className="searchBar"
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <SearchIcon style={{ fontSize: 25 }} />
            <MyInput
              placeholder="Search for employee"
              className="searchInput"
            ></MyInput>
          </Stack>
        </Toolbar>
        <IconButton style={{ marginLeft: 'auto' }} onClick={handleButtonClick}>
          <Badge sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#04DC00",
              margin: '3px'
            }
          }} variant="dot" invisible={invisible}>
             <NotificationsIcon style={{ fontSize: 25 }} />
          </Badge>
        </IconButton>
        <Box
          className="navProfile cursorPointer"
          data-testid="navProfile"
        >
          <Avatar
            alt="profile"
            src={Images.Profile}
            sx={{
              width: { xs: 27, md: 35 },
              height: { xs: 27, md: 35 },
              borderRadius: '5px',
            }}
          />
          <Typography
            variant="subtitle1"
            className="userName"
            sx={{ display: { xs: "none", sm: "block" } }}
            data-testid="userName"
          >
            Vaibhav Shukla
          </Typography>
        </Box>
      </AppBar>
      {/* {profileModal ? <ProfileModal /> : null} */}
    </Box>
  );
};

export { Navbar };