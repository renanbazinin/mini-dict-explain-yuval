import type { ReactNode } from 'react'

type LayoutProps = {
  navigation: ReactNode
  children: ReactNode
}

export function Layout({ navigation, children }: LayoutProps) {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        דלג לתוכן
      </a>
      <header className="site-header">
        <h1 className="site-title">מיני־מילון טכנולוגיה</h1>
        <p className="site-sub">
          רנן וצינור בראש, ומתפריט &quot;עוד&quot;: מילון, ביטויים ושאלות ותשובות
        </p>
        {navigation}
      </header>
      <main id="main-content">{children}</main>
    </div>
  )
}
