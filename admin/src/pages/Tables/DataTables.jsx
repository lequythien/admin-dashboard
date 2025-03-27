import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Footer from "../../components/Footer";

const initialData = [
  {
    name: "Jennifer Chang",
    position: "Regional Director",
    office: "Singapore",
    age: 28,
    startDate: "2010/11/14",
    salary: "$337,650",
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: 47,
    startDate: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    age: 21,
    startDate: "2011/12/22",
    salary: "$106,450",
  },
  {
    name: "Yuri Berry",
    position: "Chief Marketing Officer (CMO)",
    office: "New York",
    age: 40,
    startDate: "2009/06/25",
    salary: "$675,000",
  },
  {
    name: "Michael Silva",
    position: "Marketing Designer",
    office: "London",
    age: 66,
    startDate: "2012/11/27",
    salary: "$198,500",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Paul Byrd",
    position: "Chief Financial Officer (CFO)",
    office: "New York",
    age: 64,
    startDate: "2010/06/09",
    salary: "$725,000",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: 62,
    startDate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    age: 61,
    startDate: "2011/04/25",
    salary: "$320,800",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    age: 55,
    startDate: "2010/10/14",
    salary: "$327,900",
  },
];

export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Match the image (10 items per page)
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const getSortedData = () => {
    let sortedData = [...initialData];

    sortedData = sortedData.filter((row) =>
      Object.values(row).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === "number" && aValue !== null) {
          return sortConfig.direction === "ascending"
            ? aValue - bValue
            : bValue - aValue;
        }

        return sortConfig.direction === "ascending"
          ? String(aValue || "").localeCompare(String(bValue || ""))
          : String(bValue || "").localeCompare(String(aValue || ""));
      });
    }

    return sortedData;
  };

  const sortedData = getSortedData();
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  return (
    <div className="text-white h-full">
      <div className="pt-16 mx-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">DATA TABLE</h1>
          <div className="text-gray-400">
            <a href="#" className="mr-2 text-white">
              Tables
            </a>
            <span className="text-[#a6b0cf]">/ Data Table</span>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder={`Search ${totalItems} records...`}
            value={searchTerm}
            onChange={handleSearch}
            className="p-1 pl-4 w-96 border border-gray-600 outline-none bg-[#2a3042] rounded-sm text-white placeholder-[#a6b0cf]"
          />
        </div>
        <div className="bg-gray-800 overflow-hidden rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#2a3042] text-[#a6b0cf]">
                {[
                  { label: "NAME", key: "name" },
                  { label: "POSITION", key: "position" },
                  { label: "OFFICE", key: "office" },
                  { label: "AGE", key: "age" },
                  { label: "START DATE", key: "startDate" },
                  { label: "SALARY", key: "salary" },
                ].map((column) => (
                  <th
                    key={column.key}
                    className="p-3 cursor-pointer"
                    onClick={() => handleSort(column.key)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{column.label}</span>
                      <span className="inline-block align-middle">
                        {sortConfig.key === column.key &&
                        sortConfig.direction === "descending" ? (
                          <TiArrowSortedUp />
                        ) : (
                          <TiArrowSortedDown />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr
                  key={index}
                  className="bg-[#2a3042] border-t border-gray-700 text-sm text-[#a6b0cf] hover:bg-gray-700"
                >
                  <td className="p-3">{row.name}</td>
                  <td className="p-3">{row.position}</td>
                  <td className="p-3">{row.office}</td>
                  <td className="p-3">{row.age}</td>
                  <td className="p-3">{row.startDate}</td>
                  <td className="p-3">{row.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 mb-6 text-gray-400">
          <span className="text-[#a6b0cf]">
            Showing {Math.min(endIndex, totalItems)} of {totalItems} results
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            >
              <IoIosArrowBack />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-[#c3cbe4]"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}