import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
        'from-[#152853]',
        'to-[#040c24]',
        'from-[#804565]',
        'to-[#AA585B]',
        'from-[#7dc7ff]',
        'to-[#3e67ed]',
        'from-[#50366F]',
        'to-[#1F214D]',
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
                primary: [
                    'var(--primary-font)',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            keyframes: {
                jiggle: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(0.3deg)' },
                    '50%': { transform: 'rotate(-0.3deg)' },
                    '75%': { transform: 'rotate(0.3deg)' },
                },
            },
            animation: {
                jiggle: 'jiggle 0.6s infinite',
            },
            colors: {
                gray: colors.neutral,
                primary: '#0d131f', // #1c1916
                accent: {
                    DEFAULT: '#0e8eff',
                    '50': '#ebf8ff',
                    '100': '#d3edff',
                    '200': '#b0e1ff',
                    '300': '#79d1ff',
                    '400': '#3bb4ff',
                    '500': '#0e8eff',
                    '600': '#006aff',
                    '700': '#0052ff',
                    '800': '#0041d2',
                    '900': '#043ea7',
                    '950': '#082663',
                },
                gold: {
                    DEFAULT: '#d19e00',
                    '50': '#ffffe7',
                    '100': '#feffc1',
                    '200': '#fffd86',
                    '300': '#fff441',
                    '400': '#ffe60d',
                    '500': '#ffd700',
                    '600': '#d19e00',
                    '700': '#a67102',
                    '800': '#89580a',
                    '900': '#74480f',
                    '950': '#442604',
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;
