import type { Meta, StoryObj } from '@storybook/react-native';
import { defaultTheme, Divider, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: defaultTheme.colors.primary,
    height: 40,
    width: 40,
  },
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  horizontalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
  },
  listItemText: {
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

const meta = {
  title: 'Example/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <View>
      <Text variant="Paragraph.default.regular">Content above</Text>
      <Divider orientation="horizontal" />
      <Text variant="Paragraph.default.regular">Content below</Text>
    </View>
  ),
};

export const Vertical: Story = {
  render: () => (
    <View style={styles.horizontalContainer}>
      <View style={styles.box} />
      <Divider orientation="vertical" />
      <View style={styles.box} />
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Horizontal Dividers
        </Text>
        <Text variant="Paragraph.default.regular">
          Content above the divider
        </Text>
        <Divider orientation="horizontal" />
        <Text variant="Paragraph.default.regular">
          Content below the divider
        </Text>
        <Divider orientation="horizontal" />
        <Text variant="Paragraph.default.regular">More content</Text>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Vertical Dividers
        </Text>
        <View style={styles.horizontalContainer}>
          <View style={styles.box} />
          <Divider orientation="vertical" />
          <View style={styles.box} />
          <Divider orientation="vertical" />
          <View style={styles.box} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          In Lists
        </Text>
        <View>
          <Text variant="Paragraph.default.regular" style={styles.listItemText}>
            List Item 1
          </Text>
          <Divider orientation="horizontal" />
          <Text variant="Paragraph.default.regular" style={styles.listItemText}>
            List Item 2
          </Text>
          <Divider orientation="horizontal" />
          <Text variant="Paragraph.default.regular" style={styles.listItemText}>
            List Item 3
          </Text>
        </View>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All divider variants displayed together.',
      },
    },
  },
};
