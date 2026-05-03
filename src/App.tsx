import { useMemo, useState } from 'react'
import { AppNav, type AppTabId } from './components/AppNav'
import { Layout } from './components/Layout'
import { PipelineSteps } from './components/PipelineSteps'
import { QASection } from './components/QASection'
import { RenanSaysSection } from './components/RenanSaysSection'
import { QuoteCard } from './components/QuoteCard'
import { SearchBar } from './components/SearchBar'
import { TermCard } from './components/TermCard'
import { quoteItems } from './content/quotes'
import { glossaryTerms, termTitleById } from './content/terms'
import type { QuoteCategory } from './content/types'
import { QUOTE_CATEGORIES } from './content/types'

function normalize(s: string) {
  return s.trim().toLowerCase()
}

function termMatchesQuery(query: string, term: (typeof glossaryTerms)[0]) {
  if (!query) return true
  const q = normalize(query)
  const blob = [term.title, term.definition, ...(term.aliases ?? [])]
    .join('\n')
    .toLowerCase()
  return blob.includes(q)
}

export default function App() {
  const [tab, setTab] = useState<AppTabId>('renan')
  const [search, setSearch] = useState('')
  const [quoteCategory, setQuoteCategory] = useState<QuoteCategory | null>(
    null,
  )

  const filteredTerms = useMemo(
    () => glossaryTerms.filter((t) => termMatchesQuery(search, t)),
    [search],
  )

  const filteredQuotes = useMemo(
    () =>
      quoteItems.filter((q) =>
        quoteCategory ? q.category === quoteCategory : true,
      ),
    [quoteCategory],
  )

  return (
    <Layout
      navigation={<AppNav tab={tab} onTabChange={setTab} />}
    >
      {tab === 'glossary' ? (
        <div className="panel">
          <SearchBar
            id="glossary-search"
            value={search}
            onChange={setSearch}
            label="חיפוש במילון"
          />
          <div className="term-list">
            {filteredTerms.length === 0 ? (
              <p className="empty">לא נמצאו מונחים התואמים לחיפוש.</p>
            ) : (
              filteredTerms.map((term) => (
                <TermCard
                  key={term.id}
                  term={term}
                  relatedTitles={(term.relatedIds ?? [])
                    .map((id) => termTitleById(id))
                    .filter((x): x is string => Boolean(x))}
                />
              ))
            )}
          </div>
        </div>
      ) : null}

      {tab === 'quotes' ? (
        <div className="panel">
          <div className="quote-filters" role="group" aria-label="סינון לפי נושא">
            <button
              type="button"
              className="filter-btn"
              aria-pressed={quoteCategory === null}
              onClick={() => setQuoteCategory(null)}
            >
              הכול
            </button>
            {QUOTE_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className="filter-btn"
                aria-pressed={quoteCategory === c}
                onClick={() =>
                  setQuoteCategory((prev) => (prev === c ? null : c))
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div className="quote-list">
            {filteredQuotes.length === 0 ? (
              <p className="empty">אין פריטים בקטגוריה זו.</p>
            ) : (
              filteredQuotes.map((q, idx) => (
                <QuoteCard key={`${idx}-${q.phrase}`} quote={q} />
              ))
            )}
          </div>
        </div>
      ) : null}

      {tab === 'pipeline' ? <PipelineSteps /> : null}

      {tab === 'renan' ? <RenanSaysSection /> : null}

      {tab === 'qa' ? <QASection /> : null}
    </Layout>
  )
}
