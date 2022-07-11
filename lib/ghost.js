import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API,
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  version: 'v5.0',
})
