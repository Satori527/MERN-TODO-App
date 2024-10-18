//import dotenv from "../.env";
import { app } from "../Server/src/app.js";
import connectDB from "../Server/src/db/index.js";

// dotenv.config({
//     path: './env'
// })

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !! ", err);
})

app.get('/', function(req, res, next) {
    res.send("Hello world");
});
