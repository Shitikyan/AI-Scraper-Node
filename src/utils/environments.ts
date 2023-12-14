import { config } from 'dotenv'
config()

const OPENAI_API_KEY =
  process.env.OPENAI_API_KEY || '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'
const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || 'org-D8qg0gdjDbnGgIZzWX1WeUdc'

export { OPENAI_API_KEY, OPENAI_ORGANIZATION }
