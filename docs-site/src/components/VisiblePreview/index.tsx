import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Visible, Text, Button } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type VisiblePreviewProps = {
  visible?: boolean;
  showMultiple?: boolean;
};

/**
 * VisiblePreview renders the Visible component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function VisiblePreview({
  visible = true,
  showMultiple = false,
}: VisiblePreviewProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Button
              title={isVisible ? 'Hide Content' : 'Show Content'}
              variant="primary"
              onPress={() => setIsVisible(!isVisible)}
            />
            <Visible visible={isVisible}>
              <View style={styles.contentBox}>
                <Text variant="Paragraph.default.regular">
                  This content is conditionally rendered
                </Text>
                <Text variant="Paragraph.small.regular">
                  Click the button above to toggle visibility
                </Text>
              </View>
            </Visible>
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Always Visible:</Text>
            <Visible visible={true}>
              <View style={styles.contentBox}>
                <Text variant="Paragraph.default.regular">This is always visible</Text>
              </View>
            </Visible>
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Always Hidden:</Text>
            <Visible visible={false}>
              <View style={styles.contentBox}>
                <Text variant="Paragraph.default.regular">This should not be visible</Text>
              </View>
            </Visible>
            <Text variant="Paragraph.small.regular" style={styles.hiddenText}>
              (Content above is hidden)
            </Text>
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Button
          title={isVisible ? 'Hide' : 'Show'}
          variant="primary"
          onPress={() => setIsVisible(!isVisible)}
        />
        <Visible visible={isVisible}>
          <View style={styles.contentBox}>
            <Text variant="Paragraph.default.regular">
              This content is conditionally rendered
            </Text>
          </View>
        </Visible>
      </View>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    gap: 12,
    width: '100%',
    alignItems: 'center',
  },
  section: {
    gap: 12,
    width: '100%',
    alignItems: 'center',
  },
  contentBox: {
    padding: 16,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  hiddenText: {
    color: '#999',
    fontStyle: 'italic',
  },
});


