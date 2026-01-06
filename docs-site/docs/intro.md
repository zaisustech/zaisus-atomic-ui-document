---
sidebar_position: 1
---

# Introduction

**@zaisustech/atomic-ui** is a React Native component library built using the Atomic Design methodology. It provides a comprehensive set of reusable, scalable, and consistent UI components for building modern mobile applications.

## What is Atomic Design?

Atomic UI refers to the Atomic Design methodology, a system for creating robust, scalable, and consistent user interfaces by breaking them into hierarchical components. This approach helps maintain design consistency and makes it easier to build and maintain complex UIs.

## Features

- 🎨 **Comprehensive Component Library** - Over 20 pre-built components ready to use
- 🎯 **Atomic Design Methodology** - Components organized by complexity and reusability
- 🎨 **Theme Support** - Built-in theming system with customizable styles
- 📱 **React Native** - Built specifically for React Native and Expo
- ♿ **Accessible** - Components designed with accessibility in mind
- 🎭 **TypeScript** - Full TypeScript support with type definitions
- 🎨 **Customizable** - Flexible styling and theming options

## Quick Start

Get started with Atomic UI in just a few steps:

1. **Install the package** (see [Installation](/docs/installation))
2. **Wrap your app** with required providers
3. **Start using components**

```tsx
import { ThemeProvider, ToastProvider, Button, Text } from '@zaisustech/atomic-ui';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Button title="Hello World" onPress={() => console.log('Pressed')} />
        <Text variant="Paragraph.default.regular">Welcome to Atomic UI</Text>
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## Package Information

- **Package Name**: `@zaisustech/atomic-ui`
- **Registry**: GitHub Packages (Private)
- **License**: MIT
- **Repository**: [zaisustech/zaisus-atomic-ui](https://github.com/zaisustech/zaisus-atomic-ui)

## What's Next?

- Read the [Installation Guide](/docs/installation) to get started
- Browse the [Components](/docs/components/accordion) documentation
- Check out the [Contributing Guide](https://github.com/zaisustech/zaisus-atomic-ui/blob/main/CONTRIBUTING.md) if you want to contribute
