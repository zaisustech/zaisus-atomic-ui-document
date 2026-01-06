import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stepper, Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type StepperPreviewProps = {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showMultiple?: boolean;
};

/**
 * StepperPreview renders the Stepper component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function StepperPreview({
  value: initialValue = 0,
  min = 0,
  max = 10,
  step = 1,
  disabled = false,
  showMultiple = false,
}: StepperPreviewProps) {
  const [value, setValue] = useState(initialValue);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Basic Stepper (0-10):</Text>
            <StepperDemo min={0} max={10} step={1} />
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Stepper with Custom Range (1-100, step 5):</Text>
            <StepperDemo min={1} max={100} step={5} />
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.regular">Disabled Stepper:</Text>
            <StepperDemo min={0} max={10} step={1} disabled={true} />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Stepper
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={setValue}
          disabled={disabled}
        />
        <Text variant="Paragraph.small.regular" style={styles.valueText}>
          Current value: {value}
        </Text>
      </View>
    </ComponentPreview>
  );
}

// Helper component for multiple previews
function StepperDemo({
  min,
  max,
  step,
  disabled = false,
}: {
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
}) {
  const [value, setValue] = useState(min);

  return (
    <View style={styles.demoContainer}>
      <Stepper
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={setValue}
        disabled={disabled}
      />
      <Text variant="Paragraph.small.regular" style={styles.valueText}>
        Value: {value}
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
    alignItems: 'center',
  },
  section: {
    gap: 12,
    width: '100%',
    alignItems: 'center',
  },
  demoContainer: {
    gap: 8,
    alignItems: 'center',
  },
  valueText: {
    marginTop: 8,
    color: '#666',
  },
});


