// Mock codegenNativeComponent for react-native-safe-area-context in web
// This is a React Native internal module that doesn't exist in react-native-web

import React from 'react';

export function codegenNativeComponent(componentName, options) {
  // Return a mock component that just renders its children
  return React.forwardRef((props, ref) => {
    return React.createElement('div', { ...props, ref });
  });
}

export default codegenNativeComponent;

