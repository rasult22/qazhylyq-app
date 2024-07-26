module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  theme: {
    extend: {
      dropShadow: {
        custom: '-2px -1px 2px black'
      },
      spacing: {
        'inset-top': 'var(--inset-top)',
        'inset-top-expand': 'var(--inset-top-expand)',
        'inset-bottom': 'var(--inset-bottom)'
      },
      boxShadow: {
        custom: '0px 0px 1px 0px rgba(0, 0, 0, 0.25);'
      }
    }
  }
}
