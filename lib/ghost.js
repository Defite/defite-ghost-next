import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '87d65100c35f5a0af22f1f69b6',
  version: 'v5.0',
})
