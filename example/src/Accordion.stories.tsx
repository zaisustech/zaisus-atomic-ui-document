import type { Meta, StoryObj } from '@storybook/react-native';
import { Accordion, defaultTheme, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';

const NESTED_BACKGROUND_COLOR = '#f0f0f0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  nestedContent: {
    backgroundColor: NESTED_BACKGROUND_COLOR,
    marginTop: 8,
    padding: 8,
  },
  section: {
    gap: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  textMarginTop: {
    marginTop: 8,
  },
  header:{
    backgroundColor: defaultTheme.colors.disabled,
  },
});

const meta = {
  title: 'Example/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    defaultExpanded: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    defaultExpanded: false,
    children: (
      <Text variant="Paragraph.default.regular">
        This is the content inside the accordion. It can contain any React
        components or text.
      </Text>
    ),
  },
};

export const Expanded: Story = {
  args: {
    title: 'Expanded Accordion',
    defaultExpanded: true,
    children: (
      <Text variant="Paragraph.default.regular">
        This accordion starts expanded by default.
      </Text>
    ),
  },
};

export const AllVariants: Story = {
  args: {
    title: '',
    children: null,
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Accordion Examples
        </Text>
        <Accordion title="First Accordion" headerStyle={styles.header}>
          <Text variant="Paragraph.default.regular">
            Content for the first accordion item.
          </Text>
        </Accordion>
        <Accordion title="Second Accordion" defaultExpanded>
          <Text variant="Paragraph.default.regular">
            This accordion starts expanded.
          </Text>
          <Text
            variant="Paragraph.default.regular"
            style={styles.textMarginTop}
          >
            It can contain multiple paragraphs.
          </Text>
        </Accordion>
        <Accordion title="Third Accordion">
          <View>
            <Text variant="Paragraph.default.regular">
              You can also include other components:
            </Text>
            <View style={styles.nestedContent}>
              <Text variant="Paragraph.small.regular">Nested content</Text>
            </View>
          </View>
        </Accordion>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple accordion examples with different content.',
      },
    },
  },
};
