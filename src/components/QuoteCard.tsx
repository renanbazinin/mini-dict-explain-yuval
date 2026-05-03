import type { QuoteItem } from '../content/types'

type QuoteCardProps = {
  quote: QuoteItem
}

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <article className="quote-card">
      <p className="quote-phrase">{quote.phrase}</p>
      <p className="quote-hint">{quote.pmHint}</p>
      <span className="quote-cat">{quote.category}</span>
    </article>
  )
}
