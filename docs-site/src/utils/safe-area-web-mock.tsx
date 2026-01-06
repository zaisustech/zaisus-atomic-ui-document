import * as React from 'react';
import { View, Text } from 'react-native';

export const SafeAreaProvider = ({ children }: any) => {
  return <View>{children}</View>;
};

export const SafeAreaView = ({ children, style }: any) => {
  return (
    <View style={style}>
      <View style={{ padding: 10, backgroundColor: '#e0e0e0', marginBottom: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>
          SafeAreaView Mock (Web)
        </Text>
      </View>
      {children}
    </View>
  );
};

export const useSafeAreaInsets = () => ({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

// Export initialWindowMetrics for compatibility
export const initialWindowMetrics = {
  insets: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  frame: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
};