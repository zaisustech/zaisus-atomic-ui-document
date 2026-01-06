/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import {
  DropdownField,
  type DropDownOption,
  DropdownProvider,
  Text,
} from '@zaisustech/atomic-ui';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  iconContainer: {
    padding: 8,
  },
  section: {
    gap: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
});

const options: DropDownOption[] = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
  { id: '4', label: 'Option 4', value: 'option4' },
  { id: '5', label: 'Option 5', value: 'option5' },
];

const meta = {
  title: 'Example/DropdownField',
  component: DropdownField,
  decorators: [
    (Story) => (
      <DropdownProvider>
        <View style={styles.container}>
          <Story />
        </View>
      </DropdownProvider>
    ),
  ],
  tags: ['autodocs'],
  args: { onChange: fn() },
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof DropdownField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicDropdown: Story = {
  args: { value: undefined, options: options },
  render: () => {
    const [value, setValue] = useState<DropDownOption | undefined>(undefined);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Basic Dropdown
          </Text>
          <DropdownField
            testID="basic_dropdown"
            placeholder="Select an option"
            value={value}
            options={options}
            onChange={setValue}
          />
          {value && (
            <Text variant="Paragraph.default.regular">
              Selected: {value.label}
            </Text>
          )}
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic dropdown field with a list of options.',
      },
    },
  },
};

export const WithError: Story = {
  args: { value: undefined, options: options },
  render: () => {
    const [value, setValue] = useState<DropDownOption | undefined>(undefined);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Dropdown with Error
          </Text>
          <DropdownField
            testID="error_dropdown"
            placeholder="Select an option"
            value={value}
            options={options}
            onChange={setValue}
            error="This field is required"
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown field displaying an error message.',
      },
    },
  },
};

export const Disabled: Story = {
  args: { value: options[0], options: options },
  render: () => {
    const [value, setValue] = useState<DropDownOption | undefined>(options[0]);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Disabled Dropdown
          </Text>
          <DropdownField
            testID="disabled_dropdown"
            placeholder="Select an option"
            value={value}
            options={options}
            onChange={setValue}
            disabled
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled dropdown field that cannot be interacted with.',
      },
    },
  },
};

export const WithLeftElement: Story = {
  args: { value: undefined, options: options },
  render: () => {
    const [value, setValue] = useState<DropDownOption | undefined>(undefined);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Dropdown with Icon
          </Text>
          <DropdownField
            testID="icon_dropdown"
            placeholder="Select an option"
            value={value}
            options={options}
            onChange={setValue}
            leftElement={
              <View style={styles.iconContainer}>
                <Text>🔽</Text>
              </View>
            }
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown field with a left element (icon).',
      },
    },
  },
};
