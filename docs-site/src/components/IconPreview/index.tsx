import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type IconPreviewProps = {
  name?: string;
  type?: 'fa' | 'ion' | 'material';
  size?: number;
  color?: string;
  variant?: 'default' | 'circle';
  showMultiple?: boolean;
};

/**
 * IconPreview renders the Icon component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function IconPreview({
  name = 'heart',
  type = 'fa',
  size = 24,
  color,
  variant = 'default',
  showMultiple = false,
}: IconPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={styles.labelText}>FontAwesome</View>
            <View style={styles.row}>
              <Icon name="heart" type="fa" size={24} color="#FF0000" />
              <Icon name="star" type="fa" size={24} color="#FFD700" />
              <Icon name="home" type="fa" size={24} />
              <Icon name="user" type="fa" size={24} />
              <Icon name="cog" type="fa" size={24} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelText}>Ionicons</View>
            <View style={styles.row}>
              <Icon name="heart" type="ion" size={24} color="#FF0000" />
              <Icon name="star" type="ion" size={24} color="#FFD700" />
              <Icon name="home" type="ion" size={24} />
              <Icon name="person" type="ion" size={24} />
              <Icon name="settings" type="ion" size={24} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelText}>Material Icons</View>
            <View style={styles.row}>
              <Icon name="favorite" type="material" size={24} color="#FF0000" />
              <Icon name="star" type="material" size={24} color="#FFD700" />
              <Icon name="home" type="material" size={24} />
              <Icon name="person" type="material" size={24} />
              <Icon name="settings" type="material" size={24} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelText}>Variants</View>
            <View style={styles.row}>
              <View style={styles.variantItem}>
                <Icon name="heart" type="fa" size={24} variant="default" />
                <View style={styles.variantLabel}>Default</View>
              </View>
              <View style={styles.variantItem}>
                <Icon name="heart" type="fa" size={24} variant="circle" />
                <View style={styles.variantLabel}>Circle</View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelText}>Sizes</View>
            <View style={styles.row}>
              <Icon name="star" type="fa" size={16} />
              <Icon name="star" type="fa" size={24} />
              <Icon name="star" type="fa" size={32} />
              <Icon name="star" type="fa" size={48} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelText}>Pressable</View>
            <View style={styles.row}>
              <Icon
                name="heart"
                type="fa"
                size={24}
                onPress={() => console.log('Heart pressed')}
              />
              <Icon
                name="star"
                type="fa"
                size={24}
                variant="circle"
                onPress={() => console.log('Star pressed')}
              />
            </View>
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <Icon
        name={name}
        type={type}
        size={size}
        color={color}
        variant={variant}
        onPress={() => console.log('Icon pressed')}
      />
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: '100%',
    alignItems: 'center',
  },
  section: {
    gap: 12,
    width: '100%',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variantItem: {
    alignItems: 'center',
    gap: 8,
  },
  variantLabel: {
    fontSize: 12,
    color: '#666',
  },
});

