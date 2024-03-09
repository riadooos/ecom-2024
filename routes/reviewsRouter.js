import express from "express";
import { isLoggedIn } from "../middelwares/isLoggedIn.js";
import { createReviewCtrl } from "../controllers/reviewsCrtl.js";

const reviewRouter = express.Router();

reviewRouter.post("/:productID", isLoggedIn, createReviewCtrl);

export default reviewRouter;
