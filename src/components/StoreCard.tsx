import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import type { Store } from '../types';

interface StoreCardProps {
  store: Store;
  onPress: (store: Store) => void;
}

export function StoreCard({ store, onPress }: StoreCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress(store)}
      activeOpacity={0.7}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{store.logo}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{store.name}</Text>
        <View style={styles.details}>
          <Text style={styles.rating}>⭐ {store.rating}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.deliveryTime}>{store.deliveryTime}</Text>
        </View>
        <Text style={styles.deliveryFee}>
          {store.deliveryFee === 'Free' ? '🎉 Free delivery' : `Delivery ${store.deliveryFee}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: 260,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logo: {
    fontSize: 32,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 13,
    color: '#424242',
  },
  dot: {
    fontSize: 13,
    color: '#9E9E9E',
    marginHorizontal: 6,
  },
  deliveryTime: {
    fontSize: 13,
    color: '#424242',
  },
  deliveryFee: {
    fontSize: 12,
    color: '#43A047',
    fontWeight: '500',
  },
});
