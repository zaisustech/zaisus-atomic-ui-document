/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { defaultTheme, ProgressBar, Text } from '@zaisustech/atomic-ui';
import { useEffect, useState } from 'react';
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

const meta = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
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
    height: {
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
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    height: 8,
    animated: true,
  },
};

export const WithLabel: Story = {
  args: {
    progress: 75,
    height: 8,
    showLabel: true,
    animated: true,
  },
};

export const AllVariants: Story = {
  args: {
    progress: 0,
    height: 8,
    animated: true,
    showLabel: true,
    color: defaultTheme.colors.primary,
    backgroundColor: defaultTheme.colors.background,

    style: {
      marginTop: 16,
    },
  },
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
      }, 200);
      return () => clearInterval(interval);
    }, []);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Progress Bar Examples
          </Text>
          <ProgressBar progress={25} />
          <ProgressBar progress={50} />
          <ProgressBar progress={75} />
          <ProgressBar progress={100} />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            With Labels
          </Text>
          <ProgressBar progress={30} showLabel />
          <ProgressBar progress={60} showLabel />
          <ProgressBar progress={90} showLabel />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Different Heights
          </Text>
          <ProgressBar progress={progress} height={4} showLabel />
          <ProgressBar progress={progress} height={8} showLabel />
          <ProgressBar progress={progress} height={12} showLabel />
          <ProgressBar progress={progress} height={16} showLabel />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Custom Colors
          </Text>
          <ProgressBar
            progress={65}
            showLabel
            color={defaultTheme.colors.success}
          />
          <ProgressBar
            progress={65}
            showLabel
            color={defaultTheme.colors.error}
          />
          <ProgressBar
            progress={65}
            showLabel
            color={defaultTheme.colors.warning}
          />
          <ProgressBar
            progress={65}
            showLabel
            color={defaultTheme.colors.secondary}
          />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Animated Progress
          </Text>
          <ProgressBar progress={progress} showLabel />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All progress bar variants displayed together.',
      },
    },
  },
};
