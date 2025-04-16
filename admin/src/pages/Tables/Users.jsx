import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaSpinner } from "react-icons/fa";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Footer from "../../components/Footer";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    office: "",
    age: "",
    startDate: "",
    salary: "",
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State cho modal xóa
  const [recordToDelete, setRecordToDelete] = useState(null); // Lưu id bản ghi cần xóa

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        const formattedData = result.users.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          position: user.company?.title || "N/A",
          office: user.company?.department || "N/A",
          age: user.age,
          startDate: user.birthDate || "N/A",
          salary: `$${user.salary || Math.floor(Math.random() * 1000000).toLocaleString()}`,
        }));
        setData(formattedData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = (record = null) => {
    setCurrentRecord(record);
    setFormData(
      record || {
        name: "",
        position: "",
        office: "",
        age: "",
        startDate: "",
        salary: "",
      }
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRecord(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      if (currentRecord) {
        // Cập nhật data
        setData((prev) =>
          prev.map((item) =>
            item.id === currentRecord.id
              ? { ...item, ...formData, id: currentRecord.id }
              : item
          )
        );
      } else {
        // Thêm data mới ở đầu danh sách
        setData((prev) => [
          {
            ...formData,
            id: Math.max(...prev.map((item) => item.id), 0) + 1,
            salary: formData.salary.startsWith("$")
              ? formData.salary
              : `$${formData.salary}`,
            age: parseInt(formData.age) || 0,
          },
          ...prev,
        ]);
      }
      closeModal();
    } catch (err) {
      setError("Failed to process action");
    } finally {
      setActionLoading(false);
    }
  };

  const openDeleteModal = (id) => {
    setRecordToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setRecordToDelete(null);
  };

  const handleDelete = async () => {
    setActionLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      setData((prev) => prev.filter((item) => item.id !== recordToDelete));
      closeDeleteModal();
    } catch (err) {
      setError("Failed to delete data");
    } finally {
      setActionLoading(false);
    }
  };

  const getSortedData = () => {
    let sortedData = [...data];

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

  if (loading || actionLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#1a202c] bg-opacity-90 z-50">
        <div className="flex flex-col items-center gap-4">
          <FaSpinner className="text-blue-400 text-2xl animate-spin" />
          <span className="text-white text-base font-semibold tracking-wide poppins-regular">
            {loading ? "Đang tải dữ liệu..." : "Đang xử lý..."}
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

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

  const getPaginationRange = () => {
    const maxVisiblePages = 5;
    const range = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="text-white h-full">
      <div className="pt-8 sm:pt-12 px-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h1 className="text-sm sm:text-sm md:text-base poppins-semibold">
            DATA TABLES
          </h1>
          <div className="poppins-regular text-gray-400 text-xs">
            <a href="#" className="mr-2 text-white">
              Tables
            </a>
            <span className="text-[#a6b0cf]">/ Data Tables</span>
          </div>
        </div>
        <div className="flex justify-between gap-2 mb-4">
          <input
            type="text"
            placeholder={`${totalItems} records...`}
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 pl-3 w-full sm:w-96 border border-gray-600 outline-none bg-[#2a3042] rounded-sm text-xs sm:text-sm text-white placeholder-[#a6b0cf]"
          />
          <button
            onClick={() => openModal()}
            className="rounded bg-blue-500 px-2 py-1 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200 flex items-center gap-2"
          >
            <FaPlus />
            <span className="text-sm">Add New</span>
          </button>
        </div>
        <div className="bg-gray-800 overflow-hidden rounded-lg shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#2a3042] text-[#a6b0cf] text-xs sm:text-sm">
                  <th className="p-2 sm:p-3 whitespace-nowrap">
                    <span className="poppins-semibold text-xs">STT</span>
                  </th>
                  {[
                    { label: "NAME", key: "name" },
                    { label: "POSITION", key: "position" },
                    { label: "OFFICE", key: "office" },
                    { label: "AGE", key: "age" },
                    { label: "START DATE", key: "startDate" },
                    { label: "SALARY", key: "salary" },
                    { label: "ACTIONS", key: "actions" },
                  ].map((column) => (
                    <th
                      key={column.key}
                      className="p-2 sm:p-3 cursor-pointer whitespace-nowrap"
                      onClick={
                        column.key !== "actions"
                          ? () => handleSort(column.key)
                          : undefined
                      }
                    >
                      <div className="flex justify-between items-center">
                        <span className="poppins-semibold text-xs">
                          {column.label}
                        </span>
                        {column.key !== "actions" && (
                          <span className="inline-block align-middle">
                            {sortConfig.key === column.key &&
                            sortConfig.direction === "descending" ? (
                              <TiArrowSortedUp />
                            ) : (
                              <TiArrowSortedDown />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, index) => (
                  <tr
                    key={row.id}
                    className="bg-[#2a3042] border-t border-gray-700 text-xs text-[#a6b0cf] hover:bg-gray-700"
                  >
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {startIndex + index + 1}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">{row.name}</td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.position}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.office}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">{row.age}</td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.startDate}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.salary}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      <div className="flex gap-2 text-sm sm:text-base">
                        <button
                          onClick={() => openModal(row)}
                          className="text-blue-500 hover:text-blue-400"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => openDeleteModal(row.id)}
                          className="text-red-500 hover:text-red-400"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mt-4 mb-6 text-gray-400 gap-2">
          <span className="text-xs text-[#a6b0cf]">
            Showing {Math.min(endIndex, totalItems)} of {totalItems} results
          </span>
          <div className="flex space-x-1 sm:space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            >
              <IoIosArrowBack />
            </button>
            {getPaginationRange().map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm ${
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
              className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-[#2a3042] rounded-lg w-full max-w-md flex flex-col max-h-[80vh] mt-10">
            <div className="p-4 sm:p-6 border-b border-gray-600">
              <h2 className="text-lg font-semibold text-white">
                {currentRecord ? "Edit Data" : "Add New Data"}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#a6b0cf] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-[#1a202c] border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#a6b0cf] mb-1">
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-[#1a202c] border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#a6b0cf] mb-1">
                      Office
                    </label>
                    <input
                      type="text"
                      name="office"
                      value={formData.office}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-[#1a202c] border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#a6b0cf] mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-[#1a202c] border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#a6b0cf] mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-[#1a202c] border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 [&::-webkit-calendar-picker-indicator]:invert"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#a6b0cf] mb-1">
                      Salary
                    </label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-[#1a202c] border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="p-4 sm:p-6 border-t border-gray-600 flex justify-end gap-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors duration-200 flex items-center gap-2"
              >
                {currentRecord ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Delete Confirmation */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-[#2a3042] rounded-lg w-full max-w-sm p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Xác nhận xóa
            </h2>
            <p className="text-sm text-[#a6b0cf] mb-6">
              Bạn có chắc chắn muốn xóa dữ liệu này không?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm transition-colors duration-200 flex items-center gap-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
}
