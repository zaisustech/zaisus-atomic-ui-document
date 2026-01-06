import type { Meta, StoryObj } from '@storybook/react-native';
import { Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  section: {
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
  },
});

const meta = {
  title: 'Example/Text',
  component: Text,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPress: fn() },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'Paragraph.default.regular',
        'Paragraph.small.regular',
        'Paragraph.large.regular',
        'Paragraph.default.bold',
        'Paragraph.small.bold',
        'Paragraph.large.bold',
        'Paragraph.default.italic',
        'Paragraph.small.italic',
        'Paragraph.large.italic',
        'Header.default.regular',
        'Header.small.regular',
        'Header.large.regular',
        'Header.default.bold',
        'Header.small.bold',
        'Header.large.bold',
        'Header.default.italic',
        'Header.small.italic',
        'Header.large.italic',
        'Label.regular',
        'Label.bold',
        'Label.italic',
        'Label.small',
      ],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Paragraph Variants
        </Text>
        <Text variant="Paragraph.small.regular">Paragraph.small.regular</Text>
        <Text variant="Paragraph.default.regular">
          Paragraph.default.regular
        </Text>
        <Text variant="Paragraph.large.regular">Paragraph.large.regular</Text>
        <Text variant="Paragraph.small.bold">Paragraph.small.bold</Text>
        <Text variant="Paragraph.default.bold">Paragraph.default.bold</Text>
        <Text variant="Paragraph.large.bold">Paragraph.large.bold</Text>
        <Text variant="Paragraph.small.italic">Paragraph.small.italic</Text>
        <Text variant="Paragraph.default.italic">Paragraph.default.italic</Text>
        <Text variant="Paragraph.large.italic">Paragraph.large.italic</Text>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Header Variants
        </Text>
        <Text variant="Header.small.regular">Header.small.regular</Text>
        <Text variant="Header.default.regular">Header.default.regular</Text>
        <Text variant="Header.large.regular">Header.large.regular</Text>
        <Text variant="Header.small.bold">Header.small.bold</Text>
        <Text variant="Header.default.bold">Header.default.bold</Text>
        <Text variant="Header.large.bold">Header.large.bold</Text>
        <Text variant="Header.small.italic">Header.small.italic</Text>
        <Text variant="Header.default.italic">Header.default.italic</Text>
        <Text variant="Header.large.italic">Header.large.italic</Text>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Label Variants
        </Text>
        <Text variant="Label.regular">Label.regular</Text>
        <Text variant="Label.bold">Label.bold</Text>
        <Text variant="Label.italic">Label.italic</Text>
        <Text variant="Label.small">Label.small</Text>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All text variants displayed together.',
      },
    },
  },
};
