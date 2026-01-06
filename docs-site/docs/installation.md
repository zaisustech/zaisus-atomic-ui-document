---
sidebar_position: 2
---

# Installation

This guide will help you install and configure **@zaisustech/atomic-ui** in your React Native project.

## Prerequisites

- Node.js 20.0 or above
- React Native 0.81.5 or above
- Expo SDK (if using Expo)
- Yarn or npm package manager

## Authentication

This package is hosted on GitHub Packages and is **private**. You must authenticate before installing.

### 1. Generate a GitHub Personal Access Token (PAT)

1. Go to **GitHub → Settings → Developer settings**
2. Open **Personal access tokens**
3. Create a **Classic token**
4. Enable scopes:
   - ✅ `read:packages`
   - ✅ `repo` (required for private repos)
5. Copy the token (you won't see it again)

### 2. Configure npm / yarn authentication

#### Option A — Project-level .npmrc (Recommended)

Create `.npmrc` in your project root:

```bash
@zaisustech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

🔒 **Important**: Do NOT commit this file. Add it to `.gitignore`.

#### Option B — Global configuration

```bash
npm config set @zaisustech:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken YOUR_GITHUB_TOKEN
```

## Install the Package

```bash
npm install @zaisustech/atomic-ui
# or
yarn add @zaisustech/atomic-ui
```

## Required Peer Dependencies

### Native Modules (use expo install)

Use `expo install` for native modules to ensure version compatibility:

```bash
npx expo install \
  expo-font \
  expo-modules-core \
  react-native-reanimated \
  react-native-safe-area-context \
  react-native-svg
```

### JavaScript Dependencies

Install the remaining JS-only dependencies:

```bash
yarn add \
  i18next \
  react-i18next \
  react-native-modal \
  @expo/vector-icons
```

Or with npm:

```bash
npm install \
  i18next \
  react-i18next \
  react-native-modal \
  @expo/vector-icons
```

## Basic Setup

Wrap your app with the required providers to enable full functionality:

```tsx
import { ThemeProvider, ToastProvider } from '@zaisustech/atomic-ui';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        {/* Your app content */}
      </ToastProvider>
    </ThemeProvider>
  );
}
```

### Additional Providers

Some components require additional providers:

#### DropdownField

```tsx
import { DropdownProvider } from '@zaisustech/atomic-ui';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <DropdownProvider>
          {/* Your app content */}
        </DropdownProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## Verify Installation

Create a simple test component to verify everything is working:

```tsx
import { Button, Text, ThemeProvider, ToastProvider } from '@zaisustech/atomic-ui';

function TestApp() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Text variant="Header.large.bold">Atomic UI</Text>
        <Button 
          title="Test Button" 
          onPress={() => console.log('Button pressed!')} 
        />
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## Troubleshooting

### Authentication Issues

If you encounter authentication errors:

1. Verify your GitHub token has the correct scopes
2. Check that your `.npmrc` file is in the project root
3. Ensure the token hasn't expired
4. Try regenerating the token

### Native Module Issues

If you encounter issues with native modules:

1. Clear your build cache: `yarn clean` or `npm run clean`
2. Reinstall pods (iOS): `cd ios && pod install`
3. Rebuild the app completely
4. Ensure you're using compatible versions (check peer dependencies)

### Metro Bundler Issues

If Metro bundler has issues:

1. Clear Metro cache: `yarn start --reset-cache`
2. Clear watchman: `watchman watch-del-all`
3. Delete `node_modules` and reinstall

## Next Steps

- Read the [Component Documentation](/docs/components/accordion) to learn about available components
- Check out the [Getting Started Guide](/docs/intro) for usage examples

