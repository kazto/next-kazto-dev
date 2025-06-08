import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'

const app = new Hono()

// Serve static files
app.use('/assets/*', serveStatic({ root: './dist' }))
app.use('/images/*', serveStatic({ root: './dist/public' }))
app.use('/styles.css', serveStatic({ path: './dist/public/styles.css' }))
app.use('/favicon.ico', serveStatic({ path: './dist/public/favicon.ico' }))
app.use('/ads.txt', serveStatic({ path: './dist/public/ads.txt' }))
app.use('/apple-touch-icon.png', serveStatic({ path: './dist/public/images/apple-touch-icon.png' }))
app.use('/favicon-32x32.png', serveStatic({ path: './dist/assets/icons/favicon-32x32.png' }))
app.use('/favicon-16x16.png', serveStatic({ path: './dist/assets/icons/favicon-16x16.png' }))

// Firebase static files
app.use('/__/*', serveStatic({ root: './dist/public' }))

import { aboutRoute } from './routes/about'
import { cvRoute } from './routes/cv'
import { cvKtRoute } from './routes/cv-kt'
import { dotfilesRoute } from './routes/dotfiles'
// Import route handlers
import { indexRoute } from './routes/index'
import { spirRoute } from './routes/spir'

// Register routes
app.get('/', indexRoute)
app.get('/about', aboutRoute)
app.get('/cv', cvRoute)
app.get('/cv-kt', cvKtRoute)
app.get('/dotfiles', dotfilesRoute)
app.get('/spir', spirRoute)

const port = 3000
const hostname = 'localhost'

console.log(`Server is running on http://${hostname}:${port}`)

serve({
    fetch: app.fetch,
    port,
    hostname,
})
