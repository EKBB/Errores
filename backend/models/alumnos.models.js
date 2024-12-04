import { Schema, Model } from "mongoose";

const alumnoSchema = new Schema({
    name: String,
    age: Number
})

export const alumnoModel = new Model("alumnos", alumnoSchema)