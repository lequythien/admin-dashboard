import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate, useLocation } from "react-router-dom";
import { BiChat, BiHomeCircle } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { useAppStore } from "../redux/appStore";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#2a3042",
  "& .MuiDrawer-paper": {
    backgroundColor: "#2a3042",
    color: "#fff",
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Sidebar() {
  const theme = useTheme();
  const [tablesOpen, setTablesOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const open = useAppStore((state) => state.dopen);

  const handleTablesClick = () => {
    setTablesOpen(!tablesOpen);
  };

  // Hàm kiểm tra xem item có đang active không
  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "#fff" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "#fff" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {open && (
            <ListSubheader sx={{ color: "#7f8387", backgroundColor: "#2a3042" }}>
              MENU
            </ListSubheader>
          )}

          {/* Dashboard */}
          <ListItem
            disablePadding
            sx={{
              display: "block",
              position: "relative",
              "&:hover": {
                "& .MuiListItemIcon-root": { color: "#fff" },
                "& .MuiListItemText-root": {
                  opacity: 1,
                  color: "#fff",
                  position: open ? "static" : "absolute",
                  left: open ? "auto" : 60,
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  zIndex: 1300,
                },
              },
            }}
            onClick={() => navigate("/dashboard")}
          >
            <ListItemButton
              sx={[
                { minHeight: 48, px: 2.5 },
                open
                  ? { justifyContent: "initial" }
                  : { justifyContent: "center" },
              ]}
            >
              <ListItemIcon
                sx={[
                  { minWidth: 0, justifyContent: "center" },
                  { color: isActive("/dashboard") ? "#fff" : "#a6b0cf" },
                  open ? { mr: 3 } : { mr: "auto" },
                ]}
              >
                <BiHomeCircle className="text-xl" />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={[
                  open ? { opacity: 1 } : { opacity: 0 },
                  { color: isActive("/dashboard") ? "#fff" : "#a6b0cf" },
                ]}
              />
            </ListItemButton>
          </ListItem>

          {open && (
            <ListSubheader sx={{ color: "#7f8387", backgroundColor: "#2a3042" }}>
              APPS
            </ListSubheader>
          )}

          {/* Chat */}
          <ListItem
            disablePadding
            sx={{
              display: "block",
              position: "relative",
              "&:hover": {
                "& .MuiListItemIcon-root": { color: "#fff" },
                "& .MuiListItemText-root": {
                  opacity: 1,
                  color: "#fff",
                  position: open ? "static" : "absolute",
                  left: open ? "auto" : 60,
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  zIndex: 1300,
                },
              },
            }}
            onClick={() => navigate("/chat")}
          >
            <ListItemButton
              sx={[
                { minHeight: 48, px: 2.5 },
                open
                  ? { justifyContent: "initial" }
                  : { justifyContent: "center" },
              ]}
            >
              <ListItemIcon
                sx={[
                  { minWidth: 0, justifyContent: "center" },
                  { color: isActive("/chat") ? "#fff" : "#a6b0cf" },
                  open ? { mr: 3 } : { mr: "auto" },
                ]}
              >
                <BiChat className="text-xl" />
              </ListItemIcon>
              <ListItemText
                primary="Chat"
                sx={[
                  open ? { opacity: 1 } : { opacity: 0 },
                  { color: isActive("/chat") ? "#fff" : "#a6b0cf" },
                ]}
              />
            </ListItemButton>
          </ListItem>

          {open && (
            <ListSubheader sx={{ color: "#7f8387", backgroundColor: "#2a3042" }}>
              COMPONENTS
            </ListSubheader>
          )}

          {/* Tables */}
          <ListItem
            disablePadding
            sx={{
              display: "block",
              position: "relative",
              "&:hover": {
                "& .MuiListItemIcon-root": { color: "#fff" },
                "& .MuiListItemText-root": {
                  opacity: 1,
                  color: "#fff",
                  position: open ? "static" : "absolute",
                  left: open ? "auto" : 60,
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  zIndex: 1300,
                },
              },
            }}
          >
            <ListItemButton
              sx={[
                { minHeight: 48, px: 2.5 },
                open
                  ? { justifyContent: "initial" }
                  : { justifyContent: "center" },
              ]}
              onClick={handleTablesClick}
            >
              <ListItemIcon
                sx={[
                  { minWidth: 0, justifyContent: "center" },
                  { color: isActive("/data-tables") ? "#fff" : "#a6b0cf" },
                  open ? { mr: 3 } : { mr: "auto" },
                ]}
              >
                <IoListSharp className="text-xl" />
              </ListItemIcon>
              <ListItemText
                primary="Tables"
                sx={[
                  open ? { opacity: 1 } : { opacity: 0 },
                  { color: isActive("/data-tables") ? "#fff" : "#a6b0cf" },
                ]}
              />
              {open &&
                (tablesOpen ? (
                  <ExpandLess
                    sx={{
                      color: isActive("/data-tables") ? "#fff" : "#a6b0cf",
                    }}
                  />
                ) : (
                  <ExpandMore
                    sx={{
                      color: isActive("/data-tables") ? "#fff" : "#a6b0cf",
                    }}
                  />
                ))}
            </ListItemButton>
          </ListItem>

          {/* Data Tables (Dropdown) */}
          <Collapse in={tablesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  "&:hover": {
                    "& .MuiListItemText-root": { color: "#fff" },
                  },
                }}
                onClick={() => navigate("/data-tables")}
              >
                <ListItemButton
                  sx={[
                    { minHeight: 48, px: 2.5 },
                    open ? { pl: 8 } : { justifyContent: "center" },
                  ]}
                >
                  <ListItemText
                    primary="Data Tables"
                    sx={[
                      open ? { opacity: 1 } : { opacity: 0 },
                      { color: isActive("/data-tables") ? "#fff" : "#a6b0cf" },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </Box>
  );
}
