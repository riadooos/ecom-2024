import express from "express";
import {
  createOrderCtrl,
  getAllordersCtrl,
  getOrderStatsCtrl,
  getSingleOrderCtrl,
  updateOrderCtrl,
} from "../controllers/ordersCtrl.js";
import { isLoggedIn } from "../middelwares/isLoggedIn.js";

const ordersRouter = express.Router();

ordersRouter.post("/new-order", isLoggedIn, createOrderCtrl);
ordersRouter.get("/", isLoggedIn, getAllordersCtrl);
ordersRouter.put("/update/:id", isLoggedIn, updateOrderCtrl);
ordersRouter.get("/:id", isLoggedIn, getSingleOrderCtrl);
ordersRouter.get("/sales/stats", isLoggedIn, getOrderStatsCtrl);

export default ordersRouter;

/*


;*/
