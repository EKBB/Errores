import { alumnoModel } from "../models/alumnos.models";

alumnoModel.create({
    name: "Nuncio",
    age: "12"
})

export const test = () => {
    console.log("si se crea")
}