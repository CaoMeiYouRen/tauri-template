// eslint.config.js
import { defineConfig } from 'eslint/config'
import cmyr from 'eslint-config-cmyr/vue'

export default defineConfig([
    cmyr,
    {
        rules: {
        },
        ignores: [
            'src-tauri/**/**',
            '**/target/**',
            '**/releases/**',
            '**/dist/**',
            '**/build/**',
            '**/out/**',
        ],
    },
])
