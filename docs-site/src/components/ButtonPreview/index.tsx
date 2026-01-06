import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type ButtonPreviewProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'primary.plain' | 'primary.rounded';
  title?: string;
  disabled?: boolean;
  showMultiple?: boolean;
};

/**
 * ButtonPreview renders the Button component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function ButtonPreview({
  variant = 'primary',
  title = 'Press me',
  disabled = false,
  showMultiple = false,
}: ButtonPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview title="Multiple Buttons">
        <View style={styles.container}>
          <View style={styles.row}>
            <Button variant="primary" title="Primary" onPress={() => {}} />
            <Button variant="secondary" title="Secondary" onPress={() => {}} />
            <Button variant="tertiary" title="Tertiary" onPress={() => {}} />
          </View>
          <View style={styles.row}>
            <Button variant="primary.plain" title="Outlined" onPress={() => {}} />
            <Button variant="primary.rounded" title="Rounded" onPress={() => {}} />
            <Button variant="primary" title="Disabled" disabled={true} onPress={() => {}} />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview title={title}>
      <Button
        variant={variant}
        title={title}
        disabled={disabled}
        onPress={() => console.log('Button pressed')}
      />
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

