import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    employee_id: "",
    email: "",
    phone: "",
    department: "",
    date_of_joining: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        `${import.meta.env.VITE_API_URL}/register`, // Use the environment variable
        formData
      );
      toast.success(response.data.message);
    } catch (error) {
      if (error.response?.status === 409) {
        return toast.error(error.response.data.message);
      }
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className=" bg-gray-100 shadow-lg rounded-lg p-90 max-w-md w-full">
      <form onSubmit={handleSubmit} className="px-4 my-20 max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-6 ml-12">Register Here👇</h1>
        </div>
        <div>
          <label htmlFor="name" className="text-2xl">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="First and Last Name"
            className="border border-gray-400 rounded-md inline-block px-4 py-2 ml-3 "

          />
        </div>
        <div>
          <label htmlFor="employee_id" className="text-2xl">Employee ID:</label>
          <input
            type="text"
            id="employee_id"
            name="employee_id"
            onChange={handleChange}
            maxLength="10"
            placeholder="Unique ID"
            className="border border-gray-400 rounded-md inline-block px-4 py-2 ml-3  "
          />
        </div>
        <div>
          <label htmlFor="email" className="text-2xl">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="example@example.com"
            className="border border-gray-400 rounded-md inline-block px-4 py-2 ml-3  "
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-2xl">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            maxLength="10"
            placeholder="10-digit number"
            className="border border-gray-400 rounded-md inline-block px-4 py-2 ml-3  "
          />
        </div>
        <div>
          <label htmlFor="department" className="text-2xl">Department:</label>
          <select id="department" name="department" onChange={handleChange} className="border border-gray-400 rounded-md inline-block px-4 py-2 ml-3">
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <label htmlFor="date_of_joining" className="text-2xl">Date of Joining</label>
          <input
            type="date"
            id="date_of_joining"
            name="date_of_joining"
            max={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            className="border border-gray-400 rounded-md inline-block px-4 py-2 ml-3 "
          />
        </div>
        <div>
          <label htmlFor="role" className="text-2xl">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            onChange={handleChange}
            placeholder="e.g., Manager, Developer"
            className="border border-gray-400 rounded-md inline-block px-4 py-2 ml-3 "
          />
        </div>
        <div className="m-14">
          <button type="submit" className="btn btn-success">Submit</button>
          <button type="reset" class="btn btn-warning ml-2">Reset</button>
          <button type="submit" onClick={() => navigate("/read")} className="btn btn-success ml-2">Show Employee</button>
        </div>
      </form>
      <ToastContainer />
    </div>
    </div>
    
  );
};

export default Create;
