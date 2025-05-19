import express from "express";
import { usuarioRoute } from "../src/routes/usuario.route"

const app = express()

app.use(express.json())
app.use("/api", usuarioRoute)
console.log("App iniciada");
export default app