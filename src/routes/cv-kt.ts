import type { Context } from 'hono'
import { renderPage } from '../lib/renderer'
import CVKTPage, { fetchCVData } from '../pages/CVKTPage'

export const cvKtRoute = async (c: Context) => {
    const { data, build_date } = await fetchCVData()
    const html = renderPage(CVKTPage, { data, build_date }, 'Curriculum Vitae | kazto.dev')
    return c.html(html)
}
