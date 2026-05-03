export type GlossaryItem = {
  id: string
  title: string
  aliases?: string[]
  definition: string
  relatedIds?: string[]
}

export type QuoteCategory =
  | 'פריסה'
  | 'איכות'
  | 'אבטחה/אספקה'
  | 'ביצועים'
  | 'ארכיטקטורה'

export const QUOTE_CATEGORIES: QuoteCategory[] = [
  'פריסה',
  'איכות',
  'אבטחה/אספקה',
  'ביצועים',
  'ארכיטקטורה',
]

export type QuoteItem = {
  phrase: string
  pmHint: string
  category: QuoteCategory
}

export type PipelineStep = {
  title: string
  body: string
}
