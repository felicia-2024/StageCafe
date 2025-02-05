/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/logo1.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CakeIcon from "@mui/icons-material/Cake";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Online Menu",
      icon: <MenuIcon />,
      path: "/",
    },
    {
      text: "Catering",
      icon: <RamenDiningIcon />,
      path: "/",
    },
    {
      text: "Cakes",
      icon: <CakeIcon />,
      path: "/",
    },
    {
      text: "About Us",
      icon: <InfoIcon />,
      path: "/",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      path: "/",
    },
    {
      text: "Sign In",
      icon: <LoginIcon />,
      path: "/sign-in",
    },
  ];

  const handleLoginPage = () => {
    navigate("/sign-in");
  };
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="">Online Menu</a>
        <a href="">Catering</a>
        <a href="">Cakes</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button" onClick={handleLoginPage}>
          Sign In
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <a key={item.text} href={item.path} style={{color: 'var(--dark)'}}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </a>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
