/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: '#f5f4f2',
                foreground: 'rgb(var(--foreground))',
                primary: {
                    DEFAULT: '#D9BB65',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: '#F4DDA1',
                    subtitle: '#70798a',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                tertiary: {
                    DEFAULT: '#0F1C40',
                    subtitle: '#70798a',
                    foreground: '#ECF1F4' // === on tertiary color
                },
                surface: {
                    DEFAULT: '#F2C879',
                    tertiary: '#647389',
                    subtitle: '#D9D0C1',
                    foreground: '#3B4863' // === on surface color
                },
                success: { DEFAULT: '#2CB852' },
                text: {
                    DEFAULT: '#590202',
                    subtle: '#C7BBA9'
                },
                destructive: {
                    DEFAULT: '#C74048',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'rgb(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },

                // Custom colors
                mediumSilver: '#c7c7c7',
                lightSilver: '#ededed',
                mediumBlack: '#2e3133',
                darkGold: '#dbb778',
                lightGold: '#f0cf95',
                gold: {
                    DEFAULT: '#dbb658',
                    300: '#e2c479',
                    400: '#debd68',
                    500: '#dbb658',
                    600: '#c5a34f',
                    700: '#af9146'
                },

                // Primary brand color shades
                'harvest-gold': {
                    DEFAULT: '#D9BB65',
                    50: '#F0E4C1',
                    100: '#EDDFB7',
                    200: '#E8D6A2',
                    300: '#E3CD8E',
                    400: '#DEC479',
                    500: '#D9BB65',
                    600: '#D6B659',
                    700: '#D3B04C',
                    800: '#D0AB40',
                    900: '#CDA534',
                    950: '#C8A131'
                },

                // Secondary brand color shades
                'light-gold': {
                    DEFAULT: '#F4DDA1',
                    50: '#FEFBF3',
                    100: '#FDF7EA',
                    200: '#FAF1D8',
                    300: '#F8EAC6',
                    400: '#F6E4B3',
                    500: '#F4DDA1',
                    600: '#EFCC73',
                    700: '#E9BC46',
                    800: '#E2AA1A',
                    900: '#B48815',
                    950: '#9D7712'
                },

                // Tertiary brand color shades
                'dark-navy': {
                    DEFAULT: '#0F1C40',
                    50: '#3059CC',
                    100: '#2E56C4',
                    200: '#2A4FB4',
                    300: '#2647A3',
                    400: '#224093',
                    500: '#1E3982',
                    600: '#1B3272',
                    700: '#172A61',
                    800: '#132351',
                    900: '#0F1C40',
                    950: '#0C1734'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            fontFamily: {
                default: ['Lato', 'sans-serif'],
                primary: ['"Playfair Display"', 'serif']
            },
            backgroundSize: {
                'size-200': 'var(--size-200)'
            },
            backgroundPosition: {
                'pos-0': 'var(--pos-0)',
                'pos-100': 'var(--pos-100)'
            },
            backgroundImage: {
                'gradient-background':
                    'linear-gradient(150deg, #ffcc80 40%, #f57c00 90%)',
                'gradient-primary':
                    'linear-gradient(140deg, rgba(222,196,121,1) 60%, rgba(217,187,101,1) 75%, rgba(214,182,89,1) 90%)',
                'gradient-destructive':
                    'linear-gradient(135deg, rgba(255,65,34,1) 60%, rgba(237,53,26,1) 85%, rgba(198,26,9,1) 100%)',
                'gradient-active':
                    'linear-gradient(135deg, rgba(50,252,167,1) 60%, rgba(27,220,138,1) 85%, rgba(5,190,112,1) 100%)'
            },
            dropShadow: {
                primary: [
                    '0 10px 10px rgba(217,187,101, 0.4)',
                    '0 20px 20px rgba(217,187,101, 0.4)'
                ]
            },
            screens: {
                xs: '320px',
                sm: '426px',
                sml: '500px',
                md: '667px',
                mdl: '769px',
                xmdl: '890px',
                lg: '960px',
                lgl: '1024px',
                xl: '1280px',
                xxl: '1680px'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
};
