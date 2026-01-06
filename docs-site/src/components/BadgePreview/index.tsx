import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type BadgePreviewProps = {
  label?: string | number;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  size?: 'small' | 'medium' | 'large';
  showMultiple?: boolean;
};

/**
 * BadgePreview renders the Badge component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function BadgePreview({
  label = 'Badge',
  variant = 'default',
  size = 'medium',
  showMultiple = false,
}: BadgePreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={styles.labelRow}>
              <Badge label="Default" variant="default" />
              <Badge label="Primary" variant="primary" />
              <Badge label="Secondary" variant="secondary" />
              <Badge label="Success" variant="success" />
              <Badge label="Error" variant="error" />
              <Badge label="Warning" variant="warning" />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelRow}>
              <Badge label="Small" variant="primary" size="small" />
              <Badge label="Medium" variant="primary" size="medium" />
              <Badge label="Large" variant="primary" size="large" />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelRow}>
              <Badge label={5} variant="error" />
              <Badge label={99} variant="primary" />
              <Badge label={999} variant="success" />
            </View>
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <Badge label={label} variant={variant} size={size} />
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
    gap: 12,
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});


