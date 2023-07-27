/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#dc2626',
          secondary: '#f3f4f6',
          accent: '#dc2626',
          neutral: '#2a323c',
          'base-100': '#1d232a',
          info: '#3abff8',
          success: '#10b981',
          warning: '#fdba74',
          error: '#ef4444'
        }
      }
    ]
  },
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        coal: '#121212'
      }
    }
  },
  plugins: [require('daisyui')]
}
