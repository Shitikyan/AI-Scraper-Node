import express, { Request, Response } from 'express'
import { scrapeAndInteractWithChatGPT } from '../controllers/scraperController'

const router = express.Router()

router.get('/scrape-and-interact', async (req: Request, res: Response) => {
  try {
    const result = await scrapeAndInteractWithChatGPT()
    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
