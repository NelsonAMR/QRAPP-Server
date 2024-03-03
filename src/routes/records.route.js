import { Router } from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
} from "../controllers/records.controller.js";

const router = Router();

router.get("/records", getRecords);
router.post("/records", createRecord);
router.patch("/records/:id", updateRecord);

export default router;
