/**
 * Mantine theme configuration generated from design tokens.
 * This is a one-time export - tokens are frozen.
 *
 * Usage:
 * ```javascript
 * import { createTheme, MantineProvider } from '@mantine/core';
 * import { theme as tokenTheme } from 'theme/mantine';
 *
 * const theme = createTheme(tokenTheme);
 *
 * <MantineProvider theme={theme}>
 *   {children}
 * </MantineProvider>
 * ```
 */

// Color palettes from primitives (100-1000 mapped to 0-9)
const gray = [
  '#ffffff',  // 100
  '#fdfcfc',  // 200
  '#f8f6f7',  // 300
  '#efeded',  // 400
  '#e5e5e5',  // 500
  '#d7d7d7',  // 600
  '#bdbdbd',  // 700
  '#717171',  // 800
  '#464646',  // 900
  '#011627',  // 1000
];

const blue = [
  '#f9f9ff',  // 100
  '#f2f3ff',  // 200
  '#e8ecff',  // 300
  '#dbe1ff',  // 400
  '#d1d9ff',  // 500
  '#acbafe',  // 600
  '#6276ff',  // 700
  '#3751ff',  // 800
  '#303ce5',  // 900
  '#1c1ccb',  // 1000
];

const purple = [
  '#f8f8ff',  // 100
  '#f1f0ff',  // 200
  '#eae7ff',  // 300
  '#e2deff',  // 400
  '#d6d0ff',  // 500
  '#a585ff',  // 600
  '#7435f8',  // 700
  '#620dec',  // 800
  '#4926b2',  // 900
  '#372f78',  // 1000
];

const yellow = [
  '#fffef5',  // 100
  '#fffde0',  // 200
  '#fffdcb',  // 300
  '#fffca2',  // 400
  '#fffc78',  // 500
  '#fff500',  // 600
  '#ffe81b',  // 700
  '#fedd00',  // 800
  '#ffd000',  // 900
  '#ffc400',  // 1000
];

const teal = [
  '#f6fcfd',  // 100
  '#edf8fa',  // 200
  '#def3f7',  // 300
  '#bde8ef',  // 400
  '#96dce7',  // 500
  '#68cbda',  // 600
  '#29b5c9',  // 700
  '#12aabf',  // 800
  '#078a9c',  // 900
  '#016f7d',  // 1000
];

const red = [
  '#fff9f9',  // 100
  '#fff2f3',  // 200
  '#ffdde0',  // 300
  '#ffbdc3',  // 400
  '#ff9ea6',  // 500
  '#ff7f89',  // 600
  '#ff4d5a',  // 700
  '#eb111c',  // 800
  '#c50e14',  // 900
  '#b11018',  // 1000
];

const orange = [
  '#fcf8ef',  // 100
  '#fff3d7',  // 200
  '#ffecbe',  // 300
  '#ffe5a6',  // 400
  '#ffde8e',  // 500
  '#ffcd65',  // 600
  '#ffbe47',  // 700
  '#fdb735',  // 800
  '#ffaa1c',  // 900
  '#ff9d0a',  // 1000
];

const green = [
  '#f2fff8',  // 100
  '#ddffed',  // 200
  '#bdffdc',  // 300
  '#97fec9',  // 400
  '#7df1b6',  // 500
  '#43d98d',  // 600
  '#15ab64',  // 700
  '#00874a',  // 800
  '#006537',  // 900
  '#00562f',  // 1000
];

export const theme = {
  colors: {
    gray,
    blue,
    purple,
    yellow,
    teal,
    red,
    orange,
    green,
  },

  primaryColor: 'blue',
  primaryShade: 7,

  fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
  fontFamilyMonospace: "'JetBrains Mono', ui-monospace, monospace",

  headings: {
    fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '34px', lineHeight: '1.3', fontWeight: '600' },
      h2: { fontSize: '26px', lineHeight: '1.35', fontWeight: '600' },
      h3: { fontSize: '22px', lineHeight: '1.4', fontWeight: '600' },
      h4: { fontSize: '18px', lineHeight: '1.45', fontWeight: '600' },
      h5: { fontSize: '16px', lineHeight: '1.5', fontWeight: '600' },
      h6: { fontSize: '14px', lineHeight: '1.5', fontWeight: '600' },
    },
  },

  spacing: {
    xs: '8px',   // xsmall
    sm: '12px',  // small
    md: '16px',  // medium
    lg: '20px',  // large
    xl: '24px',  // xlarge
  },

  radius: {
    xs: '3px',      // small
    sm: '5px',      // medium
    md: '8px',      // large
    lg: '8px',      // large (same as md, no larger defined except full)
    xl: '100vmax',  // full
  },

  shadows: {
    xs: '0 1px 2px 0 rgba(1, 22, 39, 0.1)',    // xsmall
    sm: '0 2px 4px 0 rgba(1, 22, 39, 0.12)',   // small
    md: '0 4px 8px 0 rgba(1, 22, 39, 0.15)',   // medium
    lg: '0 4px 10px 0 rgba(1, 22, 39, 0.2)',   // large
    xl: '0 4px 12px 0 rgba(1, 22, 39, 0.25)',  // xlarge
  },

  fontSizes: {
    xs: '10px',  // xxsmall
    sm: '12px',  // xsmall
    md: '14px',  // small
    lg: '16px',  // medium
    xl: '18px',  // large
  },

  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },

  breakpoints: {
    xs: '25.75em',   // 412px
    sm: '35.125em',  // 562px
    md: '48em',      // 768px
    lg: '64em',      // 1024px
    xl: '83.75em',   // 1340px
  },

  other: {
    // Additional spacing values not in Mantine defaults
    spacing: {
      none: '0px',
      hair: '1px',
      xxxsmall: '2px',
      xxsmall: '4px',
      xxlarge: '32px',
      xxxlarge: '64px',
    },

    // Icon sizes
    iconSizes: {
      xxsmall: '8px',
      xsmall: '12px',
      small: '16px',
      medium: '24px',
      large: '32px',
      xlarge: '40px',
      xxlarge: '64px',
    },

    // Letter spacing
    letterSpacing: {
      none: '0',
      xsmall: '0.1px',
      small: '0.5px',
      medium: '1px',
      large: '1.6px',
    },

    // Font weights
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // Font families
    fontFamilies: {
      sans: "'Satoshi', system-ui, -apple-system, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, monospace",
    },

    // Border widths
    borderWidths: {
      xsmall: '1px',
      small: '2px',
      medium: '4px',
      large: '8px',
      xlarge: '16px',
    },

    // Extended breakpoints
    breakpoints: {
      xxsmall: '412px',
      xlarge: '1750px',
    },
  },
};

export default theme;
