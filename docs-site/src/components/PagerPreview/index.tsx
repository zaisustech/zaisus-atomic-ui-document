import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Pager, Text, Button } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type PagerPreviewProps = {
  type?: 'flat' | 'view';
  showMultiple?: boolean;
};

/**
 * PagerPreview renders the Pager component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function PagerPreview({
  type = 'flat',
  showMultiple = false,
}: PagerPreviewProps) {
  const [currentPage, setCurrentPage] = useState(0);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Flat Type (Scrollable)</Text>
            <PagerDemo type="flat" scrollEnabled={true} />
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">View Type (Programmatic)</Text>
            <PagerDemo type="view" scrollEnabled={false} />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Pager
          type={type}
          page={currentPage}
          onPageChange={setCurrentPage}
          scrollEnabled={type === 'flat'}
        >
          <View style={styles.page}>
            <Text variant="Header.default.bold">Page 1</Text>
            <Text variant="Paragraph.default.regular">Swipe or use buttons to navigate</Text>
          </View>
          <View style={styles.page}>
            <Text variant="Header.default.bold">Page 2</Text>
            <Text variant="Paragraph.default.regular">This is the second page</Text>
          </View>
          <View style={styles.page}>
            <Text variant="Header.default.bold">Page 3</Text>
            <Text variant="Paragraph.default.regular">This is the third page</Text>
          </View>
        </Pager>
        <View style={styles.controls}>
          <Button
            title="Previous"
            variant="secondary"
            disabled={currentPage === 0}
            onPress={() => setCurrentPage(Math.max(0, currentPage - 1))}
          />
          <Text variant="Paragraph.default.regular">Page {currentPage + 1}</Text>
          <Button
            title="Next"
            variant="secondary"
            disabled={currentPage === 2}
            onPress={() => setCurrentPage(Math.min(2, currentPage + 1))}
          />
        </View>
      </View>
    </ComponentPreview>
  );
}

// Helper component for multiple previews
function PagerDemo({ type, scrollEnabled }: { type: 'flat' | 'view'; scrollEnabled: boolean }) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={styles.demoContainer}>
      <Pager
        type={type}
        page={currentPage}
        onPageChange={setCurrentPage}
        scrollEnabled={scrollEnabled}
      >
        <View style={styles.page}>
          <Text variant="Paragraph.default.regular">Page 1</Text>
        </View>
        <View style={styles.page}>
          <Text variant="Paragraph.default.regular">Page 2</Text>
        </View>
        <View style={styles.page}>
          <Text variant="Paragraph.default.regular">Page 3</Text>
        </View>
      </Pager>
      <View style={styles.controls}>
        <Button
          title="Prev"
          variant="secondary"
          disabled={currentPage === 0}
          onPress={() => setCurrentPage(Math.max(0, currentPage - 1))}
        />
        <Text variant="Paragraph.small.regular">Page {currentPage + 1}</Text>
        <Button
          title="Next"
          variant="secondary"
          disabled={currentPage === 2}
          onPress={() => setCurrentPage(Math.min(2, currentPage + 1))}
        />
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
  page: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
});


