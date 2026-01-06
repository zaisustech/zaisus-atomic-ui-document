import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacer, Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type SpacerPreviewProps = {
  orientation?: 'horizontal' | 'vertical';
  spacing?: number;
  showMultiple?: boolean;
};

/**
 * SpacerPreview renders the Spacer component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function SpacerPreview({
  orientation = 'vertical',
  spacing,
  showMultiple = false,
}: SpacerPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Vertical Spacers:</Text>
            <View style={styles.verticalDemo}>
              <View style={styles.box}>
                <Text variant="Paragraph.small.regular">Item 1</Text>
              </View>
              <Spacer orientation="vertical" spacing={16} />
              <View style={styles.box}>
                <Text variant="Paragraph.small.regular">Item 2</Text>
              </View>
              <Spacer orientation="vertical" spacing={24} />
              <View style={styles.box}>
                <Text variant="Paragraph.small.regular">Item 3</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Horizontal Spacers:</Text>
            <View style={styles.horizontalDemo}>
              <View style={styles.box}>
                <Text variant="Paragraph.small.regular">Left</Text>
              </View>
              <Spacer orientation="horizontal" spacing={16} />
              <View style={styles.box}>
                <Text variant="Paragraph.small.regular">Middle</Text>
              </View>
              <Spacer orientation="horizontal" spacing={24} />
              <View style={styles.box}>
                <Text variant="Paragraph.small.regular">Right</Text>
              </View>
            </View>
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        {orientation === 'vertical' ? (
          <>
            <Text variant="Paragraph.default.regular">First item</Text>
            <Spacer orientation="vertical" spacing={spacing} />
            <Text variant="Paragraph.default.regular">Second item</Text>
          </>
        ) : (
          <View style={styles.horizontalDemo}>
            <Text variant="Paragraph.default.regular">Left</Text>
            <Spacer orientation="horizontal" spacing={spacing} />
            <Text variant="Paragraph.default.regular">Right</Text>
          </View>
        )}
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
    width: '100%',
    alignItems: 'stretch',
  },
  section: {
    gap: 12,
    width: '100%',
  },
  verticalDemo: {
    alignItems: 'flex-start',
  },
  horizontalDemo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#e3f2fd',
    padding: 8,
    borderRadius: 4,
  },
});


