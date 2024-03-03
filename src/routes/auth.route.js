import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
} from "../controllers/auth.controller.js";

import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.get("/profile", validateToken, profile);
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
