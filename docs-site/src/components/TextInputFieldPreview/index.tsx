import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInputField, Icon } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type TextInputFieldPreviewProps = {
  placeholder?: string;
  showMultiple?: boolean;
};

/**
 * TextInputFieldPreview renders the TextInputField component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function TextInputFieldPreview({
  placeholder = 'Enter text',
  showMultiple = false,
}: TextInputFieldPreviewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <TextInputField
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              leftElement={<Icon name="envelope" type="fa" />}
            />
          </View>

          <View style={styles.section}>
            <TextInputField
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.section}>
            <TextInputField
              placeholder="With clear button"
              value={text}
              onChangeText={setText}
              isShowClearButton
            />
          </View>

          <View style={styles.section}>
            <TextInputField
              placeholder="With error"
              value={email}
              onChangeText={setEmail}
              error="Invalid email address"
            />
          </View>

          <View style={styles.section}>
            <TextInputField
              placeholder="Disabled"
              value="Disabled value"
              disabled={true}
            />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <TextInputField
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
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
  section: {
    width: '100%',
  },
});


