import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials: true
}))

app.use(express.json({limit: "32kb"}))
app.use(express.urlencoded({extended:true, limit:"32kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//routes
//import eventRouter from './routes/event.routes.js';
import taskRouter from './routes/task.routes.js';
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/users", userRouter)
app.use("/api/tasks", taskRouter)

export { app };

