import React, { useState } from 'react';
import { ScrollView, FlatList, StyleSheet, View, Text } from 'react-native';
import { Header, SearchBar, CategoryCard, StoreCard, ProductCard, SectionHeader } from '../components';
import { categories, stores, featuredProducts, popularProducts } from '../data/mockData';
import type { Category, Store, Product } from '../types';

export function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryPress = (category: Category) => {
    console.log('Category pressed:', category.name);
  };

  const handleStorePress = (store: Store) => {
    console.log('Store pressed:', store.name);
  };

  const handleProductPress = (product: Product) => {
    console.log('Product pressed:', product.name);
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoEmoji}>🎉</Text>
          <View style={styles.promoText}>
            <Text style={styles.promoTitle}>Free delivery on your first order!</Text>
            <Text style={styles.promoSubtitle}>Use code: WELCOME at checkout</Text>
          </View>
        </View>

        {/* Categories */}
        <SectionHeader title="Shop by Category" onSeeAllPress={() => {}} />
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard category={item} onPress={handleCategoryPress} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* Stores */}
        <SectionHeader title="Popular Stores" onSeeAllPress={() => {}} />
        <FlatList
          horizontal
          data={stores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StoreCard store={item} onPress={handleStorePress} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* Deals */}
        <SectionHeader title="🔥 Today's Deals" onSeeAllPress={() => {}} />
        <FlatList
          horizontal
          data={featuredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={handleProductPress} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* Popular Items */}
        <SectionHeader title="Popular Near You" onSeeAllPress={() => {}} />
        <FlatList
          horizontal
          data={popularProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={handleProductPress} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  horizontalList: {
    paddingHorizontal: 16,
  },
  promoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#43A047',
  },
  promoEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  promoText: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 4,
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#43A047',
  },
  bottomSpacing: {
    height: 20,
  },
});
