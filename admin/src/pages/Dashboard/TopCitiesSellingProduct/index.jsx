import React from "react";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";

const TopCitiesSellingProduct = () => {
  return (
    <div className="bg-[#2a3042] p-6 rounded-lg shadow-lg">
      <h3 className="text-sm font-semibold text-white uppercase mb-4">
        Top Cities Selling Product
      </h3>

      {/* Phần chính với biểu tượng và số liệu nổi bật */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-col items-center">
          <PiMapPinSimpleAreaBold className="h-12 w-auto my-4 text-[#556ee6]" />
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-white py-1">1,456</h4>
            <p className="text-sm text-gray-400">San Francisco</p>
          </div>
        </div>
      </div>

      {/* Danh sách các thành phố */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300 w-1/4">San Francisco</span>
          <span className="text-sm text-gray-300 w-1/4 text-center">1,456</span>
          <div className="w-2/4 h-1.5">
            <div
              className="bg-[#556ee6] h-1.5 rounded-l-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
        <hr className="border-[#32394e]" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300 w-1/4">Los Angeles</span>
          <span className="text-sm text-gray-300 w-1/4 text-center">1,123</span>
          <div className="w-2/4 h-1.5">
            <div
              className="bg-[#34C38F] h-1.5 rounded-l-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <hr className="border-[#32394e]" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300 w-1/4">San Diego</span>
          <span className="text-sm text-gray-300 w-1/4 text-center">1,026</span>
          <div className="w-2/4 h-1.5">
            <div
              className="bg-[#F1B44C] h-1.5 rounded-l-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        <hr className="border-[#32394e]" />
      </div>
    </div>
  );
};

export default TopCitiesSellingProduct;
