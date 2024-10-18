import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000
  },
  build: {
  rollupOptions: {
    external: ['@mui/icons-material/Eventnote']
    }
  }
})


// export default {
//   build: {
//     rollupOptions: {
//       external: ['@mui/icons-material/Eventnote']
//     }
//   }
// }
