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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: 500 },
  bgcolor: "#2a3042",
  borderRadius: "8px",
  border: "none",
  color: "#fff",
  px: { xs: 4, sm: 6, md: 8 },
  py: { xs: 4, sm: 5, md: 6 },
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
      <div className="text-white bg-[#222736] min-h-screen">
        <div className="pt-16">
          <div className="w-full flex justify-between pb-6">
            <h1 className="poppins-semibold">DASHBOARD</h1>
            <span className="flex text-xs">
              <a href="">Dashboard</a>
              <p className="ml-1 text-[#c3cbe4]">/ Dashboard</p>
            </span>
          </div>

          {/* Header dashboard */}
          <div className="flex w-full flex-col lg:flex-row gap-4">
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
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            >
              <IconButton onClick={handleCloseModal} sx={{ color: "#a6b0cf" }}>
                <CloseIcon />
              </IconButton>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div className="bg-icon-modal mb-4 rounded-full flex justify-center items-center p-3">
                <HiOutlineMailOpen className="text-3xl md:text-4xl text-[#556ee6]" />
              </div>
              {/* Heading */}
              <h2 className="text-lg md:text-xl poppins-medium text-[#556ee6] mb-2">
                Subscribe !
              </h2>
              <p className="text-center text-xs sm:text-sm md:text-base poppins-regular text-[#c3cbe4] mb-4 md:mb-6">
                Subscribe our newsletter and get notification to stay update.
              </p>
              {/* Input and Button */}
              <div className="w-full flex flex-col sm:flex-row items-center poppins-regular gap-2">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Email address"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#3a4256",
                      color: "#fff",
                      borderRadius: "4px",
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
                      padding: { xs: "8px", sm: "10px" },
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
                    minWidth: "40px",
                    height: "40px",
                    borderRadius: "4px",
                    padding: 0,
                    mt: { xs: 2, sm: 0 },
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
