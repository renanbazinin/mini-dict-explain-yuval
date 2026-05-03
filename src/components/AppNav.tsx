import { useEffect, useRef, useState } from 'react'

export type AppTabId = 'renan' | 'pipeline' | 'glossary' | 'quotes' | 'qa'

const primaryTabs: {
  id: Extract<AppTabId, 'renan' | 'pipeline'>
  label: string
  ariaLabel?: string
}[] = [
  { id: 'renan', label: 'רנן', ariaLabel: 'דברים שרנן מתכוון' },
  { id: 'pipeline', label: 'צינור' },
]

const moreTabs: { id: Exclude<AppTabId, 'renan' | 'pipeline'>; label: string }[] =
  [
    { id: 'glossary', label: 'מילון' },
    { id: 'quotes', label: 'ביטויים' },
    { id: 'qa', label: 'שאלות ותשובות' },
  ]

function isMoreTab(tab: AppTabId): boolean {
  return moreTabs.some((t) => t.id === tab)
}

type AppNavProps = {
  tab: AppTabId
  onTabChange: (t: AppTabId) => void
}

export function AppNav({ tab, onTabChange }: AppNavProps) {
  const [moreOpen, setMoreOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!moreOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMoreOpen(false)
    }

    const onPointerDown = (e: PointerEvent) => {
      const el = wrapRef.current
      if (el && !el.contains(e.target as Node)) setMoreOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [moreOpen])

  const moreActive = isMoreTab(tab)

  return (
    <nav className="nav-bar" aria-label="ניווט באתר">
      <div
        className="nav-primary"
        role="tablist"
        aria-label="תוכן מרכזי"
      >
        {primaryTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            className="tab tab--primary"
            aria-selected={tab === t.id}
            aria-label={t.ariaLabel}
            onClick={() => {
              onTabChange(t.id)
              setMoreOpen(false)
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="nav-more-wrap" ref={wrapRef}>
        <button
          type="button"
          className={
            'tab tab--more' + (moreActive ? ' tab--more-active' : '')
          }
          aria-expanded={moreOpen}
          aria-haspopup="menu"
          aria-controls="nav-more-menu"
          id="nav-more-button"
          onClick={() => setMoreOpen((o) => !o)}
        >
          עוד
          <span className="nav-more-chevron" aria-hidden>
            {moreOpen ? '▲' : '▼'}
          </span>
        </button>
        {moreOpen ? (
          <ul
            id="nav-more-menu"
            className="nav-more-panel"
            role="menu"
            aria-labelledby="nav-more-button"
          >
            {moreTabs.map((t) => (
              <li key={t.id} role="none">
                <button
                  type="button"
                  role="menuitem"
                  className={
                    'nav-more-item' + (tab === t.id ? ' nav-more-item--current' : '')
                  }
                  onClick={() => {
                    onTabChange(t.id)
                    setMoreOpen(false)
                  }}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </nav>
  )
}
