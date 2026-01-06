import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DropdownField, DropdownProvider } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type DropdownFieldPreviewProps = {
  placeholder?: string;
  showMultiple?: boolean;
};

const defaultOptions = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

/**
 * DropdownFieldPreview renders the DropdownField component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function DropdownFieldPreview({
  placeholder = 'Select an option',
  showMultiple = false,
}: DropdownFieldPreviewProps) {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <DropdownProvider>
          <View style={styles.container}>
            <View style={styles.section}>
              <DropdownField
                placeholder="Select an option"
                options={defaultOptions}
                value={selectedOption}
                onChange={setSelectedOption}
              />
            </View>

            <View style={styles.section}>
              <DropdownField
                placeholder="With error"
                options={defaultOptions}
                error="Please select an option"
              />
            </View>

            <View style={styles.section}>
              <DropdownField
                placeholder="Disabled"
                options={defaultOptions}
                disabled={true}
              />
            </View>
          </View>
        </DropdownProvider>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <DropdownProvider>
        <View style={styles.singleContainer}>
          <DropdownField
            placeholder={placeholder}
            options={defaultOptions}
            value={selectedOption}
            onChange={setSelectedOption}
          />
        </View>
      </DropdownProvider>
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
    width: '100%',
  },
});


