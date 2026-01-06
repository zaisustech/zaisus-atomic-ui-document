import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type TextPreviewProps = {
  variant?: string;
  showMultiple?: boolean;
};

/**
 * TextPreview renders the Text component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function TextPreview({
  variant = 'Paragraph.default.regular',
  showMultiple = false,
}: TextPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="Header.large.bold">Header Variants</Text>
            <Text variant="Header.large.bold">Header.large.bold</Text>
            <Text variant="Header.large.regular">Header.large.regular</Text>
            <Text variant="Header.default.bold">Header.default.bold</Text>
            <Text variant="Header.default.regular">Header.default.regular</Text>
            <Text variant="Header.small.bold">Header.small.bold</Text>
            <Text variant="Header.small.regular">Header.small.regular</Text>
          </View>

          <View style={styles.section}>
            <Text variant="Header.large.bold">Paragraph Variants</Text>
            <Text variant="Paragraph.large.bold">Paragraph.large.bold</Text>
            <Text variant="Paragraph.large.regular">Paragraph.large.regular</Text>
            <Text variant="Paragraph.default.bold">Paragraph.default.bold</Text>
            <Text variant="Paragraph.default.regular">Paragraph.default.regular</Text>
            <Text variant="Paragraph.small.bold">Paragraph.small.bold</Text>
            <Text variant="Paragraph.small.regular">Paragraph.small.regular</Text>
          </View>

          <View style={styles.section}>
            <Text variant="Header.large.bold">Label Variants</Text>
            <Text variant="Label.bold">Label.bold</Text>
            <Text variant="Label.regular">Label.regular</Text>
            <Text variant="Label.small">Label.small</Text>
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <Text variant={variant as any}>Sample text with {variant} variant</Text>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: '100%',
    alignItems: 'stretch',
  },
  section: {
    gap: 8,
    width: '100%',
  },
});


