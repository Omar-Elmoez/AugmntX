/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: 'Manrope',
        Roboto: 'Roboto',
        DM: 'DM Serif Display',
      },
      boxShadow: {
        imgshadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        messageShadow: '3px 5px 4px 0 rgb(82, 113, 255)',
        btnShadow: '0rem 0.25rem 0.75rem rgba(30, 34, 40, 0.15)',
        listShadow: '0rem 0rem 1.25rem rgba(30, 34, 40, 0.06)',
        formShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        inputShadow: '0rem 0rem 1.25rem rgba(30, 34, 40, 0.04)'
      },
      screens: {
        sm: {'max': '767px'},
        md: {'min': '768px', 'max': '991px'},
        lg: {'min': '992px'},
      }
    },
  },
  plugins: [],
}

