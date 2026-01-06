import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SegmentedControl, Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type SegmentedControlPreviewProps = {
  showMultiple?: boolean;
};

const defaultSegments = [
  { label: 'First', value: 'first' },
  { label: 'Second', value: 'second' },
  { label: 'Third', value: 'third' },
];

/**
 * SegmentedControlPreview renders the SegmentedControl component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function SegmentedControlPreview({
  showMultiple = false,
}: SegmentedControlPreviewProps) {
  const [selectedValue, setSelectedValue] = useState('first');

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <SegmentedControlDemo segments={defaultSegments} />
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">With Custom Border Radius</Text>
            <SegmentedControlDemo segments={defaultSegments} borderRadius={16} />
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Two Segments</Text>
            <SegmentedControlDemo
              segments={[
                { label: 'On', value: 'on' },
                { label: 'Off', value: 'off' },
              ]}
            />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <SegmentedControl
          segments={defaultSegments}
          value={selectedValue}
          onChange={setSelectedValue}
        />
        <Text variant="Paragraph.small.regular" style={styles.valueText}>
          Selected: {selectedValue}
        </Text>
      </View>
    </ComponentPreview>
  );
}

// Helper component for multiple previews
function SegmentedControlDemo({
  segments,
  borderRadius,
}: {
  segments: Array<{ label: string; value: string }>;
  borderRadius?: number;
}) {
  const [selectedValue, setSelectedValue] = useState(segments[0].value);

  return (
    <View style={styles.demoContainer}>
      <SegmentedControl
        segments={segments}
        value={selectedValue}
        onChange={setSelectedValue}
        borderRadius={borderRadius}
      />
      <Text variant="Paragraph.small.regular" style={styles.valueText}>
        Selected: {selectedValue}
      </Text>
    </View>
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
  demoContainer: {
    gap: 8,
    width: '100%',
  },
  valueText: {
    marginTop: 8,
    color: '#666',
  },
});


