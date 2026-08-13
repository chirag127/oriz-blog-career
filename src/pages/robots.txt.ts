import type { APIRoute } from 'astro'

const body = `User-agent: *
Allow: /
Sitemap: https://health-blog.oriz.in/sitemap-index.xml
`

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
