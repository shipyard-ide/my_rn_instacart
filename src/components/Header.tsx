import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  address?: string;
}

export function Header({ address = '123 Main Street' }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <Text style={styles.logo}>🛒 Instacart</Text>
        </View>
        <TouchableOpacity style={styles.addressContainer}>
          <Text style={styles.deliverTo}>Deliver to</Text>
          <View style={styles.addressRow}>
            <Text style={styles.address} numberOfLines={1}>{address}</Text>
            <Text style={styles.chevron}>▼</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#43A047',
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  addressContainer: {
    flex: 2,
    alignItems: 'center',
  },
  deliverTo: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    maxWidth: 150,
  },
  chevron: {
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  profileButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profileIcon: {
    fontSize: 24,
  },
});
