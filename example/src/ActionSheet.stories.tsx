import type { Meta, StoryObj } from '@storybook/react-native';
import {
  ActionSheet,
  type ActionSheetItem,
  type ActionSheetPresentationStyle,
  Button,
  Text,
} from '@zaisustech/atomic-ui';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fn } from 'storybook/test';

const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
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
});

const sampleItems: ActionSheetItem[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5' },
];

const manyItems: ActionSheetItem[] = Array.from({ length: 20 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Option ${i + 1}`,
}));

const meta = {
  title: 'Example/ActionSheet',
  component: ActionSheet,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    visible: false,
    items: sampleItems,
    presentationStyle: 'bottomSheet',
    onClose: fn(),
    onChange: fn(),
  },
  argTypes: {
    visible: {
      control: {
        type: 'boolean',
      },
    },
    value: {
      control: {
        type: 'object',
      },
    },
    presentationStyle: {
      control: {
        type: 'select',
      },
      options: ['bottomSheet', 'alert', 'presentTopCard'],
    },
  },
} satisfies Meta<typeof ActionSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

const ActionSheetWrapper: React.FC<{
  items: ActionSheetItem[];
  initialValue?: ActionSheetItem;
  presentationStyle?: ActionSheetPresentationStyle;
  description?: string;
  title?: string;
}> = ({
  items,
  initialValue,
  presentationStyle = 'bottomSheet',
  description,
  title,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<
    ActionSheetItem | undefined
  >(initialValue);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleChange = (value: ActionSheetItem) => {
    setSelectedValue(value);
    fn()(value);
  };

  const getButtonTitle = () => {
    if (selectedValue) {
      return `Selected: ${selectedValue.label}`;
    }
    switch (presentationStyle) {
      case 'bottomSheet':
        return 'Open Bottom Sheet';
      case 'alert':
        return 'Open Alert';
      case 'presentTopCard':
        return 'Open Top Card';
      default:
        return 'Open Action Sheet';
    }
  };

  return (
    <View>
      {description && (
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          {description}
        </Text>
      )}
      <Button
        variant="primary"
        title={getButtonTitle()}
        onPress={handleOpen}
        style={styles.button}
      />
      <ActionSheet
        visible={visible}
        items={items}
        value={selectedValue}
        presentationStyle={presentationStyle}
        title={title}
        onClose={handleClose}
        onChange={handleChange}
      />
    </View>
  );
};

export const Basic: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Basic Action Sheet (Bottom Sheet)
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          title="Select an Option"
          presentationStyle="bottomSheet"
          description="Tap the button to open the action sheet with bottom sheet presentation style."
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A basic action sheet with bottom sheet presentation style. Slides up from bottom and dismisses with slide down animation.',
      },
    },
  },
};

export const AlertStyle: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Alert Presentation Style
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="alert"
          title="Select an Option"
          description="Action sheet with alert presentation style. Fades in/out from center."
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Action sheet with alert presentation style. Uses fade in/out animations and appears centered on screen.',
      },
    },
  },
};

export const TopCardStyle: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Top Card Presentation Style
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="presentTopCard"
          description="Action sheet with top card presentation style. Slides down from top."
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Action sheet with top card presentation style. Slides down from top and dismisses with slide up animation. Features rounded bottom corners, padding on all sides, and a bottom border line.',
      },
    },
  },
};

export const WithInitialValue: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          With Initial Selection
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          initialValue={sampleItems[2]}
          presentationStyle="bottomSheet"
          description="Action sheet with a pre-selected value."
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Action sheet with an initial selected value.',
      },
    },
  },
};

export const ManyItems: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Many Items
        </Text>
        <ActionSheetWrapper
          items={manyItems}
          presentationStyle="bottomSheet"
          description="Action sheet with many items. The sheet is scrollable."
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Action sheet with many items demonstrating scrollable behavior.',
      },
    },
  },
};

export const AllPresentationStyles: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          All Presentation Styles
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Open different action sheets to see various presentation styles and
          animations.
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="bottomSheet"
          description="Bottom Sheet - Slides up from bottom"
        />
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="alert"
          description="Alert - Fades in from center"
        />
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="presentTopCard"
          description="Top Card - Pops down with bounce animation from top, rounded bottom corners"
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All action sheet presentation styles displayed together. Open each one to see different animations and positioning.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          All States
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Open different action sheets to see various states and behaviors.
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="bottomSheet"
          description="Basic action sheet"
        />
        <ActionSheetWrapper
          items={sampleItems}
          initialValue={sampleItems[1]}
          presentationStyle="bottomSheet"
          description="Action sheet with selection"
        />
        <ActionSheetWrapper
          items={manyItems}
          presentationStyle="bottomSheet"
          description="Action sheet with many items"
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All action sheet states displayed together. Open each action sheet to see different behaviors.',
      },
    },
  },
};

export const WithTitle: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          With Title and Close Icon
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="bottomSheet"
          title="Select an Option"
          description="Action sheet with title and close icon. Tap the close icon to dismiss."
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Action sheet with a title displayed at the top. The title includes a close icon on the right that dismisses the modal when pressed.',
      },
    },
  },
};

export const TitleWithAllStyles: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Title with All Presentation Styles
        </Text>
        <Text variant="Paragraph.default.regular" style={styles.sectionTitle}>
          Open different action sheets to see titles with various presentation
          styles.
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="bottomSheet"
          title="Bottom Sheet Title"
          description="Bottom Sheet with title - Slides up from bottom"
        />
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="alert"
          title="Alert Title"
          description="Alert with title - Fades in from center"
        />
        <ActionSheetWrapper
          items={sampleItems}
          presentationStyle="presentTopCard"
          title="Top Card Title"
          description="Top Card with title - Slides down from top"
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Action sheets with titles displayed across all presentation styles. Each title includes a close icon on the right that dismisses the modal.',
      },
    },
  },
};

export const TitleWithSelection: Story = {
  render: () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="Header.large.bold" style={styles.sectionTitle}>
          Title with Selection
        </Text>
        <ActionSheetWrapper
          items={sampleItems}
          initialValue={sampleItems[2]}
          presentationStyle="bottomSheet"
          title="Choose Your Option"
          description="Action sheet with title and pre-selected value."
        />
      </View>
    </ScrollView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Action sheet with a title and a pre-selected value. The close icon dismisses the modal.',
      },
    },
  },
};
