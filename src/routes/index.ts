import type { Context } from 'hono'
import { renderPage } from '../lib/renderer'
import IndexPage from '../pages/IndexPage'

export const indexRoute = (c: Context) => {
    const html = renderPage(IndexPage, {}, 'kazto.dev')
    return c.html(html)
}
