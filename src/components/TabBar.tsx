import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCart } from '../context/CartContext';

export type TabName = 'home' | 'browse' | 'cart' | 'account';

interface TabBarProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
}

interface TabItemProps {
  name: TabName;
  label: string;
  emoji: string;
  isActive: boolean;
  badge?: number;
  onPress: () => void;
}

function TabItem({ label, emoji, isActive, badge, onPress }: TabItemProps) {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.tabIconContainer}>
        <Text style={[styles.tabEmoji, isActive && styles.tabEmojiActive]}>{emoji}</Text>
        {badge !== undefined && badge > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge > 99 ? '99+' : badge}</Text>
          </View>
        )}
      </View>
      <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

export function TabBar({ activeTab, onTabPress }: TabBarProps) {
  const insets = useSafeAreaInsets();
  const { totalItems } = useCart();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.tabsContainer}>
        <TabItem
          name="home"
          label="Home"
          emoji="🏠"
          isActive={activeTab === 'home'}
          onPress={() => onTabPress('home')}
        />
        <TabItem
          name="browse"
          label="Browse"
          emoji="🔍"
          isActive={activeTab === 'browse'}
          onPress={() => onTabPress('browse')}
        />
        <TabItem
          name="cart"
          label="Cart"
          emoji="🛒"
          isActive={activeTab === 'cart'}
          badge={totalItems}
          onPress={() => onTabPress('cart')}
        />
        <TabItem
          name="account"
          label="Account"
          emoji="👤"
          isActive={activeTab === 'account'}
          onPress={() => onTabPress('account')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  tabsContainer: {
    flexDirection: 'row',
    height: 60,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  tabIconContainer: {
    position: 'relative',
  },
  tabEmoji: {
    fontSize: 24,
    opacity: 0.6,
  },
  tabEmojiActive: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 11,
    color: '#9E9E9E',
    marginTop: 2,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#43A047',
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: '#F44336',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
});
