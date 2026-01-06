import type { Meta, StoryObj } from '@storybook/react-native';
import { Badge, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  section: {
    gap: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
});

const meta = {
  title: 'Example/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
      ],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Badge',
    variant: 'default',
    size: 'medium',
  },
};

export const AllVariants: Story = {
  args: {
    label: 'Badge',
    variant: 'default',
    size: 'medium',
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Badge Variants
        </Text>
        <View style={styles.row}>
          <Badge label="Default" variant="default" />
          <Badge label="Primary" variant="primary" />
          <Badge label="Secondary" variant="secondary" />
          <Badge label="Success" variant="success" />
          <Badge label="Error" variant="error" />
          <Badge label="Warning" variant="warning" />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Badge Sizes
        </Text>
        <View style={styles.row}>
          <Badge label="Small" size="small" />
          <Badge label="Medium" size="medium" />
          <Badge label="Large" size="large" />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Number Badges
        </Text>
        <View style={styles.row}>
          <Badge label={1} variant="primary" />
          <Badge label={5} variant="secondary" />
          <Badge label={99} variant="error" />
          <Badge label={999} variant="warning" />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          All Combinations
        </Text>
        <View style={styles.row}>
          <Badge label="Small" variant="primary" size="small" />
          <Badge label="Medium" variant="secondary" size="medium" />
          <Badge label="Large" variant="success" size="large" />
        </View>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge variants displayed together.',
      },
    },
  },
};
