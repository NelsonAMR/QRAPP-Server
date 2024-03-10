import Record from "../models/record.model.js";
import Employee from "../models/employee.model.js";
import { ESP32_URI } from "../config.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createRecord = async (req, res) => {
  const { employee_id } = req.body;

  try {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const employee = await Employee.findOne({ employee_id });
    if (!employee) {
      await fetch(`${ESP32_URI}/?status=failure`, { signal });

      return res.status(404).json({ message: "Employee not found" });
    } else {
      await fetch(`${ESP32_URI}/?status=success`, { signal });
    }

    clearTimeout(timeoutId);

    const record = await Record.findOne({
      "employee.employee_id": employee_id,
    });

    if (!record || record.departure.length > 0) {
      const newRecord = await new Record({
        employee: {
          _id: employee._id,
          name: employee.name,
          email: employee.email,
          employee_id: employee.employee_id,
        },
        date: new Date(),
        entry: new Date(),
      }).save();

      if (!newRecord) {
        return res.status(404).json({ message: "Record not found" });
      }

      return res.json({ message: "Record created successfully" });
    }

    if (!record.departure.length) {
      await Record.findOneAndUpdate(
        { "employee.employee_id": employee_id },
        { departure: new Date() },
        { new: true }
      );

      return res.json({ message: "Record updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecord = async (req, res) => {
  const { employee_id } = req.body;

  try {
    const employee = await Employee.find({ employee_id });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const record = await Record.findByIdAndUpdate(
      req.params.id,
      { departure: new Date() },
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({ message: "Record updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
