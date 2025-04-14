import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../../components/Footer";
import SocialSource from "./SocialSource";
import ActivityPanel from "./ActivityPanel";
import TopCitiesSellingProduct from "./TopCitiesSellingProduct";
import LatestTransaction from "./LatestTransaction";
import HeaderDBLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbSend } from "react-icons/tb";

// Modal style with responsive adjustments
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: 400, lg: 450 },
  bgcolor: "#2a3042",
  borderRadius: "8px",
  border: "none",
  color: "#fff",
  px: { xs: 2, sm: 3, md: 4 },
  py: { xs: 3, sm: 4, md: 5 },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
};

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="text-white bg-[#222736] min-h-screen px-2">
        <div className="pt-16">
          <div className="w-full flex justify-between pb-6">
            <h1 className="poppins-semibold">DASHBOARD</h1>
            <span className="flex text-xs">
              <a href="">Dashboard</a>
              <p className="ml-1 text-[#c3cbe4]">/ Dashboard</p>
            </span>
          </div>

          {/* Header dashboard */}
          <div className="flex w-full flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3">
              <HeaderDBLeft />
            </div>
            <div className="w-full lg:w-2/3">
              <HeaderRight />
            </div>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-6">
            <div className="w-full">
              <SocialSource />
            </div>
            <div className="w-full">
              <ActivityPanel />
            </div>
            <div className="w-full">
              <TopCitiesSellingProduct />
            </div>
          </div>
        </div>

        <div>
          <LatestTransaction />
        </div>

        <div>
          <Footer />
        </div>
      </div>

      {/* Modal for subscription */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Fade in={openModal}>
          <Box sx={modalStyle}>
            {/* Close Button */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            >
              <IconButton onClick={handleCloseModal} sx={{ color: "#a6b0cf" }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col items-center w-full">
              {/* Icon */}
              <div className="bg-[#3a4256] mb-4 rounded-full flex justify-center items-center p-4">
                <HiOutlineMailOpen className="text-4xl text-[#556ee6]" />
              </div>

              {/* Heading */}
              <h2 className="text-xl poppins-medium text-[#556ee6] mb-2">
                Subscribe !
              </h2>

              {/* Description */}
              <p className="text-center text-sm poppins-regular text-[#a6b0cf] mb-6">
                Subscribe our newsletter and get notification to stay update.
              </p>

              {/* Input and Button */}
              <div className="w-full flex items-center">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Email address"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#3a4256",
                      color: "#fff",
                      borderRadius: 0,
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#a6b0cf",
                      padding: { xs: "10px", sm: "12px" },
                      fontSize: { xs: "12px", sm: "14px" },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3b82f6",
                    "&:hover": {
                      backgroundColor: "#2563eb",
                    },
                    minWidth: { xs: "36px", sm: "44px" },
                    height: { xs: "36px", sm: "44px" },
                    padding: 0,
                    flexShrink: 0,
                    borderRadius: 0,
                  }}
                >
                  <TbSend className="text-lg md:text-xl" />
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Dashboard;
