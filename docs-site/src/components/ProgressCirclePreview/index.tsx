import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressCircle } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type ProgressCirclePreviewProps = {
  progress?: number;
  size?: number;
  showLabel?: boolean;
  animated?: boolean;
  showMultiple?: boolean;
};

/**
 * ProgressCirclePreview renders the ProgressCircle component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function ProgressCirclePreview({
  progress = 50,
  size,
  showLabel = false,
  animated = true,
  showMultiple = false,
}: ProgressCirclePreviewProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (showMultiple) {
      const interval = setInterval(() => {
        setAnimatedProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [showMultiple]);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={styles.row}>
              <ProgressCircle progress={25} />
              <ProgressCircle progress={50} />
              <ProgressCircle progress={75} />
              <ProgressCircle progress={100} />
            </View>
          </View>

          <View style={styles.section}>
            <ProgressCircle progress={animatedProgress} showLabel={true} />
          </View>

          <View style={styles.section}>
            <ProgressCircle 
              progress={60} 
              size={120} 
              strokeWidth={10}
              color="#4ECDC4"
              showLabel={true}
            />
          </View>

          <View style={styles.section}>
            <ProgressCircle 
              progress={90} 
              animated={false}
              backgroundColor="#E0E0E0"
            />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <ProgressCircle
          progress={progress}
          size={size}
          showLabel={showLabel}
          animated={animated}
        />
      </View>
    </ComponentPreview>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: '100%',
    alignItems: 'center',
  },
  singleContainer: {
    width: '100%',
    alignItems: 'center',
  },
  section: {
    gap: 12,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 24,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


