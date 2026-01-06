import type { Meta, StoryObj } from '@storybook/react-native';
import { Card, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';

const CUSTOM_BACKGROUND_COLOR = '#F0F0F0';
const styles = StyleSheet.create({
  cardContent: {
    padding: 16,
  },
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  customStyledCard: {
    backgroundColor: CUSTOM_BACKGROUND_COLOR,
    borderRadius: 8,
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
  title: 'Example/Card',
  component: Card,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['light', 'thin', 'medium', 'thick', 'heavy'],
    },
    borderRadius: {
      control: {
        type: 'number',
      },
    },
    shadowOpacity: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    shadowColor: {
      control: {
        type: 'color',
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  args: {
    children: (
      <View style={styles.cardContent}>
        <Text variant="Paragraph.default.bold">Medium Shadow</Text>
        <Text variant="Paragraph.small.regular">
          This card uses the medium shadow variant.
        </Text>
      </View>
    ),
    variant: 'medium',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowColor: '#000000',
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Shadow Variants
        </Text>
        <Card variant="light">
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Light Shadow</Text>
            <Text variant="Paragraph.small.regular">
              This card uses the light shadow variant.
            </Text>
          </View>
        </Card>
        <Card variant="thin">
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Thin Shadow</Text>
            <Text variant="Paragraph.small.regular">
              This card uses the thin shadow variant.
            </Text>
          </View>
        </Card>
        <Card variant="medium">
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Medium Shadow</Text>
            <Text variant="Paragraph.small.regular">
              This card uses the medium shadow variant.
            </Text>
          </View>
        </Card>
        <Card variant="thick">
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Thick Shadow</Text>
            <Text variant="Paragraph.small.regular">
              This card uses the thick shadow variant.
            </Text>
          </View>
        </Card>
        <Card variant="heavy">
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Heavy Shadow</Text>
            <Text variant="Paragraph.small.regular">
              This card uses the heavy shadow variant.
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All card shadow variants displayed together.',
      },
    },
  },
};

export const Customizations: Story = {
  args: {
    variant: 'medium',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowColor: '#000000',
    children: (
      <View style={styles.cardContent}>
        <Text variant="Paragraph.default.bold">Medium Shadow</Text>
        <Text variant="Paragraph.small.regular">
          This card uses the medium shadow variant.
        </Text>
      </View>
    ),
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Custom Border Radius
        </Text>
        <Card variant="medium" borderRadius={4}>
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">
              Small Border Radius (4px)
            </Text>
            <Text variant="Paragraph.small.regular">
              Card with custom borderRadius of 4px.
            </Text>
          </View>
        </Card>
        <Card variant="medium" borderRadius={16}>
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">
              Large Border Radius (16px)
            </Text>
            <Text variant="Paragraph.small.regular">
              Card with custom borderRadius of 16px.
            </Text>
          </View>
        </Card>
        <Card variant="medium" borderRadius={24}>
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">
              Extra Large Border Radius (24px)
            </Text>
            <Text variant="Paragraph.small.regular">
              Card with custom borderRadius of 24px.
            </Text>
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Custom Shadow Opacity
        </Text>
        <Card variant="medium" shadowOpacity={0.1}>
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Low Opacity (0.1)</Text>
            <Text variant="Paragraph.small.regular">
              Card with reduced shadow opacity.
            </Text>
          </View>
        </Card>
        <Card variant="medium" shadowOpacity={0.5}>
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">High Opacity (0.5)</Text>
            <Text variant="Paragraph.small.regular">
              Card with increased shadow opacity.
            </Text>
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Custom Shadow Color
        </Text>
        <Card variant="medium" shadowColor="#FF6B6B">
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Red Shadow</Text>
            <Text variant="Paragraph.small.regular">
              Card with custom red shadow color.
            </Text>
          </View>
        </Card>
        <Card variant="medium" shadowColor="#4ECDC4">
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Teal Shadow</Text>
            <Text variant="Paragraph.small.regular">
              Card with custom teal shadow color.
            </Text>
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Combined Customizations
        </Text>
        <Card
          variant="thick"
          borderRadius={20}
          shadowOpacity={0.5}
          shadowColor="#9B59B6"
        >
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Fully Customized</Text>
            <Text variant="Paragraph.small.regular">
              Card with thick shadow, large borderRadius, custom opacity, and
              purple shadow color.
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of customizing card appearance with borderRadius, shadowOpacity, and shadowColor props.',
      },
    },
  },
};

export const WithoutShadow: Story = {
  args: {
    children: (
      <View style={styles.cardContent}>
        <Text variant="Paragraph.default.bold">No Shadow</Text>
        <Text variant="Paragraph.small.regular">
          Card without a shadow variant. You can still apply custom styles via
          the style prop.
        </Text>
      </View>
    ),
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Card Without Shadow Variant
        </Text>
        <Card>
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">No Shadow</Text>
            <Text variant="Paragraph.small.regular">
              Card without a shadow variant. You can still apply custom styles
              via the style prop.
            </Text>
          </View>
        </Card>
        <Card style={styles.customStyledCard}>
          <View style={styles.cardContent}>
            <Text variant="Paragraph.default.bold">Custom Styled Card</Text>
            <Text variant="Paragraph.small.regular">
              Card with custom background color and borderRadius applied via
              style prop.
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Cards can be used without shadow variants and styled with custom styles.',
      },
    },
  },
};
