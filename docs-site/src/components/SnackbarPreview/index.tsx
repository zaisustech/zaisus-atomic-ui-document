import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar, Button } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type SnackbarPreviewProps = {
  message?: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  showMultiple?: boolean;
};

/**
 * SnackbarPreview renders the Snackbar component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function SnackbarPreview({
  message = 'Operation completed successfully',
  type = 'success',
  showMultiple = false,
}: SnackbarPreviewProps) {
  const [visible, setVisible] = useState(false);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <SnackbarDemo type="success" message="Success message" />
            <SnackbarDemo type="error" message="Error message" />
            <SnackbarDemo type="warning" message="Warning message" />
            <SnackbarDemo type="info" message="Info message" />
            <SnackbarDemo type="default" message="Default message" />
          </View>

          <View style={styles.section}>
            <SnackbarDemo
              type="success"
              message="With action button"
              actionLabel="Undo"
            />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Button
          title={`Show ${type} Snackbar`}
          variant="primary"
          onPress={() => setVisible(true)}
        />
        <Snackbar
          visible={visible}
          message={message}
          type={type}
          onDismiss={() => setVisible(false)}
        />
      </View>
    </ComponentPreview>
  );
}

// Helper component for multiple previews
function SnackbarDemo({
  type,
  message,
  actionLabel,
}: {
  type: 'default' | 'success' | 'error' | 'warning' | 'info';
  message: string;
  actionLabel?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.demoContainer}>
      <Button
        title={`Show ${type}`}
        variant="primary"
        onPress={() => setVisible(true)}
      />
      <Snackbar
        visible={visible}
        message={message}
        type={type}
        actionLabel={actionLabel}
        onActionPress={actionLabel ? () => console.log('Action pressed') : undefined}
        onDismiss={() => setVisible(false)}
      />
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
    alignItems: 'stretch',
  },
});


