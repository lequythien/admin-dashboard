import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import { useAppStore } from "../redux/appStore";
import { LuLockKeyholeOpen, LuUser, LuWrench } from "react-icons/lu";
import { RiArrowDropDownLine, RiLogoutCircleRLine } from "react-icons/ri";
import { BiSearchAlt, BiWallet } from "react-icons/bi";
import {
  MdOutlineDashboardCustomize,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import icon_spanish from "../assets/images/spanish.jpg";
import icon_german from "../assets/images/german.jpg";
import icon_italian from "../assets/images/italian.jpg";
import icon_russian from "../assets/images/russian.jpg";
import icon_english from "../assets/images/logo-usa.jpg";
import Icon1 from "../assets/images/icon1.png";
import Icon2 from "../assets/images/icon2.png";
import Icon3 from "../assets/images/icon3.png";
import Icon4 from "../assets/images/icon4.png";
import Icon5 from "../assets/images/icon5.png";
import Icon6 from "../assets/images/icon6.png";
import ntf_avatar2 from "../assets/images/notif-icon2.jpg";
import ntf_avatar4 from "../assets/images/notif-icon4.jpg";
import Avatar from "../assets/images/avatar.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import LogoIconMobile from "../assets/images/logo2-admin.svg";
import LogoIconDesktop from "../assets/images/logo-admin.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import useMediaQuery from "@mui/material/useMediaQuery";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#262b3c",
  boxShadow: "0 0px 0px rgba(0, 0, 0, 0.1)",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "#2a3042",
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#94a3b8",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#e2e8f0",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
}));

const languages = [
  { name: "Spanish", icon: icon_spanish, code: "es" },
  { name: "German", icon: icon_german, code: "de" },
  { name: "Italian", icon: icon_italian, code: "it" },
  { name: "Russian", icon: icon_russian, code: "ru" },
  { name: "English", icon: icon_english, code: "en" },
];

const apps = [
  { name: "GitHub", icon: Icon1 },
  { name: "Bitbucket", icon: Icon2 },
  { name: "Dribbble", icon: Icon3 },
  { name: "Dropbox", icon: Icon4 },
  { name: "Mail Chimp", icon: Icon5 },
  { name: "Slack", icon: Icon6 },
];

