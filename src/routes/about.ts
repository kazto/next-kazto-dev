import { Context } from 'hono'
import { renderPage } from '../lib/renderer'
import AboutPage from '../pages/AboutPage'

export const aboutRoute = (c: Context) => {
  const html = renderPage(AboutPage, {}, 'About | kazto.dev')
  return c.html(html)
}