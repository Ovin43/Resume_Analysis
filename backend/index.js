import express from 'express'
import cors from "cors";
import fileRoutes from "./src/routes/file.routes.js";

const app=express();

app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:5173"
    })
)


app.use("/",fileRoutes);


app.listen(5003,()=>{
    console.log("server is running in port 5003")
})