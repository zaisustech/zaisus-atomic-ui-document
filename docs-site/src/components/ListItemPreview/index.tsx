import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type ListItemPreviewProps = {
  title?: string;
  subtitle?: string;
  showMultiple?: boolean;
};

/**
 * ListItemPreview renders the ListItem component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function ListItemPreview({
  title = 'Settings',
  subtitle = 'Manage your preferences',
  showMultiple = false,
}: ListItemPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <ListItem
            title="Settings"
            subtitle="Manage your preferences"
            leftElement={<Icon name="settings" type="fa" />}
            rightElement={<Icon name="chevron-forward" type="ion" />}
            onPress={() => console.log('Settings pressed')}
          />

          <ListItem
            title="Profile"
            subtitle="View your profile"
            leftElement={<Icon name="user" type="fa" />}
            rightElement={<Icon name="chevron-forward" type="ion" />}
            onPress={() => console.log('Profile pressed')}
          />

          <ListItem
            title="Notifications"
            subtitle="Manage notification settings"
            leftElement={<Icon name="bell" type="fa" />}
            rightElement={<Icon name="chevron-forward" type="ion" />}
            onPress={() => console.log('Notifications pressed')}
          />

          <ListItem
            title="Disabled Item"
            subtitle="This item is disabled"
            leftElement={<Icon name="lock" type="fa" />}
            disabled={true}
          />

          <ListItem
            title="Simple Item"
            onPress={() => console.log('Simple item pressed')}
          />
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <ListItem
          title={title}
          subtitle={subtitle}
          leftElement={<Icon name="settings" type="fa" />}
          rightElement={<Icon name="chevron-forward" type="ion" />}
          onPress={() => console.log('ListItem pressed')}
        />
      </View>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
});


