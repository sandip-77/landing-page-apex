module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  
  theme: {
    extend: {
      colors: {
        'theme-green': "#6ABEAE",
        'very-light-gray':'rgba(0, 0, 0, 0.03)',
        'border-input':'rgba(0, 0, 0, 0.1)',
        '#F7F6F6': '#F7F6F6',
        'theme-black':"#323132",
        "#dddddd": '#DDDDDD',
        'theme-light-green':'rgba(106, 190, 174, 0.2)',
        "#c4c4c4":"#c4c4c4",
        "gray-text":"rgba(50, 49, 50)",
        "link-green": '#15BE9E',
        "bottom-border":'rgba(50, 49, 50, 0.1)',
        'black-10':'#0000001A'
      },
      fontSize: {
        'very-tiny': '10px',
        'very-very-tiny':'8px'
      },
      borderWidth: {
       '0.5':'0.5px'
      },
      width: {
      },
      margin: {
        '19':'78px',
        "25": "100px"

      },
      zIndex: {
        '9999': '9999',
      }
    },
    },
    
  variants: {
    extend: {},
  },
  plugins: [],
};
