import { scrapeAndInteractWithChatGPT } from './src/controllers/scraperController'

scrapeAndInteractWithChatGPT().then((article) => {
  console.log('Scraped Article:', article)
})
