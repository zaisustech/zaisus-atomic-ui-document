# React Native Web Setup for Docs Site

This documentation site now supports rendering React Native components using React Native Web.

## Installation

Install the required dependencies:

```bash
cd docs-site
yarn install
```

The following dependencies are required:
- `react-native-web` - React Native Web for browser rendering
- `react-native-safe-area-context` - Safe area context provider
- `react-native-svg` - SVG support
- `@expo/vector-icons` - Icon library
- `i18next` and `react-i18next` - Internationalization
- `@zaisustech/atomic-ui` - The atomic-ui package (workspace dependency)

## Usage

### ComponentPreview

Use the `ComponentPreview` wrapper to render any React Native component:

```tsx
import { ComponentPreview } from '@site/src/components/ComponentPreview';
import { Button } from '@zaisustech/atomic-ui';

<ComponentPreview>
  <Button title="Press me" onPress={() => {}} />
</ComponentPreview>
```

### ButtonPreview

For Button components specifically, use the `ButtonPreview` component:

```tsx
import { ButtonPreview } from '@site/src/components/ButtonPreview';

<ButtonPreview variant="primary" title="Click me" />
<ButtonPreview showMultiple={true} />
```

## Configuration

The Docusaurus configuration includes:
- Webpack aliases for React Native Web
- Path resolution for the atomic-ui package
- Babel configuration for transpiling React Native components

## Notes

- Components are wrapped with all necessary providers (ThemeProvider, ToastProvider, SafeAreaProvider, I18nextProvider)
- TypeScript may show errors for workspace package imports, but they work at runtime
- The webpack configuration handles React Native to Web transformations

