import type { GlossaryItem } from './types'

export const glossaryTerms: GlossaryItem[] = [
  {
    id: 'docker',
    title: 'Docker',
    aliases: ['קונטיינריזציה'],
    definition:
      'פלטפורמה לאריזת אפליקציה יחד עם כל מה שהיא צריכה כדי לרוץ, כך שתקבלו אותה התנהגות בלפטופ, בשרת פיתוח ובפרודקשן. מפחיתה “עבד אצלי” כי הסביבה זהה.',
    relatedIds: ['docker-image', 'container', 'devops'],
  },
  {
    id: 'docker-image',
    title: 'תמונת Docker',
    aliases: ['Docker image'],
    definition:
      'קובץ שכבות נייד שמכיל את הקוד והתלויות. מתוך תמונה מריצים מיכל — מופע רץ של אותה תמונה. גרסה חדשה של תמונה = גרסה חדשה של מה שמותקן.',
    relatedIds: ['docker', 'container', 'jfrog'],
  },
  {
    id: 'container',
    title: 'מיכל (Container)',
    definition:
      'תהליך מבודד שמריץ אפליקציה מתוך תמונה, עם מגבלות CPU/זיכרון ורשת משלו. קל יותר ממכונה וירטואלית מלאה ומהיר לכוון.',
    relatedIds: ['docker', 'kubernetes'],
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    aliases: ['קוברנטיס', 'K8s'],
    definition:
      'מערכת לאורקסטרציה של מיכלים: פריסה, קנה מידה, תיקון עצמי וגלילה מבוקרת של גרסאות. מתאימה כשיש הרבה שירותים וסביבות דינמיות.',
    relatedIds: ['container', 'orchestration', 'helm', 'openshift'],
  },
  {
    id: 'orchestration',
    title: 'אורקסטרציה',
    definition:
      'תיאום אוטומטי של הרבה משימות/שירותים שצריכים לעבוד יחד — מי רץ איפה, בסיס אכיפת מצב, וניהול משאבים ברמת הקלאסטר.',
    relatedIds: ['kubernetes'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    definition:
      'תרבות ופרקטיקות שמקרבות פיתוח לתפעול: אוטומציה, צינורות שחרור, ניטור ושיתוף אחריות על איכות ויציבות — לא “צוות נפרד שמתקן בלילה”.',
    relatedIds: ['cicd', 'github-actions', 'jenkins'],
  },
  {
    id: 'cicd',
    title: 'CI/CD',
    aliases: ['אינטגרציה רציפה', 'שחרור רציף'],
    definition:
      'CI — בנייה ובדיקות אוטומטיות על כל שינוי קוד. CD — העברה מבוקרת לסביבות (לפעמים עד פרודקשן). המטרה: משוב מהיר וסיכון מדורג.',
    relatedIds: ['github-actions', 'jenkins', 'devops'],
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions',
    definition:
      'מנוע אוטומציה בתוך GitHub: Workflows ב־YAML שמגיבים לאירועים (push, PR, לוח זמנים). מתאים לבילדים, בדיקות, ופרסום ארטיפקטים.',
    relatedIds: ['cicd', 'docker-image'],
  },
  {
    id: 'jenkins',
    title: 'Jenkins',
    definition:
      'שרת אוטומציה “קלאסי” לבנייה ופריסה. גמיש מאוד בתוספים ובסקריפטים, ולעיתים מחובר למאגרי ארטיפקטים ול־Git שונים בארגון.',
    relatedIds: ['cicd', 'bitbucket', 'jfrog'],
  },
  {
    id: 'jfrog',
    title: 'JFrog Artifactory',
    aliases: ['Artifactory'],
    definition:
      'מאגר ארטיפקטים: תמונות Docker, חבילות, קבצי build. מאפשר גרסאות, הרשאות, שכפול בין ענן לרשת פנימית — חשוב כשיש “מאגר חוץ” ו“מאגר בית”.',
    relatedIds: ['docker-image', 'webhook', 'supply-chain'],
  },
  {
    id: 'webhook',
    title: 'Webhook',
    definition:
      'קריאת HTTP אוטומטית ממערכת אחת לשנייה כשקורה אירוע (למשל ארטיפקט חדש). מאפשר לחבר בין כלים בלי עבודה ידנית בין המערכות.',
    relatedIds: ['github-actions', 'jfrog'],
  },
  {
    id: 'bitbucket',
    title: 'Bitbucket',
    definition:
      'שירות לאחסון Git ולניהול קוד ו־pull requests. בארגונים רבים הוא מרכז הקוד גם כשהבילדים רצים ב־Jenkins או בענן אחר.',
    relatedIds: ['jenkins', 'git'],
  },
  {
    id: 'git',
    title: 'Git',
    definition:
      'מערכת לניהול גרסאות: ענפים, מיזוגים, היסטוריה. כל צינור CI מתחיל בדחיפת שינוי למאגר.',
    relatedIds: ['bitbucket', 'github-actions'],
  },
  {
    id: 'unix',
    title: 'Unix',
    definition:
      'משפחת מערכות הפעלה עם פילוסופיה של קבצים, תהליכים ושורת פקודה. רבים מהשרתים בענן מבוססים על דומיין דומה (למשל Linux).',
    relatedIds: ['linux'],
  },
  {
    id: 'linux',
    title: 'Linux',
    definition:
      'קרנל פתוח שרץ על שרתים, מיכלים ומכשירים רבים. כשמדברים על “שרת” בתעשייה, לרוב מתכוונים ללינוקס.',
    relatedIds: ['unix', 'redhat', 'container'],
  },
  {
    id: 'redhat',
    title: 'Red Hat',
    aliases: ['רד האט', 'RHEL'],
    definition:
      'חברה שמספקת הפצת Linux ארגונית (RHEL), תמיכה וכלים סביב קונטיינרים וקוברנטיס. רלוונטי כשמדברים על חוזים, תיקוף ותמיכה לטווח ארוך.',
    relatedIds: ['linux', 'kubernetes', 'openshift'],
  },
  {
    id: 'openshift',
    title: 'OpenShift',
    aliases: ['Open Shift', 'OCP'],
    definition:
      'פלטפורמת קונטיינרים ארגונית מבית Red Hat, מבוססת קוברנטיס עם שכבות נוספות: אבטחה, מדיניות, כלי מפתחים ואינטגרציה ל־CI/CD. רבים מנהלים בה פריסות עם GitOps — למשל Argo CD או OpenShift GitOps.',
    relatedIds: ['kubernetes', 'redhat', 'argocd', 'git'],
  },
  {
    id: 'argocd',
    title: 'Argo CD',
    aliases: ['ArgoCD', 'OpenShift GitOps'],
    definition:
      'כלי GitOps לקוברנטיס ול־OpenShift: מאגר ה־Git הוא “מקור האמת” לגבי מה שאמור לרוץ בקלאסטר. Argo CD עוקב אחרי Applications, מציג פערים בין Git לבין המצב בפועל, ומיישם עדכונים דרך פעולת Sync. אפשר להריץ אותו על OpenShift כחלק מתהליך שחרור מבוקר.',
    relatedIds: ['openshift', 'kubernetes', 'git', 'argocd-sync', 'cicd'],
  },
  {
    id: 'argocd-sync',
    title: 'סנכרון (Sync) ב־Argo CD',
    aliases: ['Sync', 'Hard Sync', 'Refresh'],
    definition:
      'Sync הוא הרגע שבו Argo CD מושך את ההגדרות העדכניות מהמאגר, משווה אותן למה שרץ בקלאסטר, ומיישם את ההפרשים (למשל Deployments, Routes, ConfigMaps). Sync יכול להיות אוטומטי או ידני לפי מדיניות הארגון. עד שלא הושלם Sync מוצלח, שינוי ב־Git לא משתקף בסביבה הרצה; כשל ב־Sync יופיע בלוגים ובמסך ה־Application.',
    relatedIds: ['argocd', 'openshift', 'git', 'devops'],
  },
  {
    id: 'monorepo',
    title: 'Monorepo',
    aliases: ['מונורפו'],
    definition:
      'מאגר Git אחד שמכיל כמה פרויקטים/חבילות. מקל על שינויים חוצי־מוצרים אבל דורש כלים טובים לבילדים ול־ownership ברור.',
    relatedIds: ['git', 'cicd'],
  },
  {
    id: 'helm',
    title: 'Helm',
    definition:
      'מנהל חבילות לקוברנטיס: עוטף YAML מורכב ל“תרשים” עם גרסאות וערכי ברירת מחדל. מקל על התקנות חוזרות של שירותים דומים.',
    relatedIds: ['kubernetes'],
  },
  {
    id: 'iac',
    title: 'תשתית כקוד (IaC)',
    aliases: ['Infrastructure as Code'],
    definition:
      'הגדרת שרתים, רשתות והרשאות בקבצים שנבדקים ב־Git, במקום שינוי ידני בקונסול. מפחית סטיות בין סביבות ומאפשר ביקורת.',
    relatedIds: ['devops', 'cicd'],
  },
  {
    id: 'supply-chain',
    title: 'שרשרת אספקה של תוכנה',
    aliases: ['Supply chain security'],
    definition:
      'כל השלבים מהקוד ועד לארטיפקט שרץ אצל הלקוח: חתימות, סריקות פגיעויות, מקור מהימן למאגר. קריטי כשמעבירים תמונות בין ענן לפנים.',
    relatedIds: ['jfrog', 'docker-image'],
  },
]

export function termTitleById(id: string): string | undefined {
  return glossaryTerms.find((t) => t.id === id)?.title
}
