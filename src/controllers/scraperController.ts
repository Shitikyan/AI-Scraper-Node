import { scrapeQuotes } from '../services/scraperService'
import { sendToChatGPT } from '../services/openaiService'

export async function scrapeAndInteractWithChatGPT(): Promise<string> {
  const articles = await scrapeQuotes()

  if (articles.length === 0) {
    return 'There is no info scraped'
  }
  const chatGPTResponse = await sendToChatGPT(articles)

  return chatGPTResponse
}
