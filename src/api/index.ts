import express from 'express'
import scrapeAndInteractEndpoint from './scrapeAndInteractEndpoint'

const router = express.Router()

router.use('/scrape', scrapeAndInteractEndpoint)

export default router
