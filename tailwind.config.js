/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        defaultwhite: "var(--defaultwhite)",
        "neutral-500": "var(--neutral-500)",
        "neutral-700": "var(--neutral-700)",
        "neutral-900": "var(--neutral-900)",
        "opacityblack-10": "var(--opacityblack-10)",
        "opacityblack-20": "var(--opacityblack-20)",
        "opacityblack-4": "var(--opacityblack-4)",
        "opacityblack-6": "var(--opacityblack-6)",
        "opacityprimary-100": "var(--opacityprimary-100)",
        "opacitywhite-100": "var(--opacitywhite-100)",
        "primary700-main": "var(--primary700-main)",
        "success700-main": "var(--success700-main)",
      },
      fontFamily: {
        "paragraph-p3-semi-bold": "var(--paragraph-p3-semi-bold-font-family)",
        "paragraph-p4-medium": "var(--paragraph-p4-medium-font-family)",
        "paragraph-p4-regular": "var(--paragraph-p4-regular-font-family)",
        "paragraph-p4-semi-bold": "var(--paragraph-p4-semi-bold-font-family)",
        "paragraph-p5-medium": "var(--paragraph-p5-medium-font-family)",
        "paragraph-p5-semi-bold": "var(--paragraph-p5-semi-bold-font-family)",
      },
      boxShadow: {
        "drop-shadow-main": "var(--drop-shadow-main)",
        "drop-shadow-normal": "var(--drop-shadow-normal)",
        "drop-shadow-normal-focus": "var(--drop-shadow-normal-focus)",
      },
      backgroundColor: {
        '8958E1': '#8958E1',
        '00B674': '#00B674',
      },
    },
  },
  plugins: [],
}
