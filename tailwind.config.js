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
      colors: {
        white: '#FFFFFF',
        primary: {
          DEFAULT: '#C8D94C',
          1000: '#49510D',
          900: '#687318',
          800: '#889526',
          700: '#A8B738',
          600: '#C8D94C',
          500: '#E9FB64',
          400: '#F0FF88',
          300: '#F5FFAA',
          200: '#F9FFCD',
          100: '#FDFFEF',
        },
        secondary: {
          DEFAULT: '#27291E',
          100: '#404332',
          90: '#585C48',
          80: '#585C48',
          70: '#8A8F76',
          60: '#A4A88F',
          50: '#BDC2A9',
          40: '#D7DBC4',
          30: '#F1F5E1',
          20: '#F5F7EC',
          10: '#F9F9F7',
        },
        // gray: {
        //   100: '#FAFBFF',
        //   200: '#F4F5FA',
        //   250: '#F0F2F4',
        //   300: '#D6DADE',
        //   400: '#ACB2B8',
        //   500: '#666B70',
        //   600: '#484C4E',
        //   700: '#353839',
        //   800: '#FAFBFF',
        //   900: '#FAFBFF',
        // },
      },
      
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
