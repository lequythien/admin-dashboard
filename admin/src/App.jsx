import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat/Chat";
// import Auth from "./pages/Auth";
import { useAppStore } from "./redux/appStore";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Users from "./pages/Tables/Users";
import Post from "./pages/Tables/Post";

const App = () => {
  const open = useAppStore((state) => state.dopen);

  return (
    <div>
      <Routes>
        {/* <Route path="/auth" element={<Auth />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <div className="bg-[#222736] w-full h-screen flex flex-col">
                <Box height={30} />
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    backgroundColor: "#222736",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Sidebar />
                  <Box
                    component="main"
                    sx={{
                      flexGrow: 1,
                      p: 2,
                      width: "100%",
                      overflowY: "auto",
                    }}
                  >
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/chat" element={<Chat />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/post" element={<Post />} />
                    </Routes>
                  </Box>
                </Box>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
