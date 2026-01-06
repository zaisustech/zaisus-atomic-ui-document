// Polyfill to fix CSSStyleDeclaration indexed property setter issue
// React Native Web sometimes tries to set styles using indexed assignment (e.g., style[0] = 'color: red')
// which browsers don't support. This polyfill wraps style objects with a Proxy to intercept indexed access.

(function() {
  'use strict';
  
  if (typeof window === 'undefined' || !window.CSSStyleDeclaration) {
    return;
  }

  const styleCache = new WeakMap();
  
  // Helper to create a proxied style object
  function createStyleProxy(style) {
    if (styleCache.has(style)) {
      return styleCache.get(style);
    }

    const proxy = new Proxy(style, {
      set: function(target, property, value) {
        // Handle numeric index assignment (e.g., style[0] = 'color: red')
        if (typeof property === 'string' && /^\d+$/.test(property)) {
          const index = parseInt(property, 10);
          if (typeof value === 'string') {
            // If value is a CSS property string like "color: red", parse and set it
            if (value.includes(':')) {
              const colonIndex = value.indexOf(':');
              const prop = value.substring(0, colonIndex).trim();
              const val = value.substring(colonIndex + 1).trim();
              if (prop && val !== undefined) {
                try {
                  CSSStyleDeclaration.prototype.setProperty.call(target, prop, val);
                } catch (e) {
                  // If setProperty fails, silently ignore (some properties might not be settable)
                }
                return true;
              }
            }
            // Otherwise, silently ignore indexed assignments that aren't CSS properties
            // React Native Web sometimes does this but it's not critical
            return true;
          }
        }
        // For non-numeric properties, use default behavior
        target[property] = value;
        return true;
      },
      get: function(target, property) {
        // Handle numeric index access
        if (typeof property === 'string' && /^\d+$/.test(property)) {
          const index = parseInt(property, 10);
          const parts = (target.cssText || '').split(';').filter(Boolean);
          return parts[index] || '';
        }
        const value = target[property];
        if (typeof value === 'function') {
          return value.bind(target);
        }
        return value;
      }
    });

    styleCache.set(style, proxy);
    return proxy;
  }

  // Patch document.createElement to wrap style objects
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName, options) {
    const element = originalCreateElement.call(this, tagName, options);
    
    if (element.style) {
      const proxiedStyle = createStyleProxy(element.style);
      Object.defineProperty(element, 'style', {
        get: () => proxiedStyle,
        configurable: true,
        enumerable: true,
      });
    }
    
    return element;
  };

  // Patch getComputedStyle to return proxied styles
  const originalGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = function(element, pseudoElement) {
    const style = originalGetComputedStyle.call(this, element, pseudoElement);
    return createStyleProxy(style);
  };

  // Also try to patch CSSStyleDeclaration.prototype with a Proxy trap
  // This is a fallback for cases where createElement isn't used
  try {
    const OriginalCSSStyleDeclaration = window.CSSStyleDeclaration;
    window.CSSStyleDeclaration = function() {
      const instance = new OriginalCSSStyleDeclaration();
      return createStyleProxy(instance);
    };
    window.CSSStyleDeclaration.prototype = OriginalCSSStyleDeclaration.prototype;
  } catch (e) {
    // If we can't patch the constructor, that's okay - createElement patching should be enough
  }
})();

