

module.exports = {
    content: ["*"],
    theme: {
      extend: {
        fontFamily: {
                       'sans': ['Inter', 'sans-serif'],
                 }
      },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
  }