import express from "express";

import { isLoggedIn } from "../middelwares/isLoggedIn.js";
import {
  createColorCtrl,
  deleteColorCtrl,
  getAllColorsCtrl,
  getSingleColorCtrl,
  updateColorCtrl,
} from "../controllers/colorsCtrl.js";
//import isAdmin from "../middlewares/isAdmin.js";

const colorRouter = express.Router();

colorRouter.post("/", isLoggedIn, createColorCtrl);
colorRouter.get("/", getAllColorsCtrl);
colorRouter.get("/:id", getSingleColorCtrl);
colorRouter.delete("/:id", isLoggedIn, deleteColorCtrl);
colorRouter.put("/:id", isLoggedIn, updateColorCtrl);

export default colorRouter;
