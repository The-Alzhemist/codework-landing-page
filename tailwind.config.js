/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'custom-gradient': 'linear-gradient(180deg, transparent 50%, #E9FB64 50% 90%, rgba(0, 0, 0, 0) 90%)',
      }),
      
      fontFamily: {
        prompt: ['var(--font-prompt)'],
        gloriaHallelujah:['var(--font-gloria-hallelujah)']
      },
    
    },

  
  
    // colors: {
    //    primary: '#C8D94C',
    //    secondary: '#',
    //    tertiary: '#FFFBFE'
    // },
    // text: {
    //   primary: '#C8D94C',
    //   secondary: '#',
    //   tertiary: '#FFFBFE'
    // }
  },
  plugins: [],
}
