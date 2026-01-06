import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type CardPreviewProps = {
  variant?: 'light' | 'thin' | 'medium' | 'thick' | 'heavy';
  borderRadius?: number;
  shadowOpacity?: number;
  shadowColor?: string;
  showMultiple?: boolean;
};

/**
 * CardPreview renders the Card component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function CardPreview({
  variant = 'medium',
  borderRadius,
  shadowOpacity,
  shadowColor,
  showMultiple = false,
}: CardPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <Card variant="light" style={styles.card}>
            <Text variant="Paragraph.default.bold">Light Shadow</Text>
            <Text variant="Paragraph.small.regular" style={styles.content}>
              Subtle shadow for minimal elevation
            </Text>
          </Card>

          <Card variant="thin" style={styles.card}>
            <Text variant="Paragraph.default.bold">Thin Shadow</Text>
            <Text variant="Paragraph.small.regular" style={styles.content}>
              Light shadow for slight elevation
            </Text>
          </Card>

          <Card variant="medium" style={styles.card}>
            <Text variant="Paragraph.default.bold">Medium Shadow</Text>
            <Text variant="Paragraph.small.regular" style={styles.content}>
              Moderate shadow for standard elevation
            </Text>
          </Card>

          <Card variant="thick" style={styles.card}>
            <Text variant="Paragraph.default.bold">Thick Shadow</Text>
            <Text variant="Paragraph.small.regular" style={styles.content}>
              Strong shadow for high elevation
            </Text>
          </Card>

          <Card variant="heavy" style={styles.card}>
            <Text variant="Paragraph.default.bold">Heavy Shadow</Text>
            <Text variant="Paragraph.small.regular" style={styles.content}>
              Very strong shadow for maximum elevation
            </Text>
          </Card>

          <Card
            variant="medium"
            borderRadius={16}
            shadowOpacity={0.5}
            shadowColor="#9B59B6"
            style={styles.card}
          >
            <Text variant="Paragraph.default.bold">Custom Styled Card</Text>
            <Text variant="Paragraph.small.regular" style={styles.content}>
              Custom border radius, shadow opacity, and shadow color
            </Text>
          </Card>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Card
          variant={variant}
          borderRadius={borderRadius}
          shadowOpacity={shadowOpacity}
          shadowColor={shadowColor}
          style={styles.card}
        >
          <Text variant="Paragraph.default.bold">Card Title</Text>
          <Text variant="Paragraph.small.regular" style={styles.content}>
            Card content goes here. This is a preview of the Card component.
          </Text>
        </Card>
      </View>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
  card: {
    padding: 16,
    minHeight: 80,
  },
  content: {
    marginTop: 8,
  },
});


