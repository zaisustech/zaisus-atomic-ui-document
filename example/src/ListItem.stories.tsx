import type { Meta, StoryObj } from '@storybook/react-native';
import { defaultTheme, Icon, ListItem, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: defaultTheme.colors.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: defaultTheme.colors.background,
    fontSize: 12,
  },
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  icon: {
    backgroundColor: defaultTheme.colors.primary,
    borderRadius: 20,
    height: 40,
    width: 40,
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
  title: 'Example/ListItem',
  component: ListItem,
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
  },
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'List Item Title',
    onPress: fn(),
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'List Item Title',
    subtitle: 'This is a subtitle',
    onPress: fn(),
  },
};

export const AllVariants: Story = {
  args: {
    title: 'List Item Title',
    subtitle: 'This is a subtitle',
    leftElement: <View style={styles.icon} />,
    rightElement: (
      <View style={styles.badge}>
        <Text variant="Paragraph.small.bold" style={styles.badgeText}>
          5
        </Text>
      </View>
    ),
    onPress: fn(),
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Basic List Items
        </Text>
        <ListItem title="Simple List Item" onPress={fn()} />
        <ListItem
          title="List Item with Subtitle"
          subtitle="This is a subtitle"
          onPress={fn()}
        />
        <ListItem title="Disabled List Item" disabled onPress={fn()} />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          With Left Element
        </Text>
        <ListItem
          title="List Item with Icon"
          leftElement={<View style={styles.icon} />}
          onPress={fn()}
        />
        <ListItem
          title="List Item with Icon and Subtitle"
          subtitle="Subtitle text"
          leftElement={<Icon name="person" type="ion" size={24} />}
          onPress={fn()}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          With Right Element
        </Text>
        <ListItem
          title="List Item with Right Icon"
          rightElement={<Icon name="chevron-forward" type="ion" size={20} />}
          onPress={fn()}
        />
        <ListItem
          title="List Item with Badge"
          rightElement={
            <View style={styles.badge}>
              <Text variant="Paragraph.small.bold" style={styles.badgeText}>
                5
              </Text>
            </View>
          }
          onPress={fn()}
        />
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Complete Examples
        </Text>
        <ListItem
          title="Complete List Item"
          subtitle="With all elements"
          leftElement={<Icon name="settings" type="ion" size={24} />}
          rightElement={<Icon name="chevron-forward" type="ion" size={20} />}
          onPress={fn()}
        />
        <ListItem title="Non-clickable Item" subtitle="No onPress handler" />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All list item variants displayed together.',
      },
    },
  },
};
