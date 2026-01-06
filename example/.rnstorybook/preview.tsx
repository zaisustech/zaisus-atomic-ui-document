import React from 'react';
import { ThemeProvider, defaultTheme, ToastProvider } from '@zaisustech/atomic-ui';
import type { Preview } from '@storybook/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <ToastProvider>
          <I18nextProvider i18n={i18n} >
            <SafeAreaProvider>
              <Story />
            </SafeAreaProvider>
          </I18nextProvider>
        </ToastProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview;