import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, useToast } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type ToastPreviewProps = {
  showMultiple?: boolean;
};

/**
 * ToastPreview renders toast examples using the useToast hook from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
function ToastPreviewContent({ showMultiple }: ToastPreviewProps) {
  const { showSuccessToast, showErrorToast, showInfoToast, showWarningToast } = useToast();

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Button
              title="Show Success Toast"
              variant="primary"
              onPress={() =>
                showSuccessToast({
                  title: 'Success!',
                  message: 'Operation completed successfully.',
                })
              }
            />
            <Button
              title="Show Error Toast"
              variant="primary"
              onPress={() =>
                showErrorToast({
                  title: 'Error',
                  message: 'Something went wrong.',
                })
              }
            />
            <Button
              title="Show Info Toast"
              variant="primary"
              onPress={() =>
                showInfoToast({
                  title: 'Information',
                  message: 'Here is some useful information.',
                })
              }
            />
            <Button
              title="Show Warning Toast"
              variant="primary"
              onPress={() =>
                showWarningToast({
                  title: 'Warning',
                  message: 'Please be careful.',
                })
              }
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
          title="Show Success Toast"
          variant="primary"
          onPress={() =>
            showSuccessToast({
              title: 'Success!',
              message: 'Operation completed successfully.',
            })
          }
        />
      </View>
    </ComponentPreview>
  );
}

export function ToastPreview(props: ToastPreviewProps) {
  return <ToastPreviewContent {...props} />;
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
  section: {
    gap: 12,
    width: '100%',
  },
});


