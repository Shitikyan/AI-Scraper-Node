import axios from 'axios'
import cheerio from 'cheerio'

export async function scrapeQuotes(url: string): Promise<string[]> {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    const quotes: string[] = []
    $('h1 , h2 , h3 , h4 , p').each((index, element) => {
      const quote = $(element).text().trim()
      quotes.push(quote)
    })
    return quotes
  } catch (error) {
    console.error('Error occurred during scraping:', error)
    return []
  }
}
