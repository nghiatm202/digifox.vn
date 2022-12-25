const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sora: ['Sora'],
    },
    extend: {
      colors: {
        'body-color': '#404145',
        'border-color': '#cdcfd5',
        'primary-color': '#ff5e2b',
        'primary-hover-color': '#fc8c2a',
        'title-color': '#404145',
        'paragraph-color': '#3d4459',
        'gray-100': '#f7f7f7',
        'gray-200': '#f1f1f1',
        'gray-300': '#bbb',
        'gray-400': '#a5a5a5',
        'gray-500': '#777',
        'gray-600': '#666',
        'gray-700': '#555',
        'gray-800': '#333',
        'gray-900': '#242424',
      },
      transitionProperty: {
        height: 'height',
        color: 'color',
      },
      boxShadow: {
        'blog-item': '0 0 10px 0 rgb(0 0 0 / 15%)',
        'product-item': '0 0 4px rgb(0 0 0 / 12%)',
        'wd-button': '1px 1px 1px rgb(0 0 0 / 10%)',
        'checkout-box': '1px 1px 2px rgb(0 0 0 / 5%)',
        'course-item': '0px 0px 10px 0px rgb(0 0 0 / 7%)',
        'search-input': '0 -1px 9px rgb(0 0 0 / 17%)',
      },
    },
  },
  plugins: [lineClamp],
};
