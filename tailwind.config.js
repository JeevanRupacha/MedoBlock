module.exports = {
    mode: 'jit',
    purge: {
      mode: 'all',
      content: ['./src/**/*.{svelte,jsx,js,ts,html}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        padding: {
          btnNormalX: '2rem',
          btnNormalY: '0.75rem',
          btnMediumX: '1.6rem',
          btnSmallX: '1rem',
          btnSmallY: '0.5rem',
        },
        borderWidth: {
          1: '1rem',
          3: '3px',
        },
        borderRadius: {
          buttonRadius: '1.875rem',
        },
        colors: {
          yellow: {
            primary: '#FFA800',
          },
          black: {
            primary: '#333333',
            secondary: '#808080',
            dark: '#000',
          },
          gray: {
            borderGray: '#EAEAEA',
            bgGray2: '#F8F8F8',
            primary: '#F2F2F2',
            secondary: '#DDDDDD',
            tertiary: '#AAAAAA',
          },
          color1: {
            green1: '#27AE61',
            blueText: '#2975AA',
            skyBlue: '#4184B2',
            orange1: '#FFA800',
          },
        },
      },
    },
  
    plugins: [],
  };