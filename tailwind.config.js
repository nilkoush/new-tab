const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '5rem',
                xl: '10rem',
                '2xl': '20rem',
            },
        },
        extend: {
            fontFamily: {
                'plus-jakarta-sans': [
                    'Plus Jakarta Sans',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                'dark-gray': '#212121',
                'light-gray': '#DBDBDB',
                gray: colors.gray,
            },
        },
    },
    plugins: [],
};
