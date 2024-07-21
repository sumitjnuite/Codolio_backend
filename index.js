import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from 'path';
import transactionRouter from "./routes/transaction.router.js"
const app = express();

app.use(cors());
app.use(cookieParser());
dotenv.config();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
const __dirname = path.resolve();


app.use('/api/transaction', transactionRouter);

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));

});


app.listen(4000)


