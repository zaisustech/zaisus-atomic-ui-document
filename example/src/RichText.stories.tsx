import type { Meta, StoryObj } from '@storybook/react-native';
import { defaultTheme, RichText, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  highlightedStyle: {
    color: defaultTheme.colors.primary,
    fontWeight: 'bold',
  },
  highlightedStyleSecondary: {
    color: defaultTheme.colors.error,
    fontWeight: 'bold',
  },
  linkStyle: {
    color: defaultTheme.colors.link,
    textDecorationLine: 'underline',
  },
  section: {
    gap: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  textStyle: {
    color: defaultTheme.colors.text,
    fontSize: 18,
  },
  textStyleLink: {
    color: defaultTheme.colors.secondary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

const meta = {
  title: 'Example/RichText',
  component: RichText,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPressLink: fn() },
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof RichText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithHighlightedText: Story = {
  args: {
    text: 'This is a <h>highlighted</h> text example.',
    highlightedStyle: styles.highlightedStyle,
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Highlighted Text
        </Text>
        <RichText
          text="This is a <h>highlighted</h> text example."
          highlightedStyle={styles.highlightedStyle}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Multiple Highlights
        </Text>
        <RichText
          text="You can have <h>multiple</h> highlighted <h>words</h> in one text."
          highlightedStyle={styles.highlightedStyleSecondary}
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'RichText with highlighted text using <h>...</h> syntax.',
      },
    },
  },
};

export const WithLinks: Story = {
  args: {
    text: 'Visit our <a href="https://example.com">website</a> for more information.',
    highlightedStyle: styles.highlightedStyle,
    linkStyle: styles.linkStyle,
    onPressLink: fn(),
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Text with Links
        </Text>
        <RichText
          text="Visit our <a href='https://example.com'>website</a> for more information."
          highlightedStyle={styles.highlightedStyle}
          linkStyle={styles.linkStyle}
          onPressLink={fn()}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Combined Formatting
        </Text>
        <RichText
          text="This text has <h>highlighted</h> content and a <a href='https://example.com'>clickable link</a>."
          highlightedStyle={styles.highlightedStyleSecondary}
          linkStyle={styles.linkStyle}
          onPressLink={fn()}
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "RichText with clickable links using <a href='...'>...</a> syntax.",
      },
    },
  },
};

export const CustomStyles: Story = {
  args: {
    text: 'Custom styled text with <h>highlight</h>.',
    textStyle: styles.textStyle,
    highlightedStyle: styles.highlightedStyle,
    linkStyle: styles.textStyleLink,
    onPressLink: fn(),
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Custom Text Style
        </Text>
        <RichText
          text="Custom styled text with <h>highlight</h>."
          textStyle={styles.textStyle}
          highlightedStyle={styles.highlightedStyle}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Custom Link Style
        </Text>
        <RichText
          text="Click this <a href='https://example.com'>custom styled link</a>."
          linkStyle={styles.textStyleLink}
          highlightedStyle={styles.highlightedStyle}
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'RichText with custom text and link styles.',
      },
    },
  },
};
