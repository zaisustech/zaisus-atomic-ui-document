import React from 'react';
import { View, StyleSheet } from 'react-native';
import { EmptyState, Icon } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type EmptyStatePreviewProps = {
  title?: string;
  message?: string;
  buttonTitle?: string;
  showMultiple?: boolean;
};

/**
 * EmptyStatePreview renders the EmptyState component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function EmptyStatePreview({
  title = 'No items found',
  message = 'There are no items to display at this time.',
  buttonTitle,
  showMultiple = false,
}: EmptyStatePreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <EmptyState
            title="No items found"
            message="There are no items to display at this time."
          />

          <EmptyState
            title="No items found"
            message="There are no items to display at this time."
            buttonTitle="Add Item"
            onPress={() => console.log('Add item pressed')}
          />

          <EmptyState
            title="No search results"
            message="Try adjusting your search criteria."
            image={<Icon name="search" type="fa" size={64} />}
            buttonTitle="Clear Search"
            onPress={() => console.log('Clear search pressed')}
          />
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <EmptyState
          title={title}
          message={message}
          buttonTitle={buttonTitle}
          onPress={buttonTitle ? () => console.log('Button pressed') : undefined}
        />
      </View>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
});


