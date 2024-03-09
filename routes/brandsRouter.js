import exppress from "express";
import {
  createBrandCtrl,
  deleteBrandCtrl,
  getAllBrandsCtrl,
  getSingleBrandCtrl,
  updateBrandCtrl,
} from "../controllers/brandsCtrl.js";
import { isLoggedIn } from "../middelwares/isLoggedIn.js";
//import isAdmin from "../middlewares/isAdmin.js";

const brandsRouter = exppress.Router();

brandsRouter.post("/add-brand", isLoggedIn, createBrandCtrl);
brandsRouter.get("/", getAllBrandsCtrl);
brandsRouter.get("/:id", getSingleBrandCtrl);
brandsRouter.delete("/:id", isLoggedIn, deleteBrandCtrl);
brandsRouter.put("/:id", isLoggedIn, updateBrandCtrl);

export default brandsRouter;
