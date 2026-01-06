// Mock TurboModuleRegistry for react-native-safe-area-context in web
// This is a React Native internal module that doesn't exist in react-native-web

export function get(name) {
  // Return a mock TurboModule with no-op methods
  return {
    getConstants: () => ({}),
  };
}

export function getEnforcing(name) {
  return get(name);
}

export default {
  get,
  getEnforcing,
};

