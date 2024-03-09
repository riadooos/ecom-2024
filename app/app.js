import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import morgan from "morgan";
import dbConnect from "../config/dbConnect.js";
import { globalErrhandler, notFound } from "../middelwares/globalErrhandler.js";
import userRoutes from "../routes/userRoute.js";
import productsRouter from "../routes/productRoute.js";
import categoriesRouter from "../routes/categoriesRouter.js";
import brandsRouter from "../routes/brandsRouter.js";
import colorRouter from "../routes/colorsRouter.js";
import reviewRouter from "../routes/reviewsRouter.js";
import ordersRouter from "../routes/ordersRouter.js";

//db connect
dbConnect();

const app = express();

app.use(cors());

//pass incoming data
app.use(express.json());

//routes
//Home route

//use morgan
app.use(morgan("tiny"));

//routes
//Home route
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/products/", productsRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/brands", brandsRouter);
app.use("/api/v1/colors", colorRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/orders", ordersRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

export default app;
