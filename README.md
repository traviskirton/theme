# Theme

Design tokens for consistent styling across projects.

## Installation

```bash
# npm
npm install git+https://github.com/traviskirton/theme.git

# yarn
yarn add git+https://github.com/traviskirton/theme.git

# pnpm
pnpm add git+https://github.com/traviskirton/theme.git
```

## Usage

### Raw Tokens

```js
import tokens from 'theme';

tokens.color.blue[800];     // '#3751ff'
tokens.spacing.medium;      // '16px'
tokens.fontFamily.sans;     // "'Satoshi', system-ui, -apple-system, sans-serif"

// Named imports
import { color, spacing, fontSize } from 'theme';
```

### Mantine

```tsx
import { MantineProvider } from '@mantine/core';
import { theme } from 'theme/mantine';

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* your app */}
    </MantineProvider>
  );
}
```

## Fonts

This theme uses **Satoshi** (sans-serif) and **JetBrains Mono** (monospace). Load them via CDN or self-host.

### CDN

```html
<!-- Satoshi from Fontshare -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet">

<!-- JetBrains Mono from Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
```

### npm

```bash
npm install @fontsource/jetbrains-mono
```

```js
import '@fontsource/jetbrains-mono';
```

Note: Satoshi is not available on npm. Use the Fontshare CDN or [download it](https://www.fontshare.com/fonts/satoshi) for self-hosting.

## Available Tokens

| Category | Keys |
|----------|------|
| `color` | gray, blue, purple, yellow, teal, red, orange, green (each with 100-1000) |
| `spacing` | none, hair, xxxsmall, xxsmall, xsmall, small, medium, large, xlarge, xxlarge, xxxlarge |
| `fontSize` | xxsmall, xsmall, small, medium, large, h1-h6 |
| `fontFamily` | sans, mono |
| `fontWeight` | regular, medium, semibold, bold |
| `lineHeight` | tight, normal, relaxed, loose |
| `letterSpacing` | none, xsmall, small, medium, large |
| `borderRadius` | small, medium, large, full |
| `borderWidth` | xsmall, small, medium, large, xlarge |
| `boxShadow` | xsmall, small, medium, large, xlarge |
| `breakpoint` | xxsmall, xsmall, small, medium, large, xlarge |
| `iconSize` | xxsmall, xsmall, small, medium, large, xlarge, xxlarge |
