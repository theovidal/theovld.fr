import links from '@/data/links'

export default defineEventHandler(async (event) => {
  const match = getRequestURL(event).pathname.match(/^\/l\/([^/]+)$/);
  if (match) {
    const key = match[1];
    const targetUrl = links[key];

    if (targetUrl) {
      sendRedirect(event, targetUrl)
    } else {
      setResponseStatus(event, 404)
    }
  }
})