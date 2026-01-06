import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Carousel, Text, Button, Card } from '@zaisustech/atomic-ui';
import { ComponentPreview } from '../ComponentPreview';

type CarouselPreviewProps = {
  showMultiple?: boolean;
};

/**
 * CarouselPreview renders the Carousel component from @zaisustech/atomic-ui
 * with all necessary providers for the documentation site.
 */
export function CarouselPreview({ showMultiple = false }: CarouselPreviewProps) {
  const [currentPage, setCurrentPage] = useState(0);

  if (showMultiple) {
    return (
      <ComponentPreview>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Basic Carousel</Text>
            <CarouselDemo />
          </View>

          <View style={styles.section}>
            <Text variant="Paragraph.default.bold">Carousel with Cards</Text>
            <CarouselWithCardsDemo />
          </View>
        </View>
      </ComponentPreview>
    );
  }

  return (
    <ComponentPreview>
      <View style={styles.singleContainer}>
        <Carousel page={currentPage} onChangePage={setCurrentPage}>
          <View style={styles.page}>
            <Text variant="Header.default.bold">Page 1</Text>
            <Text variant="Paragraph.default.regular">Swipe to navigate</Text>
          </View>
          <View style={styles.page}>
            <Text variant="Header.default.bold">Page 2</Text>
            <Text variant="Paragraph.default.regular">Swipe left or right</Text>
          </View>
          <View style={styles.page}>
            <Text variant="Header.default.bold">Page 3</Text>
            <Text variant="Paragraph.default.regular">This is the last page</Text>
          </View>
        </Carousel>
        <View style={styles.controls}>
          <Button
            title="Previous"
            variant="secondary"
            disabled={currentPage === 0}
            onPress={() => setCurrentPage(Math.max(0, currentPage - 1))}
          />
          <Text variant="Paragraph.default.regular">Page {currentPage + 1} of 3</Text>
          <Button
            title="Next"
            variant="secondary"
            disabled={currentPage === 2}
            onPress={() => setCurrentPage(Math.min(2, currentPage + 1))}
          />
        </View>
      </View>
    </ComponentPreview>
  );
}

// Helper components
function CarouselDemo() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={styles.demoContainer}>
      <Carousel page={currentPage} onChangePage={setCurrentPage}>
        <View style={styles.page}>
          <Text variant="Paragraph.default.regular">Page 1</Text>
        </View>
        <View style={styles.page}>
          <Text variant="Paragraph.default.regular">Page 2</Text>
        </View>
        <View style={styles.page}>
          <Text variant="Paragraph.default.regular">Page 3</Text>
        </View>
      </Carousel>
      <Text variant="Paragraph.small.regular">Page {currentPage + 1} of 3</Text>
    </View>
  );
}

function CarouselWithCardsDemo() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={styles.demoContainer}>
      <Carousel page={currentPage} onChangePage={setCurrentPage}>
        <Card variant="medium" style={styles.card}>
          <Text variant="Header.small.bold">Card 1</Text>
          <Text variant="Paragraph.default.regular">First card content</Text>
        </Card>
        <Card variant="medium" style={styles.card}>
          <Text variant="Header.small.bold">Card 2</Text>
          <Text variant="Paragraph.default.regular">Second card content</Text>
        </Card>
        <Card variant="medium" style={styles.card}>
          <Text variant="Header.small.bold">Card 3</Text>
          <Text variant="Paragraph.default.regular">Third card content</Text>
        </Card>
      </Carousel>
      <Text variant="Paragraph.small.regular">Page {currentPage + 1} of 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
    width: '100%',
    alignItems: 'stretch',
  },
  singleContainer: {
    gap: 16,
    width: '100%',
    alignItems: 'stretch',
  },
  section: {
    gap: 12,
    width: '100%',
  },
  demoContainer: {
    gap: 12,
    width: '100%',
  },
  page: {
    width: 300,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
  },
  card: {
    width: 300,
    padding: 16,
    marginHorizontal: 8,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
});


