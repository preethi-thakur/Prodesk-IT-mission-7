export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 24px 70px rgba(15, 23, 42, 0.24)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #020617 0%, #09131f 100%)'
      }
    }
  },
  plugins: []
}
