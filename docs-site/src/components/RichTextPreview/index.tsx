import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RichText } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type RichTextPreviewProps = {
  text?: string;
  showMultiple?: boolean;
};

/**
 * RichTextPreview renders the RichText component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function RichTextPreview({
  text = "This is <h>highlighted</h> text with a <a href='https://example.com'>link</a>.",
  showMultiple = false,
}: RichTextPreviewProps) {
  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.example}>
            <RichText
              text="This is <h>highlighted</h> text with a <a href='https://example.com'>link</a>."
              highlightedStyle={{ color: '#4ECDC4', fontWeight: 'bold' }}
              linkStyle={{ color: '#0066CC', textDecorationLine: 'underline' }}
              onPressLink={(url) => console.log('Link pressed:', url)}
            />
          </View>

          <View style={styles.example}>
            <RichText
              text="You can have <h>multiple highlights</h> and <h>links</h> in the same text. Visit <a href='https://reactnative.dev'>React Native</a> for more info."
              highlightedStyle={{ color: '#FF6B6B', fontWeight: 'bold' }}
              linkStyle={{ color: '#4ECDC4', textDecorationLine: 'underline' }}
              onPressLink={(url) => console.log('Link pressed:', url)}
            />
          </View>

          <View style={styles.example}>
            <RichText
              text="Links can be <a href='https://example.com'>clicked</a> and will trigger the onPressLink callback."
              highlightedStyle={{ color: '#4ECDC4', fontWeight: 'bold' }}
              linkStyle={{ color: '#0066CC', textDecorationLine: 'underline' }}
              onPressLink={(url) => alert(`Link clicked: ${url}`)}
            />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <RichText
          text={text}
          highlightedStyle={{ color: '#4ECDC4', fontWeight: 'bold' }}
          linkStyle={{ color: '#0066CC', textDecorationLine: 'underline' }}
          onPressLink={(url) => console.log('Link pressed:', url)}
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
    width: '100%',
    alignItems: 'stretch',
  },
  example: {
    paddingVertical: 8,
  },
});


