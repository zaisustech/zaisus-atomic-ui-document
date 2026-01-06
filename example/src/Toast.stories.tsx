/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { Button, Text, useToast } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  section: {
    gap: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
});

// Component wrapper to use hooks in stories
const ToastDemo = () => {
  const { showSuccessToast, showErrorToast, showInfoToast, showWarningToast } =
    useToast();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Toast Types
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Click the buttons below to show different toast types
        </Text>
        <Button
          variant="primary"
          title="Show Success Toast"
          onPress={() =>
            showSuccessToast({
              title: 'Success!',
              message: 'Your action was completed successfully.',
            })
          }
        />
        <Button
          variant="primary"
          title="Show Error Toast"
          onPress={() =>
            showErrorToast({
              title: 'Error',
              message: 'Something went wrong. Please try again.',
            })
          }
        />
        <Button
          variant="primary"
          title="Show Info Toast"
          onPress={() =>
            showInfoToast({
              title: 'Information',
              message: 'Here is some useful information for you.',
            })
          }
        />
        <Button
          variant="primary"
          title="Show Warning Toast"
          onPress={() =>
            showWarningToast({
              title: 'Warning',
              message: 'Please be careful with this action.',
            })
          }
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Toast with Title Only
        </Text>
        <Button
          variant="secondary"
          title="Show Title Only Toast"
          onPress={() =>
            showSuccessToast({
              title: 'Title Only Toast',
            })
          }
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Custom Duration
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Toast with custom duration (5 seconds)
        </Text>
        <Button
          variant="tertiary"
          title="Show Long Toast"
          onPress={() =>
            showInfoToast({
              title: 'Long Duration Toast',
              message: 'This toast will stay for 5 seconds.',
              duration: 5000,
            })
          }
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Multiple Toasts
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Show multiple toasts in sequence
        </Text>
        <Button
          variant="primary"
          title="Show Multiple Toasts"
          onPress={() => {
            showSuccessToast({ title: 'First Toast', message: 'Toast 1' });
            setTimeout(() => {
              showInfoToast({ title: 'Second Toast', message: 'Toast 2' });
            }, 500);
            setTimeout(() => {
              showWarningToast({ title: 'Third Toast', message: 'Toast 3' });
            }, 1000);
          }}
        />
      </View>
    </ScrollView>
  );
};

const meta = {
  title: 'Example/Toast',
  component: ToastDemo,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Toast component for displaying temporary notifications. Use the useToast hook to show toasts programmatically.',
      },
    },
  },
} satisfies Meta<typeof ToastDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllTypes: Story = {
  render: () => <ToastDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'All toast types: success, error, info, and warning. Click the buttons to see them in action.',
      },
    },
  },
};

export const SuccessToast: Story = {
  render: () => {
    const { showSuccessToast } = useToast();
    return (
      <View style={styles.container}>
        <Button
          variant="primary"
          title="Show Success Toast"
          onPress={() =>
            showSuccessToast({
              title: 'Success!',
              message: 'Your action was completed successfully.',
            })
          }
        />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Success toast example with title and message.',
      },
    },
  },
};

export const ErrorToast: Story = {
  render: () => {
    const { showErrorToast } = useToast();
    return (
      <View style={styles.container}>
        <Button
          variant="primary"
          title="Show Error Toast"
          onPress={() =>
            showErrorToast({
              title: 'Error',
              message: 'Something went wrong. Please try again.',
            })
          }
        />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Error toast example with title and message.',
      },
    },
  },
};

export const InfoToast: Story = {
  render: () => {
    const { showInfoToast } = useToast();
    return (
      <View style={styles.container}>
        <Button
          variant="primary"
          title="Show Info Toast"
          onPress={() =>
            showInfoToast({
              title: 'Information',
              message: 'Here is some useful information for you.',
            })
          }
        />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Info toast example with title and message.',
      },
    },
  },
};

export const WarningToast: Story = {
  render: () => {
    const { showWarningToast } = useToast();
    return (
      <View style={styles.container}>
        <Button
          variant="primary"
          title="Show Warning Toast"
          onPress={() =>
            showWarningToast({
              title: 'Warning',
              message: 'Please be careful with this action.',
            })
          }
        />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning toast example with title and message.',
      },
    },
  },
};

export const TitleOnly: Story = {
  render: () => {
    const { showSuccessToast } = useToast();
    return (
      <View style={styles.container}>
        <Button
          variant="secondary"
          title="Show Title Only Toast"
          onPress={() =>
            showSuccessToast({
              title: 'Title Only Toast',
            })
          }
        />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with only a title (no message).',
      },
    },
  },
};

export const CustomDuration: Story = {
  render: () => {
    const { showInfoToast } = useToast();
    return (
      <View style={styles.container}>
        <Button
          variant="tertiary"
          title="Show Long Toast (5 seconds)"
          onPress={() =>
            showInfoToast({
              title: 'Long Duration Toast',
              message: 'This toast will stay for 5 seconds.',
              duration: 5000,
            })
          }
        />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toast with custom duration (5 seconds instead of default 3 seconds).',
      },
    },
  },
};
