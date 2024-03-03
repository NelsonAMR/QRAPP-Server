import Employee from "../models/employee.model.js";
import axios from "axios";
import createQR from "../utils/createQR.js";
import sendQR from "../utils/sendQR.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json(employees);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getEmployeeByID = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const { name, email, employee_id } = req.body;

  try {
    const newEmployee = await new Employee({
      name,
      email,
      employee_id,
    }).save();

    const qr = await createQR(employee_id);
    await sendQR(qr);

    res.json(newEmployee);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req,
      body,
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee updated successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
