import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// @ts-ignore - TypeScript may not resolve workspace packages correctly, but it works at runtime
import { ThemeProvider, ToastProvider } from '@zaisustech/atomic-ui';
import i18n from '../../utils/i18n';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { View, Text, StyleSheet } from 'react-native';

type ComponentPreviewProps = {
  children: React.ReactNode;
  title?: string;
};

/**
 * ComponentPreview wraps React Native components with all necessary providers
 * to render them in the Docusaurus documentation site using React Native Web.
 * 
 * Note: SafeAreaProvider is required because Toast, ActionSheet, and DropdownField
 * components use useSafeAreaInsets hook. On web, it returns 0 insets which is fine.
 */
export function ComponentPreview({ children, title }: ComponentPreviewProps) {

  return (
    <BrowserOnly>
      {() => (
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <ThemeProvider>
              <ToastProvider>
                {title ? (
                  <Text style={styles.title}>{title}</Text>
                ) : null}

                <View style={styles.container}>
                  {children}
                </View>
              </ToastProvider>
            </ThemeProvider>
          </SafeAreaProvider>
        </I18nextProvider>
      )}
    </BrowserOnly>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    minHeight: 100,
    marginTop: 20,
    marginBottom: 20,
  },
});
