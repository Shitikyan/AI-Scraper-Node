import { scrapeQuotes } from '../services/scraperService'
import { sendToChatGPT } from '../services/openaiService'

export async function scrapeAndInteractWithChatGPT(url: string): Promise<string> {
  const articles = await scrapeQuotes(url)
  if (articles.length === 0) {
    return 'There is no info scraped'
  }

  const chatGPTResponse = await sendToChatGPT(articles)

  return chatGPTResponse
}
