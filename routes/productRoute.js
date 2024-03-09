import express from "express";
import {
  createProductCtrl,
  deleteProductCtrl,
  getProductCtrl,
  getProductsCtrl,
  updateProductCtrl,
} from "../controllers/productCtrl.js";
import { isLoggedIn } from "../middelwares/isLoggedIn.js";
import uploadProducts from "../config/productUploads.js";
import isAdmin from "../middelwares/isAdmin.js";

const productsRouter = express.Router();

productsRouter.get("/", isLoggedIn, isAdmin, getProductsCtrl);
productsRouter.post(
  "/add-product",
  isLoggedIn,
  uploadProducts.array("imgProducts"), // sur postman mettre imgProducts c le key des images
  createProductCtrl
);
productsRouter.get("/:id", getProductCtrl);
productsRouter.put("/:id", updateProductCtrl);
productsRouter.delete("/:id/delete", deleteProductCtrl);
export default productsRouter;
