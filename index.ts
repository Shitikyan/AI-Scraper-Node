import express from 'express'
import { scrapeAndInteractWithChatGPT } from './src/controllers/scraperController'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.post('/api/scrape-and-interact', async (req, res) => {
  try {
    const { url } = req.body
    if (!url) {
      return res.status(400).json({ error: 'URL is required in the request body' })
    }

    const article = await scrapeAndInteractWithChatGPT(url)

    res.status(200).json({ article })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
