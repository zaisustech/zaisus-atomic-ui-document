import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Atomic UI',
  tagline:
    'A React Native component library built with Atomic Design methodology',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://zaisustech.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/zaisus-atomic-ui-document/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zaisustech', // Usually your GitHub org/user name.
  projectName: 'zaisus-atomic-ui-document', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zaisustech/zaisus-atomic-ui/tree/main/docs-site/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zaisustech/zaisus-atomic-ui/tree/main/docs-site/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Client modules that run before the app
  clientModules: [
    require.resolve('./src/utils/css-style-polyfill.js'),
  ],

  plugins: [
    function (context, options) {
      return {
        name: 'css-style-polyfill-plugin',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
                  (function() {
                    'use strict';
                    if (typeof window === 'undefined' || !window.CSSStyleDeclaration) return;
                    const styleCache = new WeakMap();
                    function createStyleProxy(style) {
                      if (styleCache.has(style)) return styleCache.get(style);
                      const proxy = new Proxy(style, {
                        set: function(target, property, value) {
                          if (typeof property === 'string' && /^\\d+$/.test(property)) {
                              if (typeof value === 'string' && value.includes(':')) {
                                const [prop, val] = value.split(':').map(s => s.trim());
                                if (prop && val) {
                                  try {
                                    // Use call to ensure proper context binding - fixes "Illegal invocation" error
                                    CSSStyleDeclaration.prototype.setProperty.call(target, prop, val);
                                  } catch (e) {
                                    // Silently ignore if setProperty fails
                                  }
                                  return true;
                                }
                              }
                            return true; // Silently ignore other indexed assignments
                          }
                          target[property] = value;
                          return true;
                        },
                        get: function(target, property) {
                          if (typeof property === 'string' && /^\\d+$/.test(property)) {
                            const parts = (target.cssText || '').split(';').filter(Boolean);
                            return parts[parseInt(property, 10)] || '';
                          }
                          // For methods, bind them to the target to preserve context
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
                    const originalGetComputedStyle = window.getComputedStyle;
                    window.getComputedStyle = function(element, pseudoElement) {
                      const style = originalGetComputedStyle.call(this, element, pseudoElement);
                      return createStyleProxy(style);
                    };
                  })();
                `,
              },
            ],
          };
        },
      };
    },
    function (context, options) {
      return {
        name: 'react-native-web-plugin',
        configureWebpack(config, isServer) {
          const path = require('path');
          const webpack = require('webpack');
          
          // Add babel-loader rules for packages with JSX in source
          // These need to run BEFORE the default exclude rules
          const babelLoaderRule = {
            test: /\.(js|jsx)$/,
            include: [
              path.resolve(__dirname, '../node_modules/@expo/vector-icons'),
              path.resolve(__dirname, '../node_modules/react-native-animatable'),
            ],
            use: {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  [require.resolve('@babel/preset-env'), { modules: false }],
                  [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
                ],
              },
            },
          };
          
          // Insert our rule at the beginning so it runs first
          config.module.rules.unshift(babelLoaderRule);
          
          return {
            resolve: {
              alias: {
                // Mock React Native internal modules for react-native-safe-area-context
                // These MUST come before the general 'react-native$' alias
                'react-native/Libraries/Utilities/codegenNativeComponent': path.resolve(__dirname, './src/utils/react-native-codegen-mock.js'),
                'react-native/Libraries/TurboModule/TurboModuleRegistry': path.resolve(__dirname, './src/utils/react-native-turbo-mock.js'),
                'react-native/Libraries/Image/AssetRegistry': 'react-native-web/dist/exports/Image/AssetRegistry',
                'react-native$': 'react-native-web',
                // Mock react-native-safe-area-context for web
                'react-native-safe-area-context': path.resolve(__dirname, './src/utils/safe-area-web-mock.tsx'),
                // Mock expo-font for web (not needed in browser)
                'expo-font': path.resolve(__dirname, './src/utils/expo-font-mock.js'),
                // Use built output - make sure to run 'yarn prepare' in root to build the package
                '@zaisustech/atomic-ui': path.resolve(__dirname, '../src/index.ts'),
              },
              extensions: ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx', '.json'],
              fallback: {
                buffer: require.resolve('buffer/'),
              },
            },
            plugins: [
              new webpack.DefinePlugin({
                __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
              }),
            
              // Ignore React Native's Flow files
              new webpack.IgnorePlugin({
                resourceRegExp: /\.flow$/,
              }),
              // Replace React Native internal modules with mocks
              // This MUST come before any IgnorePlugin that might exclude these paths
              new webpack.NormalModuleReplacementPlugin(
                /react-native\/Libraries\/Utilities\/codegenNativeComponent/,
                path.resolve(__dirname, './src/utils/react-native-codegen-mock.js')
              ),
              new webpack.NormalModuleReplacementPlugin(
                /react-native\/Libraries\/TurboModule\/TurboModuleRegistry/,
                path.resolve(__dirname, './src/utils/react-native-turbo-mock.js')
              ),
              new webpack.NormalModuleReplacementPlugin(
                /react-native\/Libraries\/SafeAreaContext\/SafeAreaProvider/,
                path.resolve(__dirname, './src/utils/safe-area-web-mock.tsx')
              ),
              // Provide buffer polyfill
              new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
              }),
            ],
          };
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Atomic UI',
      logo: {
        alt: 'Atomic UI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/zaisustech/zaisus-atomic-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/installation',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zaisustech/zaisus-atomic-ui',
            },
            {
              label: 'Issues',
              href: 'https://github.com/zaisustech/zaisus-atomic-ui/issues',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/zaisustech/zaisus-atomic-ui/blob/main/CONTRIBUTING.md',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'License',
              href: 'https://github.com/zaisustech/zaisus-atomic-ui/blob/main/LICENSE',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zaisus Technologies. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
