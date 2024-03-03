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

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeByID);
router.post("/employees", createEmployee);
router.delete("/employees/:id", deleteEmployee);
router.put("/employees/:id", updateEmployee);

export default router;
