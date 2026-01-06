/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { Button, defaultTheme, Text, Visible } from '@zaisustech/atomic-ui';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  content: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.primary,
    borderRadius: 12,
    padding: 16,
  },
  contentError: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.error,
    borderRadius: 12,
    padding: 16,
  },
  itemContainer: {
    marginTop: 8,
  },
  section: {
    gap: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  textWhite: {
    color: defaultTheme.colors.primaryText,
  },
});

const meta = {
  title: 'Example/Visible',
  component: Visible,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    show: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Visible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { show: true },
  render: () => {
    const [show, setShow] = useState(true);

    return (
      <View style={styles.container}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Basic Visible Component
        </Text>
        <Button
          title={show ? 'Hide Content' : 'Show Content'}
          onPress={() => setShow(!show)}
        />
        <Visible show={show}>
          <View style={styles.content}>
            <Text variant="Paragraph.default.bold" style={styles.textWhite}>
              This content is {show ? 'visible' : 'hidden'}
            </Text>
          </View>
        </Visible>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic usage of Visible component to conditionally show/hide content.',
      },
    },
  },
};

export const ConditionalRendering: Story = {
  args: { show: true },
  render: () => {
    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(false);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Multiple Visible Components
          </Text>
          <Button
            title={showFirst ? 'Hide First' : 'Show First'}
            onPress={() => setShowFirst(!showFirst)}
          />
          <Visible show={showFirst}>
            <View style={styles.content}>
              <Text variant="Paragraph.default.bold" style={styles.textWhite}>
                First Content Block
              </Text>
            </View>
          </Visible>
          <Button
            title={showSecond ? 'Hide Second' : 'Show Second'}
            onPress={() => setShowSecond(!showSecond)}
          />
          <Visible show={showSecond}>
            <View style={styles.contentError}>
              <Text variant="Paragraph.default.bold" style={styles.textWhite}>
                Second Content Block
              </Text>
            </View>
          </Visible>
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Multiple Visible components used to conditionally render different content blocks.',
      },
    },
  },
};

export const WithComplexContent: Story = {
  args: { show: false },
  render: () => {
    const [show, setShow] = useState(false);

    return (
      <View style={styles.container}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Visible with Complex Content
        </Text>
        <Button
          title={show ? 'Hide Details' : 'Show Details'}
          onPress={() => setShow(!show)}
        />
        <Visible show={show}>
          <View style={styles.content}>
            <Text variant="Header.default.bold" style={styles.textWhite}>
              Detailed Information
            </Text>
            <Text variant="Paragraph.default.regular" style={styles.textWhite}>
              This is a more complex content block that can contain multiple
              elements.
            </Text>
            <View style={styles.itemContainer}>
              <Text variant="Paragraph.small.regular" style={styles.textWhite}>
                • Item 1
              </Text>
              <Text variant="Paragraph.small.regular" style={styles.textWhite}>
                • Item 2
              </Text>
              <Text variant="Paragraph.small.regular" style={styles.textWhite}>
                • Item 3
              </Text>
            </View>
          </View>
        </Visible>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Visible component wrapping complex content with multiple elements.',
      },
    },
  },
};
