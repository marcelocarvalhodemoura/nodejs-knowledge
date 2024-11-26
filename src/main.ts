import express from "express";
import cors from "cors";

import { arrayFindController } from "./controllers/array-find.controller";
import { arrayFilterController } from "./controllers/array-filter.controller";
import { arrayMapController } from "./controllers/array-map.controller";

/**
 * Create an express app instance
 */
const app = express();
app.use(cors());
app.use(express.json());

/**
 * Middleware example to log request details
 */
const requestLogger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    next(); // Important: calls the next middleware or route handler
};

/**
 * Define the route for array-find
 */
app.post('/array-find', requestLogger, async (req, res) => {
    await arrayFindController(req, res);
});

app.post('/array-filter', requestLogger, async (req, res) => {
    await arrayFilterController(req, res);
});

app.post('/array-map', requestLogger, async (req, res) => {
    await arrayMapController(req, res);
});
/**
 * Start the server on port 3000
 */
app.listen(3000, () => {
    console.log('Server started on port 3000');
});