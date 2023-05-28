import express from "express";


const router = express.Router()

router.get('^/$|/index(.html)?', (req, res) => {
    res.status(200).json({message:"Welcome"})
})

export default router