import type { Meta, StoryObj } from '@storybook/react-native';
import { EmptyState, Icon } from '@zaisustech/atomic-ui';
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
});

const meta = {
  title: 'Example/EmptyState',
  component: EmptyState,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    title: 'No items found',
    message: 'There are no items to display at this time.',
    onPress: fn(),
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
    buttonTitle: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No items found',
    message: 'There are no items to display at this time.',
  },
};

export const WithButton: Story = {
  args: {
    title: 'No items found',
    message: 'There are no items to display at this time.',
    buttonTitle: 'Add Item',
    onPress: fn(),
  },
};

export const WithCustomImage: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <EmptyState
        title="No items found"
        message="There are no items to display at this time."
        image={<Icon name="folder-open" type="fa" size={64} />}
      />
    </ScrollView>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <EmptyState
          title="No items found"
          message="There are no items to display at this time."
          image={<Icon name="inbox" type="fa" size={64} color='gray'/>}
        />
      </View>

      <View style={styles.section}>
        <EmptyState
          title="No items found"
          message="There are no items to display at this time."
          buttonTitle="Add Item"
          buttonVariant="plain"
          image={<Icon name="folder-open" type="fa" size={64} />}
          onPress={fn()}
        />
      </View>

      <View style={styles.section}>
        <EmptyState
          title="No search results"
          message="Try adjusting your search criteria."
          image={<Icon name="search" type="fa" size={64} />}
          buttonTitle="Clear Search"
          onPress={fn()}
        />
      </View>

      <View style={styles.section}>
        <EmptyState
          title="No favorites"
          message="Start adding items to your favorites."
          image={<Icon name="heart" type="fa" size={64} />}
          buttonTitle="Browse Items"
          onPress={fn()}
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various EmptyState configurations displayed together.',
      },
    },
  },
};

