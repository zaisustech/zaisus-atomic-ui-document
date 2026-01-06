---
slug: welcome-atomic-ui
title: Welcome to Atomic UI
authors:
  - addlin
  - kumaran
tags:
  - announcement
  - atomic-design
---

We're excited to introduce **@zaisustech/atomic-ui**, a comprehensive React Native component library built with Atomic Design methodology.

<!-- truncate -->

## What is Atomic UI?

Atomic UI is a React Native component library that follows the Atomic Design methodology, breaking down user interfaces into hierarchical components. This approach helps create robust, scalable, and consistent user interfaces.

## Key Features

- 🎨 **24+ Pre-built Components** - Ready-to-use components for your React Native apps
- 🎯 **Atomic Design Methodology** - Components organized by complexity and reusability
- 🎨 **Theme Support** - Built-in theming system with customizable styles
- 📱 **React Native & Expo** - Built specifically for React Native and Expo projects
- ♿ **Accessible** - Components designed with accessibility in mind
- 🎭 **TypeScript** - Full TypeScript support with type definitions
- 🎨 **Customizable** - Flexible styling and theming options

## Getting Started

Getting started with Atomic UI is simple:

1. **Install the package** (see [Installation Guide](/docs/installation))
2. **Wrap your app** with required providers
3. **Start using components**

```tsx
import { ThemeProvider, ToastProvider, Button, Text } from '@zaisustech/atomic-ui';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Text variant="Header.large.bold">Welcome to Atomic UI</Text>
        <Button title="Get Started" onPress={() => console.log('Hello!')} />
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## Explore the Components

Check out our [component documentation](/docs/components/accordion) to see all available components, their props, and usage examples.

## Contributing

We welcome contributions! If you'd like to contribute, please read our [Contributing Guide](https://github.com/zaisustech/zaisus-atomic-ui/blob/main/CONTRIBUTING.md).

Stay tuned for more updates and new components!

