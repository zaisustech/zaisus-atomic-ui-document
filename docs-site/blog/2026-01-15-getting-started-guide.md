---
slug: getting-started-guide
title: Getting Started with Atomic UI
authors:
  - addlin
  - kumaran
tags:
  - tutorial
  - react-native
---

A comprehensive guide to help you get started with Atomic UI in your React Native project.

<!-- truncate -->

## Installation

First, you'll need to set up authentication since Atomic UI is a private package hosted on GitHub Packages. Follow our [installation guide](/docs/installation) for detailed steps.

## Basic Setup

Once installed, wrap your app with the required providers:

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

## Your First Component

Let's create a simple example using a few components:

```tsx
import { Button, Text, Card } from '@zaisustech/atomic-ui';

function MyScreen() {
  return (
    <View>
      <Text variant="Header.large.bold">My App</Text>
      <Card variant="medium">
        <Text variant="Paragraph.default.regular">
          This is a card component with medium shadow.
        </Text>
        <Button 
          title="Click Me" 
          variant="primary"
          onPress={() => console.log('Button pressed!')}
        />
      </Card>
    </View>
  );
}
```

## Next Steps

- Explore all available [components](/docs/components/accordion)
- Learn about [theming and customization](/docs/intro)
- Check out component-specific examples in the documentation

Happy coding! 🚀

