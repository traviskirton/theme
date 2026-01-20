/**
 * Raw design tokens - framework agnostic.
 */

export declare const color: {
  gray: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
  blue: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
  purple: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
  yellow: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
  teal: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
  red: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
  orange: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
  green: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;
};

export declare const spacing: {
  none: string;
  hair: string;
  xxxsmall: string;
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
};

export declare const fontSize: {
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  h6: string;
  h5: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
};

export declare const fontFamily: {
  sans: string;
  mono: string;
};

export declare const fontWeight: {
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
};

export declare const lineHeight: {
  tight: string;
  normal: string;
  relaxed: string;
  loose: string;
};

export declare const letterSpacing: {
  none: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
};

export declare const borderRadius: {
  small: string;
  medium: string;
  large: string;
  full: string;
};

export declare const borderWidth: {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
};

export declare const boxShadow: {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
};

export declare const breakpoint: {
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
};

export declare const iconSize: {
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
};

declare const tokens: {
  color: typeof color;
  spacing: typeof spacing;
  fontSize: typeof fontSize;
  fontFamily: typeof fontFamily;
  fontWeight: typeof fontWeight;
  lineHeight: typeof lineHeight;
  letterSpacing: typeof letterSpacing;
  borderRadius: typeof borderRadius;
  borderWidth: typeof borderWidth;
  boxShadow: typeof boxShadow;
  breakpoint: typeof breakpoint;
  iconSize: typeof iconSize;
};

export default tokens;
