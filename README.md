# מיני־מילון טכנולוגיה (mini-dict-explain-yuval)

אתר React סטטי בעברית (RTL): מילון מונחים, ביטויים מקצועיים לדיוני מוצר־הנדסה, ודוגמת צינור CI/CD.

## פיתוח מקומי

```bash
npm install
npm run dev
```

פתיחה ב־`http://localhost:5173/` (במצב `dev` נטען `base` כ־`/`).

## פריסה ל־GitHub Pages

1. ב־[vite.config.ts](vite.config.ts) השדה `repoBase` צריך להתאים לשם המאגר ב־GitHub Pages (כרגע: `mini-dict-explain-yuval`).

2. בנו ופרסמו לענף `gh-pages`:

   ```bash
   npm run deploy
   ```

3. ב־GitHub: **Settings → Pages**: מקור **Deploy from a branch**, בחרו ענף **`gh-pages`**, תיקייה **`/(root)`**, שמרו.

לאחר מספר דקות האתר יהיה זמין ב־`https://renanbazinin.github.io/mini-dict-explain-yuval/`.

### תצוגה מקדימה בשיתוף (Facebook / WhatsApp / X)

האתר משתמש ב־**PNG** (`public/og.png`, 1200×630) ל־`og:image` / `twitter:image` — פורמטים שתומכים בו בפועל. אחרי כל `npm run deploy`, כדאי לרענן מטמון אצל הפלטפורמות:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [X (Twitter) Card Validator](https://cards-dev.twitter.com/validator)

לעדכון הגרפיקה: ערכו `public/og.svg` והריצו `npm run generate:og` (גם רץ אוטומטית לפני `npm run build`).

### בדיקת build לפני פריסה

```bash
npm run build
npm run preview
```

פתחו `http://localhost:4173/mini-dict-explain-yuval/` כדי לוודא שנטען תחת אותו `base` כמו בייצור.
