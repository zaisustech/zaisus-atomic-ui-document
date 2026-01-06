import type { Meta, StoryObj } from '@storybook/react-native';
import { Icon, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  iconRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'flex-start',
  },
  section: {
    gap: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 8,
  },
});

const meta = {
  title: 'Example/Icon',
  component: Icon,
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
    type: {
      control: {
        type: 'select',
      },
      options: ['fa', 'ion', 'material'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'circle'],
    },
    size: {
      control: {
        type: 'number',
        min: 10,
        max: 100,
        step: 5,
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  args: {
    type: 'fa',
    name: 'star',
    size: 30,
    onPress: fn(),
  },
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Icon Types
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          FontAwesome Icons
        </Text>
        <View style={styles.iconRow}>
          <Icon type="fa" name="home" size={30} onPress={fn()} />
          <Icon type="fa" name="user" size={30} onPress={fn()} />
          <Icon type="fa" name="heart" size={30} onPress={fn()} />
          <Icon type="fa" name="star" size={30} onPress={fn()} />
          <Icon type="fa" name="settings" size={30} onPress={fn()} />
        </View>

        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Ionicons
        </Text>
        <View style={styles.iconRow}>
          <Icon type="ion" name="home" size={30} onPress={fn()} />
          <Icon type="ion" name="person" size={30} onPress={fn()} />
          <Icon type="ion" name="heart" size={30} onPress={fn()} />
          <Icon type="ion" name="star" size={30} onPress={fn()} />
          <Icon type="ion" name="settings" size={30} onPress={fn()} />
        </View>

        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Material Design Icons
        </Text>
        <View style={styles.iconRow}>
          <Icon type="material" name="home" size={30} onPress={fn()} />
          <Icon type="material" name="person" size={30} onPress={fn()} />
          <Icon type="material" name="favorite" size={30} onPress={fn()} />
          <Icon type="material" name="star" size={30} onPress={fn()} />
          <Icon type="material" name="settings" size={30} onPress={fn()} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Variants
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Default Variant
        </Text>
        <View style={styles.iconRow}>
          <Icon
            type="fa"
            name="home"
            variant="default"
            size={30}
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="user"
            variant="default"
            size={30}
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="heart"
            variant="default"
            size={30}
            onPress={fn()}
          />
        </View>

        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Circle Variant
        </Text>
        <View style={styles.iconRow}>
          <Icon
            type="fa"
            name="home"
            variant="circle"
            size={30}
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="user"
            variant="circle"
            size={30}
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="heart"
            variant="circle"
            size={30}
            onPress={fn()}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Sizes
        </Text>
        <View style={styles.iconRow}>
          <Icon type="fa" name="star" size={16} onPress={fn()} />
          <Icon type="fa" name="star" size={24} onPress={fn()} />
          <Icon type="fa" name="star" size={32} onPress={fn()} />
          <Icon type="fa" name="star" size={40} onPress={fn()} />
          <Icon type="fa" name="star" size={48} onPress={fn()} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Colors
        </Text>
        <View style={styles.iconRow}>
          <Icon
            type="fa"
            name="heart"
            size={30}
            color="#FF6B6B"
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="heart"
            size={30}
            color="#4ECDC4"
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="heart"
            size={30}
            color="#45B7D1"
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="heart"
            size={30}
            color="#FFA07A"
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="heart"
            size={30}
            color="#98D8C8"
            onPress={fn()}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Interactive States
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Clickable Icons (with onPress)
        </Text>
        <View style={styles.iconRow}>
          <Icon type="fa" name="home" size={30} onPress={fn()} />
          <Icon type="fa" name="user" size={30} onPress={fn()} />
          <Icon type="fa" name="heart" size={30} onPress={fn()} />
        </View>

        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Non-clickable Icons (without onPress)
        </Text>
        <View style={styles.iconRow}>
          <Icon type="fa" name="home" size={30} />
          <Icon type="fa" name="user" size={30} />
          <Icon type="fa" name="heart" size={30} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          With Value Prop
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Icons can pass a value when pressed
        </Text>
        <View style={styles.iconRow}>
          <Icon
            type="fa"
            name="home"
            size={30}
            value="home-value"
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="user"
            size={30}
            value="user-value"
            onPress={fn()}
          />
          <Icon
            type="fa"
            name="heart"
            size={30}
            value="heart-value"
            onPress={fn()}
          />
        </View>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All icon variants, types, sizes, and states displayed together.',
      },
    },
  },
};

export const Default: Story = {
  args: {
    type: 'fa',
    name: 'home',
    size: 30,
    onPress: fn(),
  },
};

export const CircleVariant: Story = {
  args: {
    type: 'fa',
    name: 'user',
    variant: 'circle',
    size: 30,
    onPress: fn(),
  },
};

export const DifferentSizes: Story = {
  args: {
    type: 'fa',
    name: 'star',
    size: 30,
    onPress: fn(),
  },
  render: () => (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon type="fa" name="star" size={16} onPress={fn()} />
        <Icon type="fa" name="star" size={24} onPress={fn()} />
        <Icon type="fa" name="star" size={32} onPress={fn()} />
        <Icon type="fa" name="star" size={40} onPress={fn()} />
        <Icon type="fa" name="star" size={48} onPress={fn()} />
      </View>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons in different sizes from 16px to 48px.',
      },
    },
  },
};

export const DifferentTypes: Story = {
  args: {
    type: 'fa',
    name: 'star',
    size: 30,
    onPress: fn(),
  },
  render: () => (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          FontAwesome
        </Text>
        <View style={styles.iconRow}>
          <Icon type="fa" name="home" size={30} onPress={fn()} />
          <Icon type="fa" name="user" size={30} onPress={fn()} />
          <Icon type="fa" name="heart" size={30} onPress={fn()} />
        </View>

        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Ionicons
        </Text>
        <View style={styles.iconRow}>
          <Icon type="ion" name="home" size={30} onPress={fn()} />
          <Icon type="ion" name="person" size={30} onPress={fn()} />
          <Icon type="ion" name="heart" size={30} onPress={fn()} />
        </View>

        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Material Design
        </Text>
        <View style={styles.iconRow}>
          <Icon type="material" name="home" size={30} onPress={fn()} />
          <Icon type="material" name="person" size={30} onPress={fn()} />
          <Icon type="material" name="favorite" size={30} onPress={fn()} />
        </View>
      </View>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icons from different icon libraries: FontAwesome, Ionicons, and Material Design.',
      },
    },
  },
};
