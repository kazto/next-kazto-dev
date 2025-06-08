import { Context } from 'hono'
import { renderPage } from '../lib/renderer'
import CVPage, { fetchCVData } from '../pages/CVPage'

export const cvRoute = async (c: Context) => {
  const { data, build_date } = await fetchCVData()
  const html = renderPage(CVPage, { data, build_date }, 'Curriculum Vitae | kazto.dev')
  return c.html(html)
}