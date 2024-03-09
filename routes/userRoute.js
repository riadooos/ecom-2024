import express from "express";
import {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
} from "../controllers/userCtrl.js";
import { isLoggedIn } from "../middelwares/isLoggedIn.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
//userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddresctrl);*
export default userRoutes;
