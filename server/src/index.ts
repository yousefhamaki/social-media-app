import express, { Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "reflect-metadata";
import Config from "./shared/services/config.service";
import Handler from "./shared/services/handler.service";
import router from "./routes/main.routes";
import "reflect-metadata";
// import bodyParser from "body-parser";

const app: Application = express();
const config = new Config();
const port = config.port;
const handler = new Handler();

//middleware to parse incoming request
app.use(express.json());

//using body parser
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//http request loggen middleware
app.use(morgan("common"));
//http security middleware
app.use(helmet());
// Apply the rate limiting middleware to all requests
app.use(
  rateLimit({
    windowMs: config.TimeLimit * (60 * 1000),
    max: config.RequestLimit,
    standardHeaders: true,
    legacyHeaders: false,
    message: config.MessageLimit,
  })
);

if (config.ActiveHome) {
  app.get("/", handler.Homeresponse);
}

app.use(router);

//404 Request
app.use(handler.ErrorResponse);
app.use(handler.HandleError);

app.listen(port, () => console.log(`Server is starting on port ${port}`));
