import type { Meta, StoryObj } from '@storybook/react-native';
import { FormFieldContainer, Icon, Text } from '@zaisustech/atomic-ui';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  fieldContent: {
    padding: 12,
  },
  iconContainer: {
    padding: 8,
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
  title: 'Example/FormFieldContainer',
  component: FormFieldContainer,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isFocus: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FormFieldContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicField: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Basic Field
        </Text>
        <FormFieldContainer>
          <View style={styles.fieldContent}>
            <Text variant="Paragraph.default.regular">Field content</Text>
          </View>
        </FormFieldContainer>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic form field container with default styling.',
      },
    },
  },
};

export const WithError: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Field with Error
        </Text>
        <FormFieldContainer error="This field is required">
          <View style={styles.fieldContent}>
            <Text variant="Paragraph.default.regular">Field content</Text>
          </View>
        </FormFieldContainer>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form field container displaying an error message.',
      },
    },
  },
};

export const Focused: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Focused Field
        </Text>
        <FormFieldContainer isFocus>
          <View style={styles.fieldContent}>
            <Text variant="Paragraph.default.regular">Field content</Text>
          </View>
        </FormFieldContainer>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form field container in focused state.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Disabled Field
        </Text>
        <FormFieldContainer disabled>
          <View style={styles.fieldContent}>
            <Text variant="Paragraph.default.regular">Field content</Text>
          </View>
        </FormFieldContainer>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled form field container that cannot be interacted with.',
      },
    },
  },
};

export const WithLeftElement: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Field with Left Icon
        </Text>
        <FormFieldContainer
          leftElement={
            <View style={styles.iconContainer}>
              <Icon name="user" type="fa" size={20} />
            </View>
          }
        >
          <View style={styles.fieldContent}>
            <Text variant="Paragraph.default.regular">Field content</Text>
          </View>
        </FormFieldContainer>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form field container with a left element (icon).',
      },
    },
  },
};

export const WithRightElement: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Field with Right Icon
        </Text>
        <FormFieldContainer
          rightElement={
            <View style={styles.iconContainer}>
              <Icon name="chevron-down" type="ion" size={20} />
            </View>
          }
        >
          <View style={styles.fieldContent}>
            <Text variant="Paragraph.default.regular">Field content</Text>
          </View>
        </FormFieldContainer>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form field container with a right element (icon).',
      },
    },
  },
};

export const WithBothElements: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Field with Both Icons
        </Text>
        <FormFieldContainer
          leftElement={
            <View style={styles.iconContainer}>
              <Icon name="search" type="fa" size={20} />
            </View>
          }
          rightElement={
            <View style={styles.iconContainer}>
              <Icon name="times" type="fa" size={20} />
            </View>
          }
        >
          <View style={styles.fieldContent}>
            <Text variant="Paragraph.default.regular">Field content</Text>
          </View>
        </FormFieldContainer>
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form field container with both left and right elements.',
      },
    },
  },
};
