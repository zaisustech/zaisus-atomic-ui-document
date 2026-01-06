import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type DividerPreviewProps = {
  orientation?: 'horizontal' | 'vertical';
  showMultiple?: boolean;
};

/**
 * DividerPreview renders the Divider component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function DividerPreview({
  orientation = 'horizontal',
  showMultiple = false,
}: DividerPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Content above</Text>
            <Divider orientation="horizontal" />
            <Text variant="Paragraph.default.regular">Content below</Text>
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Multiple horizontal dividers:</Text>
            <Text variant="Paragraph.small.regular">First section</Text>
            <Divider orientation="horizontal" />
            <Text variant="Paragraph.small.regular">Second section</Text>
            <Divider orientation="horizontal" />
            <Text variant="Paragraph.small.regular">Third section</Text>
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Vertical divider:</Text>
            <View style={styles.verticalContainer}>
              <Text variant="Paragraph.small.regular">Left</Text>
              <Divider orientation="vertical" />
              <Text variant="Paragraph.small.regular">Right</Text>
            </View>
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Text variant="Paragraph.default.regular">Content above</Text>
        <Divider orientation={orientation} />
        <Text variant="Paragraph.default.regular">Content below</Text>
      </View>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    gap: 12,
    width: '100%',
    alignItems: 'stretch',
  },
  section: {
    gap: 12,
    width: '100%',
  },
  verticalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 40,
  },
});


