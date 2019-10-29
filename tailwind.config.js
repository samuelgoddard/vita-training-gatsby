module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'Helvetica', 'Arial', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    })
  ],
  corePlugins: {
    container: false
  }
}