/**
 * Raw design tokens - framework agnostic.
 * Import framework-specific configs from 'theme/mantine', 'theme/tailwind', etc.
 */

export const color = {
  gray: {
    100: '#ffffff',
    200: '#fdfcfc',
    300: '#f8f6f7',
    400: '#efeded',
    500: '#e5e5e5',
    600: '#d7d7d7',
    700: '#bdbdbd',
    800: '#717171',
    900: '#464646',
    1000: '#011627',
  },
  blue: {
    100: '#f9f9ff',
    200: '#f2f3ff',
    300: '#e8ecff',
    400: '#dbe1ff',
    500: '#d1d9ff',
    600: '#acbafe',
    700: '#6276ff',
    800: '#3751ff',
    900: '#303ce5',
    1000: '#1c1ccb',
  },
  purple: {
    100: '#f8f8ff',
    200: '#f1f0ff',
    300: '#eae7ff',
    400: '#e2deff',
    500: '#d6d0ff',
    600: '#a585ff',
    700: '#7435f8',
    800: '#620dec',
    900: '#4926b2',
    1000: '#372f78',
  },
  yellow: {
    100: '#fffef5',
    200: '#fffde0',
    300: '#fffdcb',
    400: '#fffca2',
    500: '#fffc78',
    600: '#fff500',
    700: '#ffe81b',
    800: '#fedd00',
    900: '#ffd000',
    1000: '#ffc400',
  },
  teal: {
    100: '#f6fcfd',
    200: '#edf8fa',
    300: '#def3f7',
    400: '#bde8ef',
    500: '#96dce7',
    600: '#68cbda',
    700: '#29b5c9',
    800: '#12aabf',
    900: '#078a9c',
    1000: '#016f7d',
  },
  red: {
    100: '#fff9f9',
    200: '#fff2f3',
    300: '#ffdde0',
    400: '#ffbdc3',
    500: '#ff9ea6',
    600: '#ff7f89',
    700: '#ff4d5a',
    800: '#eb111c',
    900: '#c50e14',
    1000: '#b11018',
  },
  orange: {
    100: '#fcf8ef',
    200: '#fff3d7',
    300: '#ffecbe',
    400: '#ffe5a6',
    500: '#ffde8e',
    600: '#ffcd65',
    700: '#ffbe47',
    800: '#fdb735',
    900: '#ffaa1c',
    1000: '#ff9d0a',
  },
  green: {
    100: '#f2fff8',
    200: '#ddffed',
    300: '#bdffdc',
    400: '#97fec9',
    500: '#7df1b6',
    600: '#43d98d',
    700: '#15ab64',
    800: '#00874a',
    900: '#006537',
    1000: '#00562f',
  },
};

export const spacing = {
  none: '0px',
  hair: '1px',
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '20px',
  xlarge: '24px',
  xxlarge: '32px',
  xxxlarge: '64px',
};

export const fontSize = {
  xxsmall: '10px',
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  h6: '14px',
  h5: '16px',
  h4: '18px',
  h3: '22px',
  h2: '26px',
  h1: '34px',
};

export const fontFamily = {
  sans: "'Satoshi', system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const lineHeight = {
  tight: '1.3',
  normal: '1.45',
  relaxed: '1.55',
  loose: '1.65',
};

export const letterSpacing = {
  none: '0',
  xsmall: '0.1px',
  small: '0.5px',
  medium: '1px',
  large: '1.6px',
};

export const borderRadius = {
  small: '3px',
  medium: '5px',
  large: '8px',
  full: '100vmax',
};

export const borderWidth = {
  xsmall: '1px',
  small: '2px',
  medium: '4px',
  large: '8px',
  xlarge: '16px',
};

export const boxShadow = {
  xsmall: '0 1px 2px 0 rgba(1, 22, 39, 0.1)',
  small: '0 2px 4px 0 rgba(1, 22, 39, 0.12)',
  medium: '0 4px 8px 0 rgba(1, 22, 39, 0.15)',
  large: '0 4px 10px 0 rgba(1, 22, 39, 0.2)',
  xlarge: '0 4px 12px 0 rgba(1, 22, 39, 0.25)',
};

export const breakpoint = {
  xxsmall: '412px',
  xsmall: '562px',
  small: '768px',
  medium: '1024px',
  large: '1340px',
  xlarge: '1750px',
};

export const iconSize = {
  xxsmall: '8px',
  xsmall: '12px',
  small: '16px',
  medium: '24px',
  large: '32px',
  xlarge: '40px',
  xxlarge: '64px',
};

export default {
  color,
  spacing,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  borderRadius,
  borderWidth,
  boxShadow,
  breakpoint,
  iconSize,
};
