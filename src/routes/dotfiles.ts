import { Context } from 'hono'

export const dotfilesRoute = (c: Context) => {
  const url = process.env.DOTFILES_INSTALL_SH_URL || '/'
  return c.redirect(url, 302)
}