const notifications = [
  {
    icon: <MdOutlineShoppingCart className="text-xl" />,
    title: "yourOrderIsPlaced",
    description: "If several languages coalesce the grammar",
    time: "3 min ago",
    avatar: null,
  },
  {
    avatar: ntf_avatar2,
    title: "James Lemire",
    description: "It will seem like simplified English.",
    time: "1 hour ago",
  },
  {
    icon: <BiWallet className="text-xl" />,
    title: "yourItemIsShipped",
    description: "If several languages coalesce the",
    time: "3 hour ago",
    avatar: null,
  },
  {
    avatar: ntf_avatar4,
    title: "James Lemire",
    description: "It will seem like simplified English.",
    time: "1 hour ago",
  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  const [appsAnchorEl, setAppsAnchorEl] = React.useState(null);
  const [notifAnchorEl, setNotifAnchorEl] = React.useState(null);
  const [searchAnchorEl, setSearchAnchorEl] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[4]);
  const updateOpen = useAppStore((state) => state.updateOpen);
  const dopen = useAppStore((state) => state.dopen);
  const isBelow992px = useMediaQuery("(max-width:992px)");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLangMenuOpen = Boolean(langAnchorEl);
  const isAppsMenuOpen = Boolean(appsAnchorEl);
  const isNotifMenuOpen = Boolean(notifAnchorEl);
  const isSearchMenuOpen = Boolean(searchAnchorEl);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLangMenuOpen = (event) => setLangAnchorEl(event.currentTarget);
  const handleLangMenuClose = () => setLangAnchorEl(null);
  const handleAppsMenuOpen = (event) => setAppsAnchorEl(event.currentTarget);
  const handleAppsMenuClose = () => setAppsAnchorEl(null);
  const handleNotifMenuOpen = (event) => setNotifAnchorEl(event.currentTarget);
  const handleNotifMenuClose = () => setNotifAnchorEl(null);
  const handleSearchMenuOpen = (event) =>
    setSearchAnchorEl(event.currentTarget);
  const handleSearchMenuClose = () => setSearchAnchorEl(null);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.code);
    handleLangMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        style: {
          backgroundColor: "#2d3748",
          color: "#e2e8f0",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          width: 200,
        },
      }}
    >
      <MenuItem onClick={handleMenuClose}>
        <LuUser className="mr-2" /> {t("profile")}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <BiWallet className="mr-2" /> {t("myWallet")}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <LuWrench className="mr-2" /> {t("settings")}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <LuLockKeyholeOpen className="mr-2" /> {t("lockScreen")}
      </MenuItem>
      <hr className="border-gray-600" />
      <NavLink to="/auth">
        <MenuItem onClick={handleMenuClose}>
          <RiLogoutCircleRLine className="mr-2 text-red-400" /> {t("logout")}
        </MenuItem>
      </NavLink>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        style: {
          backgroundColor: "#2d3748",
          color: "#e2e8f0",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>{t("messages")}</p>
      </MenuItem>
      <MenuItem onClick={handleNotifMenuOpen}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={notifications.length} color="error">
            <FaBell />
          </Badge>
        </IconButton>
        <p>{t("notifications")}</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>{t("profile")}</p>
      </MenuItem>
    </Menu>
  );

  const langMenuId = "language-menu";
  const renderLangMenu = (
    <Menu
      anchorEl={langAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={langMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isLangMenuOpen}
      onClose={handleLangMenuClose}
      PaperProps={{
        style: {
          backgroundColor: "#2d3748",
          color: "#e2e8f0",
          minWidth: "170px",
        },
      }}
    >
      {languages.map((lang) => (
        <MenuItem
          key={lang.name}
          onClick={() => handleLanguageSelect(lang)}
          sx={{ "&:hover": { backgroundColor: "#374151" } }}
        >
          <img src={lang.icon} alt={lang.name} className="h-3 w-auto mr-2" />
          <span className="text-sm">{lang.name}</span>
        </MenuItem>
      ))}
    </Menu>
  );

  const appsMenuId = "apps-menu";
  const renderAppsMenu = (
    <Menu
      anchorEl={appsAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={appsMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isAppsMenuOpen}
      onClose={handleAppsMenuClose}
      PaperProps={{
        style: {
          backgroundColor: "#2d3748",
          color: "#e2e8f0",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          width: "300px",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          p: 1,
        }}
      >
        {apps.map((app) => (
          <MenuItem
            key={app.name}
            onClick={handleAppsMenuClose}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&:hover": { backgroundColor: "#374151" },
              py: 1,
            }}
          >
            <img src={app.icon} alt={app.name} className="h-6 w-auto mb-2" />
            <span className="text-xs text-center">{app.name}</span>
          </MenuItem>
        ))}
      </Box>
    </Menu>
  );

  const notifMenuId = "notifications-menu";
  const renderNotifMenu = (
    <Menu
      anchorEl={notifAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={notifMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isNotifMenuOpen}
      onClose={handleNotifMenuClose}
      PaperProps={{
        style: {
          backgroundColor: "#2d3748",
          color: "#e2e8f0",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          width: "300px",
          maxHeight: "400px",
          overflowY: "auto",
        },
      }}
    >
      <Box sx={{ p: 1, borderBottom: "1px solid #374151" }}>
        <span className="text-sm font-medium">
          {t("notifications")} ({notifications.length})
        </span>
      </Box>
      {notifications.map((notif, index) => (
        <MenuItem
          key={index}
          onClick={handleNotifMenuClose}
          sx={{ "&:hover": { backgroundColor: "#374151" }, py: 1 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            {notif.avatar ? (
              <img
                src={notif.avatar}
                alt="Avatar"
                className="h-8 w-8 rounded-full mr-2"
              />
            ) : (
              <Box sx={{ mr: 2 }}>{notif.icon}</Box>
            )}
            <Box>
              <span className="text-sm font-medium">{t(notif.title)}</span>
              <p className="text-xs text-gray-400">{notif.description}</p>
              <p className="text-xs text-gray-500">{notif.time}</p>
            </Box>
          </Box>
        </MenuItem>
      ))}
      <Box sx={{ p: 1, borderTop: "1px solid #374151", textAlign: "center" }}>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-xs">
          {t("viewAll")}
        </a>
      </Box>
    </Menu>
  );

  const searchMenuId = "search-menu";
  const renderSearchMenu = (
    <Menu
      anchorEl={searchAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={searchMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isSearchMenuOpen}
      onClose={handleSearchMenuClose}
      PaperProps={{
        style: {
          backgroundColor: "#2d3748",
          color: "#e2e8f0",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          width: "250px",
          padding: "8px",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <SearchIconWrapper>
          <BiSearchAlt />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("searchPlaceholder")}
          inputProps={{ "aria-label": "search" }}
          sx={{ width: "100%" }}
        />
      </Box>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <NavLink to="/">
            <div className="flex justify-center bg-[#2a3042] w-full h-16">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: {
                    xs: "auto",
                    md: dopen && !isBelow992px ? "15rem" : "4rem",
                  },
                  justifyContent: { xs: "space-between", md: "center" },
                }}
              >
                <div className="desktop-logo-wrapper flex justify-center">
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <img
                      src={
                        dopen && !isBelow992px
                          ? LogoIconDesktop
                          : LogoIconMobile
                      }
                      alt="Logo Desktop"
                      className={
                        dopen && !isBelow992px ? "logo-sidebar" : "h-8 w-auto"
                      }
                    />
                  </Box>
                </div>
                <div className="mobile-logo-wrapper">
                  <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <img
                      src={LogoIconMobile}
                      alt="Logo Mobile"
                      className="h-8 w-auto"
                    />
                  </Box>
                </div>
              </Box>
            </div>
          </NavLink>

          <Box sx={{ ml: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => updateOpen(!dopen)}
            >
              <MenuIcon sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" } }} />
            </IconButton>
          </Box>

          <Search>
            <SearchIconWrapper>
              <BiSearchAlt />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("searchPlaceholder")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              mr: 2,
            }}
          >
            <IconButton
              size="large"
              aria-label="select language"
              aria-controls={langMenuId}
              aria-haspopup="true"
              onClick={handleLangMenuOpen}
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <img
                src={selectedLanguage.icon}
                alt={selectedLanguage.name}
                className="h-4 w-auto"
              />
            </IconButton>

            <IconButton
              size="medium"
              aria-label="apps"
              aria-controls={appsMenuId}
              aria-haspopup="true"
              onClick={handleAppsMenuOpen}
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <MdOutlineDashboardCustomize />
            </IconButton>

            <IconButton
              size="small"
              aria-label="view more.."
              aria-controls={notifMenuId}
              aria-haspopup="true"
              onClick={handleNotifMenuOpen}
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <Badge badgeContent={notifications.length} color="error">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 15, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                >
                  <FaBell className="text-gray-400 text-lg" />
                </motion.div>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img
                src={Avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-gray-300 text-sm flex items-center">
                admin <RiArrowDropDownLine className="text-xl text-gray-400" />
              </span>
            </IconButton>

            <IconButton
              size="small"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <IoSettingsOutline />
              </motion.div>
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
              mr: 1,
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              aria-label="search"
              aria-controls={searchMenuId}
              aria-haspopup="true"
              onClick={handleSearchMenuOpen}
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <BiSearchAlt />
            </IconButton>

            <IconButton
              size="large"
              aria-label="select language"
              aria-controls={langMenuId}
              aria-haspopup="true"
              onClick={handleLangMenuOpen}
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <img
                src={selectedLanguage.icon}
                alt={selectedLanguage.name}
                className="h-4 w-auto"
              />
            </IconButton>

            <IconButton
              size="small"
              aria-label="notifications"
              aria-controls={notifMenuId}
              aria-haspopup="true"
              onClick={handleNotifMenuOpen}
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <Badge badgeContent={notifications.length} color="error">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 15, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                >
                  <FaBell className="text-gray-400 text-lg" />
                </motion.div>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <img
                src={Avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            </IconButton>

            <IconButton
              size="small"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <IoSettingsOutline />
              </motion.div>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
      {renderLangMenu}
      {renderAppsMenu}
      {renderNotifMenu}
      {renderSearchMenu}
    </Box>
  );
}
