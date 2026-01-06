import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionSheet, ActionSheetItem, Button } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type ActionSheetPreviewProps = {
  presentationStyle?: 'bottomSheet' | 'alert' | 'presentTopCard';
  title?: string;
  showMultiple?: boolean;
};

const defaultItems: ActionSheetItem[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

/**
 * ActionSheetPreview renders the ActionSheet component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function ActionSheetPreview({
  presentationStyle = 'bottomSheet',
  title,
  showMultiple = false,
}: ActionSheetPreviewProps) {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ActionSheetItem | undefined>();

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.row}>
            <ActionSheetDemo
              presentationStyle="bottomSheet"
              title="Bottom Sheet"
            />
            <ActionSheetDemo
              presentationStyle="alert"
              title="Alert Dialog"
            />
            <ActionSheetDemo
              presentationStyle="presentTopCard"
              title="Top Card"
            />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview title={title}>
      <View style={styles.singleContainer}>
        <Button
          variant="primary"
          title={title || `Show ${presentationStyle} Action Sheet`}
          onPress={() => setVisible(true)}
        />
        <ActionSheet
          visible={visible}
          items={defaultItems}
          value={selectedItem}
          presentationStyle={presentationStyle}
          title={title}
          onClose={() => setVisible(false)}
          onChange={(item) => {
            setSelectedItem(item);
            setVisible(false);
          }}
        />
      </View>
    </ComponentPreview>
  );
}

// Helper component for multiple previews
function ActionSheetDemo({
  presentationStyle,
  title,
}: {
  presentationStyle: 'bottomSheet' | 'alert' | 'presentTopCard';
  title: string;
}) {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ActionSheetItem | undefined>();

  return (
    <View style={styles.demoContainer}>
      <Button
        variant="primary"
        title={title}
        onPress={() => setVisible(true)}
      />
      <ActionSheet
        visible={visible}
        items={defaultItems}
        value={selectedItem}
        presentationStyle={presentationStyle}
        title={title}
        onClose={() => setVisible(false)}
        onChange={(item) => {
          setSelectedItem(item);
          setVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  singleContainer: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
  },
  demoContainer: {
    gap: 8,
    alignItems: 'center',
  },
});

