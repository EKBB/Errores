import mongoose from "mongoose";
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import {test} from "./backend/controllers/alumnos.models";

dotenv.config()

mongoose.connect(process.env.db_2)
.then(()=>{
    console.log("Si jala")
})
.catch(error=>{
    console.log("no hay conexion")
})

const app = express()
app.use(cors())
app.listen(2000, () =>{
    console.log("si se escucha")
})

test()