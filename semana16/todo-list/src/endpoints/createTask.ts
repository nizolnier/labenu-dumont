import express, { Router, Request, Response } from 'express'
import cors from 'cors'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.put('/task', (req: Request, res: Response) => {

})