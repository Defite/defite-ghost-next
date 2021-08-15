import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{tsx,jsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif']
      }
    }
  },
  plugins: [
    require('windicss/plugin/typography'),
  ]
})