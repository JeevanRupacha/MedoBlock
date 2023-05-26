module.exports = {
    mode: 'jit',
    purge: {
      mode: 'all',
      content: ['./src/**/*.{svelte,jsx,js,ts,html}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'supply-black':'#2C2C2C',
          'card-color':'#343434',
          'wallet-msg':'#1C1F26',
          'text-color':'#FFFFFF',
          'blue':'#0044CC',
          'button':'#00E472',
          'line':'#D9D9D9',
          'homecard':'#3A3A3A',
          'form':'#32F694',
          'formtext':'#CCCCCC',
          'red':'#FB3232',
        },
        fontFamily:{
          sans:['Quicksand','sans-serif'],
        },
       
         
        
         
        },
      },
  
    plugins: [],
  };