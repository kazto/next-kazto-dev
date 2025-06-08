import type { FC } from 'react'
import { renderToString } from 'react-dom/server'

export const renderPage = (Component: FC<any>, props: any = {}, title = 'kazto.dev') => {
    const html = renderToString(<Component {...props} />)

    return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="/styles.css">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <script src="/__/firebase/8.2.1/firebase-app.js"></script>
  <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>
  <script src="/__/firebase/init.js"></script>
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a> | <a href="/about">About</a>
    </nav>
  </header>
  <div id="root">${html}</div>
</body>
</html>`
}
