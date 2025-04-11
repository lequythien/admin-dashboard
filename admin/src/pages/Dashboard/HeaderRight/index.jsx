import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BiCopyAlt, BiPurchaseTagAlt } from "react-icons/bi";
import { RiInboxArchiveLine } from "react-icons/ri";

const weekData = [
  { name: "Jan", A: 34, B: 10, C: 11 },
  { name: "Feb", A: 55, B: 63, C: 17 },
  { name: "Mar", A: 21, B: 40, C: 15 },
  { name: "Apr", A: 77, B: 80, C: 85 },
  { name: "May", A: 32, B: 52, C: 21 },
  { name: "Jun", A: 63, B: 41, C: 14 },
  { name: "Jul", A: 86, B: 11, C: 80 },
  { name: "Aug", A: 42, B: 32, C: 58 },
  { name: "Sep", A: 34, B: 30, C: 17 },
  { name: "Oct", A: 18, B: 86, C: 12 },
  { name: "Nov", A: 16, B: 44, C: 20 },
  { name: "Dec", A: 41, B: 33, C: 18 },
];

const monthData = [
  { name: "Jan", A: 14, B: 13, C: 11 },
  { name: "Feb", A: 52, B: 23, C: 17 },
  { name: "Mar", A: 11, B: 20, C: 15 },
  { name: "Apr", A: 57, B: 8, C: 15 },
  { name: "May", A: 22, B: 13, C: 34 },
  { name: "Jun", A: 33, B: 27, C: 55 },
  { name: "Jul", A: 31, B: 18, C: 21 },
  { name: "Aug", A: 22, B: 22, C: 18 },
  { name: "Sep", A: 64, B: 10, C: 17 },
  { name: "Oct", A: 58, B: 24, C: 20 },
  { name: "Nov", A: 32, B: 24, C: 20 },
  { name: "Dec", A: 68, B: 22, C: 18 },
];

const yearData = [
  { name: "Jan", A: 44, B: 13, C: 11 },
  { name: "Feb", A: 55, B: 23, C: 17 },
  { name: "Mar", A: 41, B: 20, C: 15 },
  { name: "Apr", A: 67, B: 8, C: 15 },
  { name: "May", A: 22, B: 13, C: 21 },
  { name: "Jun", A: 43, B: 27, C: 14 },
  { name: "Jul", A: 36, B: 18, C: 11 },
  { name: "Aug", A: 52, B: 22, C: 18 },
  { name: "Sep", A: 24, B: 10, C: 17 },
  { name: "Oct", A: 18, B: 16, C: 12 },
  { name: "Nov", A: 36, B: 24, C: 20 },
  { name: "Dec", A: 48, B: 22, C: 18 },
];

const Dashboard = () => {
  const [data, setData] = useState(yearData);
  const [activeView, setActiveView] = useState("year");
  const [barOpacity, setBarOpacity] = useState({
    A: 1,
    B: 1,
    C: 1,
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const hoveredBar = payload[0];
      const fillColor = hoveredBar.fill;
      const dataEntry = hoveredBar.payload;

      let displayValue = "";
      let displayColor = "";
      let displayName = "";

      if (fillColor === "#4f46e5") {
        displayValue = dataEntry.A;
        displayColor = "#4f46e5";
        displayName = "A";
      } else if (fillColor === "#fbbf24") {
        displayValue = dataEntry.B;
        displayColor = "#fbbf24";
        displayName = "B";
      } else if (fillColor === "#10b981") {
        displayValue = dataEntry.C;
        displayColor = "#10b981";
        displayName = "C";
      }

      return (
        <div className="bg-gray-800 p-2 rounded shadow text-white">
          <p>{`${label}`}</p>
          <p
            style={{ color: displayColor }}
          >{`${displayName}: ${displayValue}`}</p>
        </div>
      );
    }
    return null;
  };

  const handleLegendClick = (dataKey) => {
    setBarOpacity((prev) => ({
      ...prev,
      [dataKey]: prev[dataKey] === 1 ? 0.3 : 1,
    }));
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry) => (
          <div
            key={entry.value}
            className="flex items-center cursor-pointer"
            onClick={() => handleLegendClick(entry.value)}
          >
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: entry.color,
                marginRight: 5,
                opacity: barOpacity[entry.value],
              }}
              className="border border-white"
            />
            <span
              style={{
                color: "#74788d",
                opacity: barOpacity[entry.value],
              }}
              className="text-xs md:text-sm"
            >
              Series {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card
          className="bg-[#2a3042] poppins-medium"
          title="Orders"
          value="1,235"
          icon={<BiCopyAlt />}
        />
        <Card
          className="bg-[#2a3042] poppins-medium"
          title="Revenue"
          value="$35,723"
          icon={<RiInboxArchiveLine />}
        />
        <Card
          className="bg-[#2a3042] poppins-medium"
          title="Average Price"
          value="$16.2"
          icon={<BiPurchaseTagAlt />}
        />
      </div>

      <div className="bg-[#2a3042] p-4 md:p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <h2 className="text-base font-semibold">Email Sent</h2>
          <div className="flex space-x-2 md:space-x-4">
            <button
              onClick={() => {
                setData(weekData);
                setActiveView("week");
              }}
              className={`px-3 py-1 text-xs  md:text-sm rounded ${
                activeView === "week" ? "bg-[#556ee6]" : ""
              }`}
            >
              Week
            </button>
            <button
              onClick={() => {
                setData(monthData);
                setActiveView("month");
              }}
              className={`px-3 py-1 text-xs  md:text-sm rounded ${
                activeView === "month" ? "bg-[#556ee6]" : ""
              }`}
            >
              Month
            </button>
            <button
              onClick={() => {
                setData(yearData);
                setActiveView("year");
              }}
              className={`px-3 py-1 text-xs 
                 md:text-sm rounded ${
                   activeView === "year" ? "bg-[#556ee6]" : ""
                 }`}
            >
              Year
            </button>
          </div>
        </div>
        <ResponsiveContainer
          width="100%"
          height={window.innerWidth < 768 ? 200 : 300}
        >
          <BarChart data={data} barSize={window.innerWidth < 768 ? 5 : 10}>
            <XAxis
              dataKey="name"
              stroke="#ccc"
              tick={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
            />
            <YAxis
              stroke="#ccc"
              tick={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} />
            <Bar
              dataKey="A"
              stackId="a"
              fill="#4f46e5"
              fillOpacity={barOpacity.A}
            />
            <Bar
              dataKey="B"
              stackId="a"
              fill="#fbbf24"
              fillOpacity={barOpacity.B}
            />
            <Bar
              dataKey="C"
              stackId="a"
              fill="#10b981"
              fillOpacity={barOpacity.C}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon, className }) => (
  <div
    className={`${className} p-6 md:p-5 rounded-lg shadow-lg flex justify-between items-center`}
  >
    <div>
      <h3 className="text-[#a6b0cf] text-xs">{title}</h3>
      <p className="text-lg md:text-xl mt-2 md:mt-3 poppins-medium">{value}</p>
    </div>
    <div className="bg-[#556ee6] rounded-full p-3 md:p-3">
      <div className="text-white text-2xl md:text-2xl">{icon}</div>
    </div>
  </div>
);

export default Dashboard;
