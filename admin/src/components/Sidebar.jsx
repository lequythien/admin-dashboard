import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../redux/appStore";
import { BiChat, BiHomeCircle } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { BsClipboard2DataFill } from "react-icons/bs";

const NAVIGATION = [
  {
    kind: "header",
    title: "menu",
  },
  {
    segment: "dashboard",
    title: "dashboard",
    icon: <BiHomeCircle />,
    path: "/dashboard",
  },
  {
    kind: "header",
    title: "apps",
  },
  {
    segment: "chat",
    title: "chat",
    icon: <BiChat />,
    path: "/chat",
  },
  {
    kind: "header",
    title: "components",
  },
  {
    segment: "tables",
    title: "tables",
    icon: <IoListSharp />,
    children: [
      {
        segment: "data-tables",
        title: "dataTables",
        icon: <BsClipboard2DataFill />,
        path: "/data-tables",
      },
    ],
  },
];

export default function Sidebar() {
  const { t } = useTranslation();
  const [tablesOpen, setTablesOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const open = useAppStore((state) => state.dopen);
  const updateOpen = useAppStore((state) => state.updateOpen);
  const isBelow992px = useMediaQuery("(max-width:992px)");

  const handleTablesClick = () => {
    setTablesOpen(!tablesOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleDrawerClose = () => {
    updateOpen(false);
  };

  const renderMenuItem = (item) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
      <ListItem
        key={item.segment}
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
              left: open ? "auto" : "60px",
              top: open ? "auto" : "50%",
              transform: open ? "none" : "translateY(-50%)",
              backgroundColor: open ? "transparent" : "#3a4256",
              padding: open ? "0" : "6px 12px",
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
            open ? { justifyContent: "initial" } : { justifyContent: "center" },
            isActive(item.path),
          ]}
          onClick={() => {
            if (hasChildren) {
              handleTablesClick();
            } else if (item.path) {
              navigate(item.path);
              if (isBelow992px) updateOpen(false);
            }
          }}
        >
          <ListItemIcon
            sx={[
              { minWidth: 0, justifyContent: "center" },
              { color: isActive(item.path) ? "#fff" : "#a6b0cf" },
              open ? { mr: 2 } : { mr: "auto" },
              { fontSize: "1.2rem" },
            ]}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={t(item.title)}
            className="poppins-regular"
            sx={[
              open ? { opacity: 1 } : { opacity: 0 },
              { color: isActive(item.path) ? "#fff" : "#a6b0cf" },
              { "& .MuiTypography-root": { fontSize: "0.95rem" } },
            ]}
          />
          {hasChildren &&
            open &&
            (tablesOpen ? (
              <ExpandLess sx={{ color: "#a6b0cf", fontSize: "1.25rem" }} />
            ) : (
              <ExpandMore sx={{ color: "#a6b0cf", fontSize: "1.25rem" }} />
            ))}
        </ListItemButton>

        {hasChildren && (
          <Collapse in={tablesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child) => (
                <ListItem
                  key={child.segment}
                  disablePadding
                  sx={{
                    display: "block",
                    "&:hover": {
                      "& .MuiListItemText-root": { color: "#fff" },
                    },
                  }}
                  onClick={() => {
                    navigate(child.path);
                    if (isBelow992px) updateOpen(false);
                  }}
                >
                  <ListItemButton
                    sx={[
                      { minHeight: 48, px: 2.5 },
                      open ? { pl: 7 } : { justifyContent: "center" },
                      isActive(child.path),
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        { minWidth: 0, justifyContent: "center" },
                        { color: isActive(child.path) ? "#fff" : "#a6b0cf" },
                        open ? { mr: 2 } : { mr: "auto" },
                        { fontSize: "1rem" },
                      ]}
                    >
                      {child.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={t(child.title)}
                      sx={[
                        open ? { opacity: 1 } : { opacity: 0 },
                        { color: isActive(child.path) ? "#fff" : "#a6b0cf" },
                        { "& .MuiTypography-root": { fontSize: "1rem" } },
                      ]}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </ListItem>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiDrawer
        variant={isBelow992px ? "temporary" : "permanent"}
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#2a3042",
            width: open ? 240 : 65,
            boxSizing: "border-box",
            color: "#fff",
            zIndex: isBelow992px ? 1300 : 1200,
            position: isBelow992px ? "fixed" : "relative",
            height: "100%",
            transition: "width 0.3s ease",
          },
        }}
      >
        <Box
          sx={{
            display: isBelow992px && !open ? "none" : "block",
            backgroundColor: "#2a3042",
            height: "100%",
            paddingTop: "50px",
            overflowY: "auto",
          }}
        >
          <List>
            {NAVIGATION.map((item) => {
              if (item.kind === "header" && open) {
                return (
                  <ListSubheader
                    key={item.title}
                    sx={{
                      color: "#7f8387",
                      backgroundColor: "#2a3042",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {t(item.title)}
                  </ListSubheader>
                );
              }
              if (item.kind === "divider" && open) {
                return (
                  <hr
                    key={item.kind}
                    style={{ borderColor: "#3a4256", margin: "8px 0" }}
                  />
                );
              }
              if (item.segment) {
                return renderMenuItem(item);
              }
              return null;
            })}
          </List>
        </Box>
      </MuiDrawer>
    </Box>
  );
}
