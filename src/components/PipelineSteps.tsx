import { pipelineIntro, pipelineSteps } from '../content/pipeline'

export function PipelineSteps() {
  const n = pipelineSteps.length

  return (
    <div className="panel pipeline-panel" dir="rtl">
      <h2 className="pipeline-heading">הצינור — שלב אחר שלב</h2>
      <p className="pipeline-intro">{pipelineIntro}</p>
      <p className="pipeline-meta">
        <span className="pipeline-meta-badge">{n} שלבים</span>
        <span className="pipeline-meta-hint">
          סדר כרונולוגי: שלב 1 בראש הרשימה, וכל שלב הבא מתחתיו
        </span>
      </p>

      <ol className="pipeline-timeline" lang="he">
        {pipelineSteps.map((step, i) => {
          const isLast = i === n - 1
          return (
            <li key={`${i}-${step.title}`} className="pipeline-timeline-item">
              <div className="pipeline-track">
                <span className="pipeline-index">{i + 1}</span>
                {!isLast ? (
                  <span className="pipeline-connector" aria-hidden="true" />
                ) : null}
              </div>
              <article className="pipeline-card">
                <h3 className="pipeline-card-title">{step.title}</h3>
                <p className="pipeline-card-body">{step.body}</p>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
