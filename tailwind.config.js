module.exports = {
  theme: {
    colors: {
      'black': '#363738',
      'white': '#FFFFFF',
      'grey': {
        light: '#f9f9f9',
        default: '#f1f1f1'
      },
      'primary': {
        default: '#cc0f29',
        dark: '#781315'
      },
      'secondary': {
        default: '#f68f1e'
      },
    },
    fontSize: {
      '2xs': '0.65rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.6875rem',
    },
    extend: {
      borderWidth: {
        '16': '16px'
      },
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