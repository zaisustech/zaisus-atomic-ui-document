/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { SegmentedControl, Text } from '@zaisustech/atomic-ui';
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
});

const meta = {
  title: 'Example/SegmentedControl',
  component: SegmentedControl,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onChange: fn() },
  argTypes: {
    borderRadius: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

const basicSegments = [
  { label: 'First', value: 'first' },
  { label: 'Second', value: 'second' },
  { label: 'Third', value: 'third' },
];

const threeSegments = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const twoSegments = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

const fourSegments = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Pending', value: 'pending' },
  { label: 'Done', value: 'done' },
];

export const Basic: Story = {
  args: {
    segments: basicSegments,
    value: 'first',
    onChange: fn(),
  },
  render: () => {
    const [value, setValue] = useState('first');
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Basic Segmented Control
          </Text>
          <SegmentedControl
            segments={basicSegments}
            value={value}
            onChange={setValue}
          />
          <Text variant="Paragraph.small.regular">Selected: {value}</Text>
        </View>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic segmented control with three options.',
      },
    },
  },
};

export const AllVariants: Story = {
  args: {
    segments: threeSegments,
    value: 'option1',
    onChange: fn(),
  },
  render: () => {
    const [value1, setValue1] = useState('option1');
    const [value2, setValue2] = useState('yes');
    const [value3, setValue3] = useState('all');
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Two Segments
          </Text>
          <SegmentedControl
            segments={twoSegments}
            value={value2}
            onChange={setValue2}
          />
          <Text variant="Paragraph.small.regular">Selected: {value2}</Text>
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Three Segments
          </Text>
          <SegmentedControl
            segments={threeSegments}
            value={value1}
            onChange={setValue1}
          />
          <Text variant="Paragraph.small.regular">Selected: {value1}</Text>
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Four Segments
          </Text>
          <SegmentedControl
            segments={fourSegments}
            value={value3}
            onChange={setValue3}
          />
          <Text variant="Paragraph.small.regular">Selected: {value3}</Text>
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Segmented controls with different numbers of segments.',
      },
    },
  },
};

export const CustomBorderRadius: Story = {
  args: {
    segments: basicSegments,
    value: 'first',
    onChange: fn(),
  },
  render: () => {
    const [value1, setValue1] = useState('first');
    const [value2, setValue2] = useState('first');
    const [value3, setValue3] = useState('first');
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Small Border Radius (4px)
          </Text>
          <SegmentedControl
            segments={basicSegments}
            value={value1}
            onChange={setValue1}
            borderRadius={4}
          />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Default Border Radius (8px)
          </Text>
          <SegmentedControl
            segments={basicSegments}
            value={value2}
            onChange={setValue2}
            borderRadius={8}
          />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Large Border Radius (16px)
          </Text>
          <SegmentedControl
            segments={basicSegments}
            value={value3}
            onChange={setValue3}
            borderRadius={16}
          />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Extra Large Border Radius (24px)
          </Text>
          <SegmentedControl
            segments={basicSegments}
            value={value3}
            onChange={setValue3}
            borderRadius={24}
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Segmented controls with different border radius values.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    segments: basicSegments,
    value: 'first',
    onChange: fn(),
  },
  render: () => {
    const [value, setValue] = useState('first');
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Interactive Example
          </Text>
          <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
            Tap on different segments to see the selection change.
          </Text>
          <SegmentedControl
            segments={basicSegments}
            value={value}
            onChange={setValue}
          />
          <Text variant="Paragraph.default.bold" style={styles.sectionTitle}>
            Current Selection: {value}
          </Text>
        </View>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive segmented control. Tap segments to see the selection change.',
      },
    },
  },
};
