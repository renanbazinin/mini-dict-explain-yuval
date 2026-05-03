import { qaItems } from '../content/qa'

export function QASection() {
  return (
    <div className="panel">
      <h2 className="qa-section-title">שאלות ותשובות</h2>
      <p className="qa-section-lead">
        שאלות שחוזרות בין מוצר להנדסה — תשובות קצרות בלי להסתבך.
      </p>
      <div className="qa-list">
        {qaItems.map((item) => (
          <article key={item.id} className="qa-card">
            <h3 className="qa-question">{item.question}</h3>
            <p className="qa-answer">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
