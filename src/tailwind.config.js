module.exports = {
    content: [
      // ... your project files, eg.:
      // './index.html',
      // './src/**/*.{vue,js,ts,jsx,tsx}',
      './vueform.config.js', // or where `vueform.config.js` is located
      './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
      './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    ],
    // ...
    plugins: [
      require('@vueform/vueform/tailwind'),
    ]
  }