import type { Meta, StoryObj } from '@storybook/react-native';
import { Button, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const ICON_BACKGROUND_COLOR = '#FFFFFF';
const CUSTOM_RED = '#FF6B6B';
const CUSTOM_TEAL = '#4ECDC4';

const styles = StyleSheet.create({
  buttonFlex: {
    flex: 0,
  },
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  customBackground: {
    backgroundColor: CUSTOM_RED,
  },
  customBorderRadius: {
    borderRadius: 50,
  },
  customMultiple: {
    backgroundColor: CUSTOM_TEAL,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  customPadding: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  icon: {
    backgroundColor: ICON_BACKGROUND_COLOR,
    borderRadius: 10,
    height: 20,
    width: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    width: '100%',
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
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPress: fn() },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'primary.rounded',
        'primary.small',
        'primary.plain',
        'secondary.rounded',
        'secondary.small',
        'secondary.plain',
        'tertiary.rounded',
        'tertiary.small',
        'tertiary.plain',
        'rounded',
        'small',
        'plain',
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Primary Variants
        </Text>
        <Button variant="primary" title="Primary" onPress={fn()} />
        <Button
          variant="primary.rounded"
          title="Primary Rounded"
          onPress={fn()}
        />
        <Button variant="primary.small" title="Primary Small" onPress={fn()} />
        <Button variant="primary.plain" title="Primary Plain" onPress={fn()} />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Secondary Variants
        </Text>
        <Button variant="secondary" title="Secondary" onPress={fn()} />
        <Button
          variant="secondary.rounded"
          title="Secondary Rounded"
          onPress={fn()}
        />
        <Button
          variant="secondary.small"
          title="Secondary Small"
          onPress={fn()}
        />
        <Button
          variant="secondary.plain"
          title="Secondary Plain"
          onPress={fn()}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Tertiary Variants
        </Text>
        <Button variant="tertiary" title="Tertiary" onPress={fn()} />
        <Button
          variant="tertiary.rounded"
          title="Tertiary Rounded"
          onPress={fn()}
        />
        <Button
          variant="tertiary.small"
          title="Tertiary Small"
          onPress={fn()}
        />
        <Button
          variant="tertiary.plain"
          title="Tertiary Plain"
          onPress={fn()}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Standalone Modifiers
        </Text>
        <Button variant="rounded" title="Rounded" onPress={fn()} />
        <Button variant="small" title="Small" onPress={fn()} />
        <Button variant="none"  onPress={fn()} >
          <Text variant="Paragraph.default.regular">none</Text>
        </Button>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          With Icons
        </Text>
        <Button
          variant="primary"
          title="Button with Left Icon"
          leftElement={<View style={styles.icon} />}
          onPress={fn()}
        />
        <Button
          variant="primary"
          title="Button with Right Icon"
          rightElement={<View style={styles.icon} />}
          onPress={fn()}
        />
        <Button
          variant="primary"
          title="Button with Both Icons"
          leftElement={<View style={styles.icon} />}
          rightElement={<View style={styles.icon} />}
          onPress={fn()}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          States
        </Text>
        <Button variant="primary" title="Default State" onPress={fn()} />
        <Button
          variant="primary"
          title="Disabled State"
          disabled
          onPress={fn()}
        />
        <View style={styles.row}>
          <Button
            variant="primary"
            title="Press Me"
            onPress={fn()}
            style={styles.buttonFlex}
          />
          <Button
            variant="primary"
            title="Focus Me"
            onPress={fn()}
            style={styles.buttonFlex}
          />
        </View>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together.',
      },
    },
  },
};

export const StyleOverrides: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Style Overrides
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          You can override borderRadius, backgroundColor, and other styles via
          the style prop.
        </Text>
        <Button
          variant="primary"
          title="Custom BorderRadius (50px)"
          onPress={fn()}
          style={styles.customBorderRadius}
        />
        <Button
          variant="primary"
          title="Custom Background Color"
          onPress={fn()}
          style={styles.customBackground}
        />
        <Button
          variant="primary"
          title="Custom Padding"
          onPress={fn()}
          style={styles.customPadding}
        />
        <Button
          variant="primary"
          title="Multiple Overrides"
          onPress={fn()}
          style={styles.customMultiple}
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of overriding button styles like borderRadius, backgroundColor, and padding via the style prop.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <View style={styles.container}>
      <Button title="Default State" onPress={fn()} />
      <Button title="Disabled State" disabled onPress={fn()} />
      <View style={styles.row}>
        <Button title="Press Me" onPress={fn()} style={styles.buttonFlex} />
        <Button title="Focus Me" onPress={fn()} style={styles.buttonFlex} />
      </View>
      <Button
        title="Button with Left Icon"
        leftElement={<View style={styles.icon} />}
        onPress={fn()}
      />
      <Button
        title="Button with Right Icon"
        rightElement={<View style={styles.icon} />}
        onPress={fn()}
      />
      <Button
        title="Button with Both Icons"
        leftElement={<View style={styles.icon} />}
        rightElement={<View style={styles.icon} />}
        onPress={fn()}
      />
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All button states displayed together. Press and focus buttons to see state changes.',
      },
    },
  },
};
