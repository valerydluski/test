// Default color palette is dark when no themes presented

const backgroundsColors = {
  transparent: 'transparent',
  'layer-0': 'var(--bg-layer-0, #000000)',
  'layer-1': 'var(--bg-layer-1, #090D13)',
  'layer-2': 'var(--bg-layer-2, #141A23)',
  'layer-3': 'var(--bg-layer-3, #222932)',
  'layer-4': 'var(--bg-layer-4, #333942)',
  blackout: 'var(--bg-blackout, #090D13B3)',
  error: 'var(--bg-error, #402027)',
  warning: 'var(--bg-warning, #3F3D25)',
  info: 'var(--bg-info, #1C2C47)',
  success: 'var(--bg-success, #1D3841)',
  'accent-primary-alpha': 'var(--bg-accent-primary-alpha, #74A4FF26)',
  'accent-secondary-alpha': 'var(--bg-accent-secondary-alpha, #37BABC26)',
  'accent-tertiary-alpha': 'var(--bg-accent-tertiary-alpha, #A972FF26)',
  'accent-primary': 'var(--bg-accent-primary, #74A4FF)',
  'accent-secondary': 'var(--bg-accent-secondary, #37BABC)',
  'accent-tertiary': 'var(--bg-accent-tertiary, #A972FF)',
  secondary: 'var(--bg-secondary, #9AA2AD)',
};

const buttonsBgColors = {
  'controls-primary': 'var(--controls-bg-primary, #5C8DEA)',
  'controls-primary-hover': 'var(--controls-bg-primary-hover, #3970DA)',
  'controls-secondary': 'var(--controls-bg-secondary, #222932)',
  'controls-secondary-hover': 'var(--controls-bg-secondary-hover, #333942)',
  'controls-tertiary': 'var(--controls-bg-tertiary, #1C2C47)',
  'controls-tertiary-hover': 'var(--controls-bg-tertiary-hover, #325594)',
  'controls-accent-alpha': 'var(--controls-bg-accent-alpha, #5C8DEA2B)',
  'controls-disable': 'var(--controls-bg-disable, #7F8792)',
  'controls-enable-primary': 'var(--controls-enable-primary, #FCFCFC)',
};

const borderColors = {
  transparent: 'transparent',
  primary: 'var(--stroke-primary, #69727C)',
  secondary: 'var(--stroke-secondary, #222932)',
  tertiary: 'var(--stroke-tertiary, #090D13)',
  focus: 'var(--stroke-focus, #F3F4F6)',
  error: 'var(--stroke-error, #F76464)',
  warning: 'var(--stroke-warning, #EEC840)',
  info: 'var(--stroke-info, #74A4FF)',
  success: 'var(--stroke-success, #37BABC)',
  'accent-primary': 'var(--stroke-accent-primary, #74A4FF)',
  'accent-secondary': 'var(--stroke-accent-secondary, #37BABC)',
  'accent-tertiary': 'var(--stroke-accent-tertiary, #A972FF)',
  hover: 'var(--stroke-hover, #F3F4F6)',
};

const textColors = {
  transparent: 'transparent',
  primary: 'var(--text-primary, #F3F4F6)',
  secondary: 'var(--text-secondary, #9AA2AD)',
  error: 'var(--text-error, #F76464)',
  warning: 'var(--text-warning, #EEC840)',
  info: 'var(--text-info, #74A4FF)',
  success: 'var(--text-success, #37BABC)',
  'accent-primary': 'var(--text-accent-primary, #74A4FF)',
  'accent-secondary': 'var(--text-accent-secondary, #37BABC)',
  'accent-tertiary': 'var(--text-accent-tertiary, #A972FF)',
  'controls-disable': 'var(--controls-text-disable, #090D13)',
};

const placeholderColor = {
  primary: 'var(--text-primary, #F3F4F6)',
};

const buttonsTextColors = {
  'controls-solid': 'var(--controls-text-solid, #FCFCFC)',
  'controls-solid-disable': 'var(--controls-text-solid-disable, #333942)',
  'controls-outlined': 'var(--controls-text-outlined, #FCFCFC)',
  'controls-link-primary-hover': 'var(--controls-text-link-primary-hover, #3970DA)',
  'controls-disable': 'var(--controls-disable, #5B6570)',
  'controls-primary': 'var(--controls-primary, #FCFCFC)',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{html,js,ts,tsx,yaml}',
    './../../node_modules/@epam/ai-dial-ui-kit/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundColor: { ...backgroundsColors, ...buttonsBgColors },
    borderColor: borderColors,
    stroke: borderColors,
    divideColor: borderColors,
    placeholderColor: placeholderColor,
    textColor: { ...textColors, ...buttonsTextColors },
    gradientColorStops: backgroundsColors,

    extend: {
      screens: {
        mobile: { min: '360px', max: '767px' },
        tablet: { min: '768px', max: '1023px' },
        desktop: { min: '1024px' },
      },
      boxShadow: {
        DEFAULT: '0 0 4px 0 var(--bg-blackout, #090D13B3)',
      },
      borderRadius: {
        DEFAULT: '3px',
      },
      opacity: {
        15: '15%',
      },
      colors: {
        transparent: 'transparent',
      },
      fontFamily: {
        DEFAULT: ['var(--theme-font, var(--font-inter))'],
      },
      fontSize: {
        xxs: '10px',
      },
    },
  },
  plugins: [],
};
