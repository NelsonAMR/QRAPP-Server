import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";
import {
  createEmployee,
  deleteEmployee,
  getEmployeeByID,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", validateToken, getEmployees);
router.get("/employees/:id", validateToken, getEmployeeByID);
router.post("/employees", validateToken, createEmployee);
router.delete("/employees/:id", validateToken, deleteEmployee);
router.put("/employees/:id", validateToken, updateEmployee);

export default router;
