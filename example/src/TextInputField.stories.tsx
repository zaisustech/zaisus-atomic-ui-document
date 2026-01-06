/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { Icon, Text, TextInputField } from '@zaisustech/atomic-ui';
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

const meta = {
  title: 'Example/TextInputField',
  component: TextInputField,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onChangeText: fn() },
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    secureTextEntry: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof TextInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Basic Text Input
          </Text>
          <TextInputField
            testID="basic_input"
            placeholder="Enter text"
            value={value}
            onChangeText={setValue}
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic text input field with placeholder.',
      },
    },
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Input with Error
          </Text>
          <TextInputField
            testID="error_input"
            placeholder="Enter text"
            value={value}
            onChangeText={setValue}
            error="This field is required"
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Text input field displaying an error message.',
      },
    },
  },
};

export const PasswordInput: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Password Input
          </Text>
          <TextInputField
            testID="password_input"
            placeholder="Enter password"
            value={value}
            onChangeText={setValue}
            secureTextEntry
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Password input field with secure text entry and visibility toggle.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('Disabled value');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Disabled Input
          </Text>
          <TextInputField
            testID="disabled_input"
            placeholder="Enter text"
            value={value}
            onChangeText={setValue}
            disabled
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled text input field that cannot be edited.',
      },
    },
  },
};

export const WithLeftIcon: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Input with Left Icon
          </Text>
          <TextInputField
            testID="left_icon_input"
            placeholder="Search"
            value={value}
            onChangeText={setValue}
            leftElement={
              <View style={styles.iconContainer}>
                <Icon name="search" type="fa" size={20} />
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
        story: 'Text input field with a left icon element.',
      },
    },
  },
};

export const WithClearButton: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Input with Clear Button
          </Text>
          <TextInputField
            testID="clear_input"
            placeholder="Enter text"
            value={value}
            onChangeText={setValue}
            isShowClearButton
          />
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Text input field with a clear button to reset the value.',
      },
    },
  },
};

export const EmailInput: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Email Input
          </Text>
          <TextInputField
            testID="email_input"
            placeholder="Enter email"
            value={value}
            onChangeText={setValue}
            keyboardType="email-address"
            autoCapitalize="none"
            leftElement={
              <View style={styles.iconContainer}>
                <Icon name="envelope" type="fa" size={20} />
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
        story: 'Email input field with appropriate keyboard type and icon.',
      },
    },
  },
};
