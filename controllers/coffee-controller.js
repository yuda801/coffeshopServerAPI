import express from "express";
import coffeeshopBL from "../business-logic/coffeeshop-bl.js";

const router = express.Router()
const baseUrl = '/api'


router.get(`${baseUrl}/coffeeshop`, (req, res) => {
    let result = coffeeshopBL.getAll()
    res.send(result)
})

router.get(`${baseUrl}/coffeeshop/:id`, (req, res) => {
    let id = +req.params.id
    let result = coffeeshopBL.getById(id)
    res.send(result)
})

router.post(`${baseUrl}/coffeeshop`, (req, res) => {
    let newCoffee = req.body
    let result = coffeeshopBL.addCoffee(newCoffee)
    res.send(result)
})

export {
    router
}