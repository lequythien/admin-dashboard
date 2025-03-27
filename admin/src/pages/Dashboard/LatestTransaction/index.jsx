import React, { useState } from "react";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import Img1 from "../LatestTransaction/images/img-products.png";
import Img2 from "../LatestTransaction/images/img-products2.png";

// Transaction data with added products field
const transactions = [
  {
    orderId: "#SK2545",
    billingName: "Jacob Hunter",
    date: "04 Oct, 2019",
    total: "$392",
    paymentStatus: "Paid",
    paymentMethod: "Paypal",
    products: [
      { name: "Wireless Headphone (Black)", price: "$225", quantity: 1 },
      { name: "Hoodie (Blue)", price: "$145", quantity: 1 },
    ],
  },
  {
    orderId: "#SK2544",
    billingName: "Ronald Taylor",
    date: "04 Oct, 2019",
    total: "$404",
    paymentStatus: "Refund",
    paymentMethod: "Visa",
    products: [
      { name: "Wireless Headphone (Black)", price: "$225", quantity: 1 },
      { name: "Hoodie (Blue)", price: "$145", quantity: 1 },
    ],
  },
  {
    orderId: "#SK2543",
    billingName: "Barry Dick",
    date: "05 Oct, 2019",
    total: "$412",
    paymentStatus: "Paid",
    paymentMethod: "Mastercard",
    products: [
      { name: "Wireless Headphone (Black)", price: "$225", quantity: 1 },
      { name: "Hoodie (Blue)", price: "$145", quantity: 1 },
    ],
  },
  {
    orderId: "#SK2542",
    billingName: "Juan Mitchell",
    date: "06 Oct, 2019",
    total: "$384",
    paymentStatus: "Paid",
    paymentMethod: "Paypal",
    products: [
      { name: "Wireless Headphone (Black)", price: "$225", quantity: 1 },
      { name: "Hoodie (Blue)", price: "$145", quantity: 1 },
    ],
  },
  {
    orderId: "#SK2541",
    billingName: "Jamal Burnett",
    date: "07 Oct, 2019",
    total: "$380",
    paymentStatus: "Chargeback",
    paymentMethod: "Visa",
    products: [
      { name: "Wireless Headphone (Black)", price: "$225", quantity: 1 },
      { name: "Hoodie (Blue)", price: "$145", quantity: 1 },
    ],
  },
  {
    orderId: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    paymentStatus: "Paid",
    paymentMethod: "Mastercard",
    products: [
      { name: "Wireless Headphone (Black)", price: "$225", quantity: 1 },
      { name: "Hoodie (Blue)", price: "$145", quantity: 1 },
    ],
  },
];

// Payment method icons
const paymentMethodIcons = {
  Paypal: <FaCcPaypal />,
  Visa: <FaCcVisa />,
  Mastercard: <FaCcMastercard />,
};

