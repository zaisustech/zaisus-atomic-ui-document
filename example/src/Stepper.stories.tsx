/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { Stepper, type StepperProps, Text } from '@zaisustech/atomic-ui';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  marginTop: {
    marginTop: 8,
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
  title: 'Example/Stepper',
  component: Stepper,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    min: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    step: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const StepperWrapper = (args: StepperProps) => {
  const [value, setValue] = useState(args.value || 0);
  return (
    <View>
      <Stepper {...args} value={value} onChange={setValue} />
      <Text variant="Paragraph.default.regular" style={styles.marginTop}>
        Current value: {value}
      </Text>
    </View>
  );
};

export const Default: Story = {
  render: () => <StepperWrapper value={5} onChange={fn()} />,
  args: {
    value: 5,
    onChange: fn(),
  },
};

export const AllVariants: Story = {
  args: {
    value: 5,
    onChange: fn(),
  },
  render: () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(10);
    const [value3, setValue3] = useState(50);
    const [value4, setValue4] = useState(5);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Basic Stepper
          </Text>
          <StepperWrapper value={value1} onChange={setValue1} />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            With Min and Max
          </Text>
          <StepperWrapper
            value={value2}
            onChange={setValue2}
            min={0}
            max={20}
          />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Custom Step
          </Text>
          <StepperWrapper
            value={value3}
            onChange={setValue3}
            step={5}
            min={0}
            max={100}
          />
        </View>

        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Disabled State
          </Text>
          <StepperWrapper
            value={value4}
            onChange={setValue4}
            disabled
            min={0}
            max={10}
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All stepper variants displayed together.',
      },
    },
  },
};
