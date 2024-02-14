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
      boxShadow: {
        custom: 'box-shadow: 0px 5px 13.4px 0px rgba(0, 0, 0, 0.25);'
      }
    }
  }
}
