import type { Context } from 'hono'

export const spirRoute = (c: Context) => {
    const url = process.env.ADJUST_SCHEDULE_URL || '/'
    return c.redirect(url, 302)
}
