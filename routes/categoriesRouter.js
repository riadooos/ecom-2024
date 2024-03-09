import express from "express";
import {
  createCategoryCtrl,
  deleteCategoryCtrl,
  getAllCategoriesCtrl,
  getSingleCategoryCtrl,
  updateCategoryCtrl,
} from "../controllers/categoriesCtrl.js";
import { isLoggedIn } from "../middelwares/isLoggedIn.js";
import categoryFileUpload from "../config/categoryUpload.js";

const categoriesRouter = express.Router();

/*categoriesRouter.post(
  "/",
  isLoggedIn,
  catetgoryFileUpload.single("file"),
  createCategoryCtrl
);*/
categoriesRouter.get("/", getAllCategoriesCtrl);
categoriesRouter.get("/:id", getSingleCategoryCtrl);
categoriesRouter.delete("/:id", deleteCategoryCtrl);
categoriesRouter.put("/:id", updateCategoryCtrl);
categoriesRouter.post(
  "/add-category",
  isLoggedIn,
  categoryFileUpload.single("imgCategory"),
  createCategoryCtrl
);
export default categoriesRouter;
