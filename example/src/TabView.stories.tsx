/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { defaultTheme, TabView, Text } from '@zaisustech/atomic-ui';
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
  selectionStyle: {
    backgroundColor: defaultTheme.colors.primary,
    height: 3,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

const meta = {
  title: 'Example/TabView',
  component: TabView,
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
    type: {
      control: {
        type: 'select',
      },
      options: ['fixed', 'scroll'],
    },
    value: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof TabView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollableTabs: Story = {
  args: { type: 'scroll', value: 0 },
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <View style={styles.container}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Scrollable TabView
        </Text>
        <TabView type="scroll" value={value} onChange={setValue}>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Tab 1</Text>
          </View>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Tab 2</Text>
          </View>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Tab 3</Text>
          </View>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Tab 4</Text>
          </View>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Tab 5</Text>
          </View>
        </TabView>
        <Text variant="Paragraph.default.regular">
          Current tab: {value + 1}
        </Text>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Scrollable TabView with multiple tabs that can be scrolled horizontally.',
      },
    },
  },
};

export const FixedTabs: Story = {
  args: { type: 'fixed', value: 0 },
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <View style={styles.container}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Fixed TabView
        </Text>
        <TabView type="fixed" value={value} onChange={setValue}>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Home</Text>
          </View>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Search</Text>
          </View>
          <View style={styles.tabContent}>
            <Text variant="Paragraph.default.bold">Profile</Text>
          </View>
        </TabView>
        <Text variant="Paragraph.default.regular">
          Current tab: {value + 1}
        </Text>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fixed TabView with tabs that are evenly distributed across the width.',
      },
    },
  },
};

export const WithCustomStyles: Story = {
  args: { type: 'scroll', value: 0 },
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Custom Selection Style
          </Text>
          <TabView
            type="scroll"
            value={value}
            onChange={setValue}
            selectionStyle={styles.selectionStyle}
          >
            <View style={styles.tabContent}>
              <Text variant="Paragraph.default.bold">Tab 1</Text>
            </View>
            <View style={styles.tabContent}>
              <Text variant="Paragraph.default.bold">Tab 2</Text>
            </View>
            <View style={styles.tabContent}>
              <Text variant="Paragraph.default.bold">Tab 3</Text>
            </View>
          </TabView>
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'TabView with custom selection indicator style.',
      },
    },
  },
};
