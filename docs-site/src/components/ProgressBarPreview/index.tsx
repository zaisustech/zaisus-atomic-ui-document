import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type ProgressBarPreviewProps = {
  progress?: number;
  height?: number;
  showLabel?: boolean;
  animated?: boolean;
  showMultiple?: boolean;
};

/**
 * ProgressBarPreview renders the ProgressBar component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function ProgressBarPreview({
  progress = 50,
  height,
  showLabel = false,
  animated = true,
  showMultiple = false,
}: ProgressBarPreviewProps) {
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
            <ProgressBar progress={25} />
            <ProgressBar progress={50} />
            <ProgressBar progress={75} />
            <ProgressBar progress={100} />
          </View>

          <View style={styles.section}>
            <ProgressBar progress={animatedProgress} showLabel={true} />
          </View>

          <View style={styles.section}>
            <ProgressBar 
              progress={60} 
              height={12} 
              color="#4ECDC4"
              showLabel={true}
            />
          </View>

          <View style={styles.section}>
            <ProgressBar 
              progress={80} 
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
        <ProgressBar
          progress={progress}
          height={height}
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
    alignItems: 'stretch',
  },
  singleContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
  section: {
    gap: 12,
    width: '100%',
  },
});


