import express, {Application, Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";

import {router as userRoutes} from "./routes/user.routes"
import {router as heapSortRoutes} from './routes/heapSort.routes'

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/heapSort", heapSortRoutes);
app.use("/users", userRoutes);
app.use("/", (req: Request, res: Response, next: NextFunction): void => {
    res.json({message: "Allo! Catch-all route."})
})

export default app;