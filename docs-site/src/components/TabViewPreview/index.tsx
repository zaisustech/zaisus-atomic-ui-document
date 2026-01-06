import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type TabViewPreviewProps = {
  type?: 'fixed' | 'scroll';
  showMultiple?: boolean;
};

/**
 * TabViewPreview renders the TabView component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function TabViewPreview({
  type = 'scroll',
  showMultiple = false,
}: TabViewPreviewProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Fixed Type</Text>
            <TabViewDemo type="fixed" />
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Scroll Type</Text>
            <TabViewDemo type="scroll" />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <TabView type={type} value={selectedTab} onChange={setSelectedTab}>
          <View style={styles.tab}>
            <Text variant="Paragraph.default.bold">Tab 1</Text>
          </View>
          <View style={styles.tab}>
            <Text variant="Paragraph.default.bold">Tab 2</Text>
          </View>
          <View style={styles.tab}>
            <Text variant="Paragraph.default.bold">Tab 3</Text>
          </View>
        </TabView>
        <View style={styles.content}>
          <Text variant="Paragraph.default.regular">Content for Tab {selectedTab + 1}</Text>
        </View>
      </View>
    </ComponentPreview>
  );
}

// Helper component for multiple previews
function TabViewDemo({ type }: { type: 'fixed' | 'scroll' }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.demoContainer}>
      <TabView type={type} value={selectedTab} onChange={setSelectedTab}>
        <View style={styles.tab}>
          <Text variant="Paragraph.default.bold">Tab 1</Text>
        </View>
        <View style={styles.tab}>
          <Text variant="Paragraph.default.bold">Tab 2</Text>
        </View>
        <View style={styles.tab}>
          <Text variant="Paragraph.default.bold">Tab 3</Text>
        </View>
      </TabView>
      <View style={styles.content}>
        <Text variant="Paragraph.small.regular">Selected: Tab {selectedTab + 1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    gap: 16,
    width: '100%',
    alignItems: 'stretch',
  },
  section: {
    gap: 12,
    width: '100%',
  },
  demoContainer: {
    gap: 12,
    width: '100%',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
});


