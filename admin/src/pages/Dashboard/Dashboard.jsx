import React from "react";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer";
import SocialSource from "./SocialSource";
import ActivityPanel from "./ActivityPanel";
import TopCitiesSellingProduct from "./TopCitiesSellingProduct";
import LatestTransaction from "./LatestTransaction";
import HeaderDBLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Dashboard = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="text-white bg-[#222736] min-h-screen">
        <div className="pt-6">
          <div className="w-full flex justify-between pb-6">
            <h1 className="font-bold">DASHBOARD</h1>
            <span className="flex text-sm">
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
            {/* Social Source Panel */}
            <div className="w-full">
              <SocialSource />
            </div>

            {/* Activity */}
            <div className="w-full">
              <ActivityPanel />
            </div>

            {/* Top Cities Selling Product */}
            <div className="w-full">
              <TopCitiesSellingProduct />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <LatestTransaction />
        </div>

        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;