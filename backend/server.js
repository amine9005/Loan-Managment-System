import express from "express";
import router from "./routes/root.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import corsOptions from "./config/corsOptions.js"

const app = express();
const PORT  = process.env.PORT || 5200

app.use(logger);

app.use(cors(corsOptions))

app.use(express.json());

app.use(cookieParser());


app.use('/api/v1/loan_manager',router);

app.use('/',(req, res, next) =>{
    res.status(400).json({message:"api: /api/v1/loan_manager"})
});

app.use('*',(req, res, next) =>{
    res.status(404).json({error:"404 route not found"});
})

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})