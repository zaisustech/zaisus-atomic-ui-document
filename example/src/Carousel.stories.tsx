/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { Carousel, defaultTheme, Text } from '@zaisustech/atomic-ui';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.primary,
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    width: 300,
  },
  carouselItem2: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.error,
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    width: 300,
  },
  carouselItem3: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.secondary,
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    width: 300,
  },
  carouselItem4: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.warning,
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    width: 300,
  },
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
  textWhite: {
    color: defaultTheme.colors.primaryText,
  },
});

const meta = {
  title: 'Example/Carousel',
  component: Carousel,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onChangePage: fn() },
  argTypes: {
    page: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCarousel: Story = {
  args: { page: 0 },
  render: () => {
    const [page, setPage] = useState(0);

    return (
      <View style={styles.container}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Basic Carousel
        </Text>
        <Carousel page={page} onChangePage={setPage}>
          <View style={styles.carouselItem}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 1
            </Text>
          </View>
          <View style={styles.carouselItem2}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 2
            </Text>
          </View>
          <View style={styles.carouselItem3}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 3
            </Text>
          </View>
        </Carousel>
        <Text variant="Paragraph.default.regular">
          Current page: {page + 1}
        </Text>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic carousel with multiple pages that can be swiped horizontally.',
      },
    },
  },
};

export const MultiplePages: Story = {
  args: { page: 0 },
  render: () => {
    const [page, setPage] = useState(0);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Multiple Pages
          </Text>
          <Carousel page={page} onChangePage={setPage}>
            <View style={styles.carouselItem}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 1
              </Text>
            </View>
            <View style={styles.carouselItem2}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 2
              </Text>
            </View>
            <View style={styles.carouselItem3}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 3
              </Text>
            </View>
            <View style={styles.carouselItem4}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 4
              </Text>
            </View>
          </Carousel>
          <Text variant="Paragraph.default.regular">
            Current page: {page + 1} of 4
          </Text>
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with multiple pages. Swipe to navigate between pages.',
      },
    },
  },
};