// Modal Component
const OrderDetailsModal = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

  const subtotal = transaction.products.reduce(
    (sum, product) =>
      sum + parseFloat(product.price.replace("$", "")) * product.quantity,
    0
  );

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-2 sm:px-0"
      onClick={handleBackgroundClick}
    >
      <div
        className={`bg-[#2a3042] p-4 sm:p-6 rounded-sm shadow-lg w-full max-w-[90%] sm:max-w-md text-white transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base sm:text-lg font-semibold">Order Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 text-lg"
          >
            ✕
          </button>
        </div>

        <hr className="border-gray-600 mb-4" />

        {/* Order Info */}
        <div className="mb-4 sm:mb-6 text-xs sm:text-sm">
          <p className="text-gray-400 mb-2">
            Product ID:
            <span className="text-blue-400 ml-1">{transaction.orderId}</span>
          </p>
          <p className="text-gray-400">
            Billing Name:
            <span className="text-blue-400 ml-1">
              {transaction.billingName}
            </span>
          </p>
        </div>

        {/* Product List */}
        <div className="mb-4 sm:mb-6">
          <div className="flex text-xs sm:text-sm text-gray-400 mb-4">
            <span className="w-[30%] sm:w-[25%] text-left">Product</span>
            <span className="w-[40%] sm:w-[50%] text-left">Product Name</span>
            <span className="w-[30%] sm:w-[25%] text-right">Price</span>
          </div>

          {transaction.products.map((product, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center mb-4">
                <div className="w-[30%] sm:w-[25%]">
                  <img
                    src={product.name.includes("Headphone") ? Img1 : Img2}
                    alt={product.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded"
                  />
                </div>
                <div className="w-[40%] sm:w-[50%] mx-2 sm:mx-4">
                  <p className="text-xs sm:text-sm font-medium">
                    {product.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    {product.price} x {product.quantity}
                  </p>
                </div>
                <div className="w-[30%] sm:w-[25%] text-right">
                  <p className="text-xs sm:text-sm font-medium">
                    $
                    {(
                      parseFloat(product.price.replace("$", "")) *
                      product.quantity
                    ).toFixed(0)}
                  </p>
                </div>
              </div>
              {index < transaction.products.length - 1 && (
                <hr className="border-gray-600 mb-4" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Summary */}
        <div className="border-t border-gray-600 pt-4">
          <div className="flex justify-between text-xs sm:text-sm mb-3">
            <span className="w-[70%] text-gray-400">Sub Total:</span>
            <span className="w-[30%] text-right">${subtotal.toFixed(0)}</span>
          </div>
          <hr className="border-gray-600 mb-3" />
          <div className="flex justify-between text-xs sm:text-sm mb-3">
            <span className="w-[70%] text-gray-400">Shipping:</span>
            <span className="w-[30%] text-right">Free</span>
          </div>
          <hr className="border-gray-600 mb-3" />
          <div className="flex justify-between text-xs sm:text-sm font-semibold mb-3">
            <span className="w-[70%]">Total:</span>
            <span className="w-[30%] text-right">
              ${transaction.total.replace("$", "")}
            </span>
          </div>
          <hr className="border-gray-600 mb-3" />
        </div>

        {/* Close Button */}
        <div className="mt-4 sm:mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-3 sm:px-4 py-1.5 bg-gray-600 text-white rounded hover:bg-gray-700 text-xs sm:text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Latest Transaction Component
const LatestTransaction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#2a3042] p-4 sm:p-6 rounded-md">
        <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
          Latest Transaction
        </h2>
        <div className="relative overflow-x-auto">
          <div className="custom-scrollbar-container overflow-x-auto custom-scrollbar">
            <table className="w-full text-left table-auto min-w-[800px]">
              <thead>
                <tr className="text-gray-400 bg-[#32394e] text-[10px] sm:text-xs md:text-sm uppercase whitespace-nowrap">
                  <th className="p-2 sm:p-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 border border-gray-600 rounded-sm text-blue-500 bg-transparent"
                    />
                  </th>
                  <th className="p-2 sm:p-3">Order ID</th>
                  <th className="p-2 sm:p-3">Billing Name</th>
                  <th className="p-2 sm:p-3">Date</th>
                  <th className="p-2 sm:p-3">Total</th>
                  <th className="p-2 sm:p-3">Payment Status</th>
                  <th className="p-2 sm:p-3">Payment Method</th>
                  <th className="p-2 sm:p-3">View Details</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <React.Fragment key={index}>
                    <tr className="hover:bg-[#32394e] text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                      <td className="p-2 sm:p-3">
                        <input
                          type="checkbox"
                          className="form-checkbox h-3 w-3 border border-gray-600"
                        />
                      </td>
                      <td className="p-2 sm:p-3 text-blue-400 font-medium">
                        {transaction.orderId}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-300">
                        {transaction.billingName}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-300">
                        {transaction.date}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-300">
                        {transaction.total}
                      </td>
                      <td className="p-2 sm:p-3">
                        <span
                          className={`px-1 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold uppercase ${
                            transaction.paymentStatus === "Paid"
                              ? "text-[#34C38F] bg-[#34C38F2e]"
                              : transaction.paymentStatus === "Refund"
                              ? "text-[#f1b44c] bg-[#f1b44c2e]"
                              : "text-[#f46a6a] bg-[#f46a6a2e]"
                          }`}
                        >
                          {transaction.paymentStatus}
                        </span>
                      </td>
                      <td className="p-2 sm:p-3 flex items-center gap-1 sm:gap-2 text-gray-300">
                        <span className="text-base sm:text-lg">
                          {paymentMethodIcons[transaction.paymentMethod]}
                        </span>
                        <span>{transaction.paymentMethod}</span>
                      </td>
                      <td className="p-2 sm:p-3">
                        <button
                          onClick={() => handleViewDetails(transaction)}
                          className="px-2 sm:px-3 md:px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-[10px] sm:text-xs font-medium"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    {index < transactions.length - 1 && (
                      <tr>
                        <td colSpan="8" className="p-0">
                          <hr className="border-t border-[#32394e]" />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        transaction={selectedTransaction}
      />
    </div>
  );
};

export default LatestTransaction;