/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { ProgressCircle, Text } from '@zaisustech/atomic-ui';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
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
  title: 'Example/ProgressCircle',
  component: ProgressCircle,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    animated: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    size: 100,
    animated: true,
  },
};

export const WithLabel: Story = {
  args: {
    progress: 75,
    size: 120,
    showLabel: true,
    animated: true,
  },
};

export const AllVariants: Story = {
  args: { progress: 0, size: 100, animated: true },
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Progress Circle Examples
          </Text>
          <View style={styles.row}>
            <ProgressCircle progress={25} size={80} />
            <ProgressCircle progress={50} size={80} />
            <ProgressCircle progress={75} size={80} />
            <ProgressCircle progress={100} size={80} />
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            With Labels
          </Text>
          <View style={styles.row}>
            <ProgressCircle progress={30} size={100} showLabel />
            <ProgressCircle progress={60} size={100} showLabel />
            <ProgressCircle progress={90} size={100} showLabel />
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Different Sizes
          </Text>
          <View style={styles.row}>
            <ProgressCircle progress={progress} size={60} showLabel />
            <ProgressCircle progress={progress} size={100} showLabel />
            <ProgressCircle progress={progress} size={140} showLabel />
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Custom Colors
          </Text>
          <View style={styles.row}>
            <ProgressCircle
              progress={65}
              size={100}
              showLabel
              color="#34C759"
            />
            <ProgressCircle
              progress={65}
              size={100}
              showLabel
              color="#FF3B30"
            />
            <ProgressCircle
              progress={65}
              size={100}
              showLabel
              color="#FF9500"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Animated Progress
          </Text>
          <View style={styles.row}>
            <ProgressCircle progress={progress} size={120} showLabel />
          </View>
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All progress circle variants displayed together.',
      },
    },
  },
};
