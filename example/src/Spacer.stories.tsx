import type { Meta, StoryObj } from '@storybook/react-native';
import { defaultTheme, Spacer, Text } from '@zaisustech/atomic-ui';
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
  title: 'Example/Spacer',
  component: Spacer,
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
    spacing: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <View>
      <View style={styles.box} />
      <Spacer orientation="vertical" spacing={16} />
      <View style={styles.box} />
      <Spacer orientation="vertical" spacing={16} />
      <View style={styles.box} />
    </View>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <View style={styles.horizontalContainer}>
      <View style={styles.box} />
      <Spacer orientation="horizontal" spacing={16} />
      <View style={styles.box} />
      <Spacer orientation="horizontal" spacing={16} />
      <View style={styles.box} />
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Vertical Spacers
        </Text>
        <View>
          <View style={styles.box} />
          <Spacer orientation="vertical" spacing={8} />
          <View style={styles.box} />
          <Spacer orientation="vertical" spacing={16} />
          <View style={styles.box} />
          <Spacer orientation="vertical" spacing={24} />
          <View style={styles.box} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Horizontal Spacers
        </Text>
        <View style={styles.horizontalContainer}>
          <View style={styles.box} />
          <Spacer orientation="horizontal" spacing={8} />
          <View style={styles.box} />
          <Spacer orientation="horizontal" spacing={16} />
          <View style={styles.box} />
          <Spacer orientation="horizontal" spacing={24} />
          <View style={styles.box} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Default Spacing
        </Text>
        <View>
          <View style={styles.box} />
          <Spacer orientation="vertical" />
          <View style={styles.box} />
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.box} />
          <Spacer orientation="horizontal" />
          <View style={styles.box} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Custom Spacing
        </Text>
        <View>
          <View style={styles.box} />
          <Spacer orientation="vertical" spacing={4} />
          <View style={styles.box} />
          <Spacer orientation="vertical" spacing={32} />
          <View style={styles.box} />
          <Spacer orientation="vertical" spacing={48} />
          <View style={styles.box} />
        </View>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All spacer variants displayed together.',
      },
    },
  },
};
