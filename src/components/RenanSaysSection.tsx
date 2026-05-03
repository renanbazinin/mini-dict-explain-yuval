import { renanSayings } from '../content/renanSays'

export function RenanSaysSection() {
  return (
    <div className="panel">
      <h2 className="renan-section-title">דברים שרנן מתכוון:</h2>
      <p className="renan-section-lead">
        תרחישים מהשטח — איך לפרק בעיה בצינור בלי ללכת לאיבוד.
      </p>
      <div className="renan-list">
        {renanSayings.map((item) => (
          <article key={item.id} className="renan-card">
            <h3 className="renan-situation">{item.situation}</h3>
            <p className="renan-body">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
