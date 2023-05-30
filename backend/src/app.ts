import express, {Application} from 'express';
import cors from 'cors'
import corsOptions from './config/corsOptions';
import router from './routes/router';

const app:Application = express();

app.use(express.json())
app.use(cors(corsOptions))

app.use("/api/v1/loan_manager", router)

app.use("*",(req,res,next)=>{
    res.status(404).json({
        error:"404 Route Not Found"
    })
})

export default app;

