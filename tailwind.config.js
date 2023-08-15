/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    screens: {
      sm: '640px', // small devices, tablets
      md: '768px', // medium devices, small laptops
      lg: '1024px', // large devices, laptops
      xl: '1280px', // extra large devices, large laptops, desktops
      xxl: '1440px', // xxl devices, large desktops
      '2xl': '1920px', // Full HD screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '10px', // small devices, tablets
        md: '15px', // medium devices, small laptops
        lg: '20px', // large devices, laptops
        xl: '25px', // extra large devices, large laptops, desktops
        xxl: '30px', // xxl devices, large desktops
        '2xl': '35px', // Full HD screens
      },
    },
    fontSize: {
      navMenu: ['14px', '16px'],
      navMenuMobile: ['18px', '16px'],

      h1Hero: ['60px', '70px'],
      textBase: ['16px', '150%'],
      textBtn: ['16px', '16px'],
    },
    extend: {
      colors: {
        colorBase: '#111',
        bgGreen: '#1B5B31',
        textGreen: '#1B5B31',
        borderGreen: '#1B5B31',
        fillGreen: '#1B5B31',
        bgSection: '#DCC1AB',
        textLight: '#F5F0EC',

        textBase: '#333',
        titleH2: '#BDBDBD',
        titleH3: '#fff',
        titleH4: '#fff',
        bgHeader: '#00183C',
        bgHeaderFixed: '#F9F9F9',
        navHeader: '#333',
        bgFooter: '#2C2C2C',
        borderFooter: 'rgba(255, 255, 255, 0.10)',
        colorTextBtn: '#333',
        colorText: '#333',
        bgBtnDark: '#333',
        bgHoverBtn: '#F9F9F9',
        bgAboutBox: '#FBFBFB',
        listNuber: '#F2F2F2',
        portfolioBg: '#333',
        bgInput: '#F3F3F3;',
        focusInput: '#ccd7e1',
        iconDark: '#333',
        iconLight: '#fff',
      },
      animation: {
        'animate-1': 'fade-in-el 1s ease-out',
        'animate-2': 'slide-up-el 1s ease-out',
        'animate-3': 'slide-down-el 1s ease-out',
        'animate-4': 'slide-left-el 1s ease-out',
        'animate-5': 'slide-right-el 1s ease-out',
      },
      keyframes: {
        'fade-in-el': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up-el': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down-el': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-left-el': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right-el': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
