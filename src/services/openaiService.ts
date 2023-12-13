import OpenAI from 'openai'
import { OPENAI_API_KEY, OPENAI_ORGANIZATION } from '../utils/environments'

const openai = new OpenAI({
  organization: OPENAI_ORGANIZATION,
  apiKey: OPENAI_API_KEY,
})

async function main(articles: string[]): Promise<string> {
  const maxLength = 15000
  const combinedArticles = articles.join(' ,')
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `What is this web page about? ${combinedArticles.substring(0, maxLength)}`,
      },
    ],
    stream: true,
  })
  let response = ''
  for await (const chunk of stream) {
    response = response.concat(chunk.choices[0]?.delta?.content || '')
  }
  return response
}

export async function sendToChatGPT(articles: string[]): Promise<string> {
  try {
    return main(articles)
  } catch (error) {
    console.error('Error occurred while interacting with OpenAI:', error)
    return 'Error occurred while interacting with ChatGPT'
  }
}
