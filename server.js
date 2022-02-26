import express from "express";
import { check } from "express-validator";
import { validationResult } from "express-validator";
import { router as coffeeShopController } from "./controllers/coffee-controller.js";


const app = express()

app.use(express.json())

app.use('/', coffeeShopController)
app.listen(5000)
console.log("Server is listening on port 5000")