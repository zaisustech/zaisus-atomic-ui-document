/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-native';
import { defaultTheme, Pager, Text } from '@zaisustech/atomic-ui';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  page: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.primary,
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    width: '100%',
  },
  page2: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.error,
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    width: '100%',
  },
  page3: {
    alignItems: 'center',
    backgroundColor: defaultTheme.colors.secondary,
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    width: '100%',
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
  title: 'Example/Pager',
  component: Pager,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPageChange: fn() },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['flat', 'view'],
    },
    scrollEnabled: {
      control: {
        type: 'boolean',
      },
    },
    page: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof Pager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlatListType: Story = {
  render: () => {
    const [page, setPage] = useState(0);

    return (
      <View style={styles.container}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          FlatList Type Pager
        </Text>
        <Pager type="flat" page={page} onPageChange={setPage} scrollEnabled>
          <View style={styles.page}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 1
            </Text>
          </View>
          <View style={styles.page2}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 2
            </Text>
          </View>
          <View style={styles.page3}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 3
            </Text>
          </View>
        </Pager>
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
          'Pager using FlatList type for horizontal scrolling through pages.',
      },
    },
  },
};

export const ViewType: Story = {
  render: () => {
    const [page, setPage] = useState(0);

    return (
      <View style={styles.container}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          View Type Pager
        </Text>
        <Pager type="view" page={page} onPageChange={setPage}>
          <View style={styles.page}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 1
            </Text>
          </View>
          <View style={styles.page2}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 2
            </Text>
          </View>
          <View style={styles.page3}>
            <Text variant="Header.large.bold" style={styles.textWhite}>
              Page 3
            </Text>
          </View>
        </Pager>
        <Text variant="Paragraph.default.regular">
          Current page: {page + 1}
        </Text>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Pager using View type for programmatic page switching.',
      },
    },
  },
};

export const ScrollDisabled: Story = {
  render: () => {
    const [page, setPage] = useState(0);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Scroll Disabled
          </Text>
          <Pager
            type="flat"
            page={page}
            onPageChange={setPage}
            scrollEnabled={false}
          >
            <View style={styles.page}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 1
              </Text>
            </View>
            <View style={styles.page2}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 2
              </Text>
            </View>
            <View style={styles.page3}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 3
              </Text>
            </View>
          </Pager>
          <Text variant="Paragraph.default.regular">
            Current page: {page + 1} (Scroll disabled)
          </Text>
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pager with scrolling disabled. Pages can only be changed programmatically.',
      },
    },
  },
};

export const MultiplePages: Story = {
  render: () => {
    const [page, setPage] = useState(0);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text variant="Header.large.bold" style={styles.sectionTitle}>
            Multiple Pages
          </Text>
          <Pager type="flat" page={page} onPageChange={setPage} scrollEnabled>
            <View style={styles.page}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 1
              </Text>
            </View>
            <View style={styles.page2}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 2
              </Text>
            </View>
            <View style={styles.page3}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 3
              </Text>
            </View>
            <View style={styles.page}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 4
              </Text>
            </View>
            <View style={styles.page2}>
              <Text variant="Header.large.bold" style={styles.textWhite}>
                Page 5
              </Text>
            </View>
          </Pager>
          <Text variant="Paragraph.default.regular">
            Current page: {page + 1} of 5
          </Text>
        </View>
      </ScrollView>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Pager with multiple pages. Swipe to navigate between pages.',
      },
    },
  },
};
