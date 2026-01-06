import type { Meta, StoryObj } from '@storybook/react-native';
import { Snackbar, type SnackbarProps, Text } from '@zaisustech/atomic-ui';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

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
  snackbarContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});

const meta = {
  title: 'Example/Snackbar',
  component: Snackbar,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['default', 'success', 'error', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const SnackbarWrapper = ({ type, message, actionLabel }: SnackbarProps) => {
  const [visible, setVisible] = useState(true);
  return (
    <Snackbar
      visible={visible}
      message={message}
      type={type}
      actionLabel={actionLabel}
      onActionPress={fn()}
      onDismiss={() => setVisible(false)}
    />
  );
};

export const Default: Story = {
  args: {
    visible: true,
    message: 'This is a snackbar',
    type: 'default',
  },
  render: () => <SnackbarWrapper message="This is a snackbar" />,
};

export const WithAction: Story = {
  args: {
    visible: true,
    message: 'This is a snackbar with action',
    type: 'default',
    actionLabel: 'Action',
  },
  render: () => (
    <SnackbarWrapper
      type="default"
      message="This is a snackbar with action"
      actionLabel="Action"
      visible={false}
    />
  ),
};

export const AllVariants: Story = {
  args: {
    visible: true,
    message: 'This is a snackbar',
    type: 'default',
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Snackbar Types
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Note: Snackbars will auto-dismiss after 4 seconds. Click to dismiss
          manually.
        </Text>
      </View>
      <View style={styles.snackbarContainer}>
        <SnackbarWrapper type="default" message="Default snackbar message" />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All snackbar types displayed together.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    visible: true,
    message: 'Operation completed successfully!',
    type: 'success',
  },
  render: () => (
    <SnackbarWrapper
      type="success"
      message="Operation completed successfully!"
    />
  ),
};

export const Error: Story = {
  args: {
    visible: true,
    message: 'An error occurred',
    type: 'error',
  },
  render: () => <SnackbarWrapper type="error" message="An error occurred" />,
};

export const Warning: Story = {
  args: {
    visible: true,
    message: 'Please check your input',
    type: 'warning',
  },
  render: () => (
    <SnackbarWrapper type="warning" message="Please check your input" />
  ),
};

export const Info: Story = {
  args: {
    visible: true,
    message: 'Here is some information',
    type: 'info',
  },
  render: () => (
    <SnackbarWrapper type="info" message="Here is some information" />
  ),
};
