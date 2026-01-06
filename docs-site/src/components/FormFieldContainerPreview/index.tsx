import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormFieldContainer, Icon, Text, Button } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type FormFieldContainerPreviewProps = {
  showMultiple?: boolean;
};

/**
 * FormFieldContainerPreview renders the FormFieldContainer component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function FormFieldContainerPreview({
  showMultiple = false,
}: FormFieldContainerPreviewProps) {
  const [isFocused, setIsFocused] = useState(false);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <FormFieldContainer
              leftElement={<Icon name="user" type="fa" />}
            >
              <Text variant="Paragraph.default.regular">Normal state</Text>
            </FormFieldContainer>
          </View>

          <View style={styles.section}>
            <FormFieldContainer
              isFocus={true}
              leftElement={<Icon name="envelope" type="fa" />}
            >
              <Text variant="Paragraph.default.regular">Focused state</Text>
            </FormFieldContainer>
          </View>

          <View style={styles.section}>
            <FormFieldContainer
              error="This field is required"
              leftElement={<Icon name="lock" type="fa" />}
            >
              <Text variant="Paragraph.default.regular">Error state</Text>
            </FormFieldContainer>
          </View>

          <View style={styles.section}>
            <FormFieldContainer
              disabled={true}
              leftElement={<Icon name="ban" type="fa" />}
            >
              <Text variant="Paragraph.default.regular">Disabled state</Text>
            </FormFieldContainer>
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <FormFieldContainer
          isFocus={isFocused}
          leftElement={<Icon name="user" type="fa" />}
        >
          <Text variant="Paragraph.default.regular">Field content</Text>
        </FormFieldContainer>
        <Button
          title={isFocused ? 'Blur' : 'Focus'}
          variant="secondary"
          onPress={() => setIsFocused(!isFocused)}
        />
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
    alignItems: 'stretch',
  },
  section: {
    width: '100%',
  },
});


