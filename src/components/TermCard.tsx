import type { GlossaryItem } from '../content/types'

type TermCardProps = {
  term: GlossaryItem
  relatedTitles: string[]
}

export function TermCard({ term, relatedTitles }: TermCardProps) {
  return (
    <article className="term-card">
      <h2>{term.title}</h2>
      <p>{term.definition}</p>
      {term.aliases && term.aliases.length > 0 ? (
        <p className="term-aliases">נקרא גם: {term.aliases.join(' · ')}</p>
      ) : null}
      {relatedTitles.length > 0 ? (
        <div className="related" aria-label="מונחים קשורים">
          {relatedTitles.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  )
}
