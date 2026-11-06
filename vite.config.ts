import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const configuredBase = process.env.VITE_BASE_PATH ?? '/portfolio/'
const base = `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')

export default defineConfig({
  plugins: [react()],
  base,
})
