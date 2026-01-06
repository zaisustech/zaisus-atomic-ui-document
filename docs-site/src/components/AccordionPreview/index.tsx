import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Accordion, Text } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type AccordionPreviewProps = {
  title?: string;
  defaultExpanded?: boolean;
  showMultiple?: boolean;
};

/**
 * AccordionPreview renders the Accordion component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function AccordionPreview({
  title = 'Click to expand',
  defaultExpanded = false,
  showMultiple = false,
}: AccordionPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <Accordion
            title="Collapsed Accordion"
            defaultExpanded={false}
            onToggle={(expanded) => console.log('Accordion 1 expanded:', expanded)}
          >
            <Text variant="Paragraph.default.regular">
              This is the content that appears when you expand the accordion.
            </Text>
          </Accordion>

          <Accordion
            title="Expanded Accordion"
            defaultExpanded={true}
            onToggle={(expanded) => console.log('Accordion 2 expanded:', expanded)}
          >
            <Text variant="Paragraph.default.regular">
              This accordion starts expanded by default.
            </Text>
          </Accordion>

          <Accordion
            title="Accordion with Long Content"
            defaultExpanded={false}
            onToggle={(expanded) => console.log('Accordion 3 expanded:', expanded)}
          >
            <View style={styles.contentContainer}>
              <Text variant="Paragraph.default.regular" style={styles.contentText}>
                This accordion contains longer content to demonstrate how it handles
                multiple lines of text and different content types.
              </Text>
              <Text variant="Paragraph.default.regular" style={styles.contentText}>
                You can include any React components inside the accordion content area.
              </Text>
            </View>
          </Accordion>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Accordion
          title={title}
          defaultExpanded={defaultExpanded}
          onToggle={(expanded) => console.log('Accordion expanded:', expanded)}
        >
          <Text variant="Paragraph.default.regular">
            This is the content that appears when you expand the accordion.
            Click the header to toggle the accordion open and closed.
          </Text>
        </Accordion>
      </View>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
  contentContainer: {
    gap: 8,
  },
  contentText: {
    marginBottom: 8,
  },
});

