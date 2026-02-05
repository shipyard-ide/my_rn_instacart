import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MenuItemProps {
  emoji: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

function MenuItem({ emoji, title, subtitle, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.menuEmoji}>{emoji}</Text>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );
}

export function AccountScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <Text style={styles.title}>Account</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@email.com</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Membership Banner */}
        <View style={styles.membershipBanner}>
          <Text style={styles.membershipEmoji}>⭐</Text>
          <View style={styles.membershipInfo}>
            <Text style={styles.membershipTitle}>Instacart+</Text>
            <Text style={styles.membershipSubtitle}>Free delivery on orders over $35</Text>
          </View>
          <TouchableOpacity style={styles.tryButton}>
            <Text style={styles.tryButtonText}>Try Free</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Sections */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Orders</Text>
          <MenuItem emoji="📦" title="Your Orders" subtitle="View order history" />
          <MenuItem emoji="🔄" title="Buy It Again" subtitle="Quickly reorder favorites" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Savings</Text>
          <MenuItem emoji="🎟️" title="Promotions" subtitle="Available deals & coupons" />
          <MenuItem emoji="💳" title="Credits" subtitle="$0.00 balance" />
          <MenuItem emoji="🎁" title="Gift Cards" subtitle="Send or redeem" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <MenuItem emoji="📍" title="Addresses" subtitle="Manage delivery addresses" />
          <MenuItem emoji="💵" title="Payment Methods" subtitle="Cards & accounts" />
          <MenuItem emoji="🔔" title="Notifications" subtitle="Manage preferences" />
          <MenuItem emoji="🔒" title="Privacy" subtitle="Data & permissions" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Support</Text>
          <MenuItem emoji="❓" title="Help Center" />
          <MenuItem emoji="💬" title="Contact Support" />
          <MenuItem emoji="📝" title="Give Feedback" />
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version 1.0.0</Text>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#43A047',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#43A047',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
  },
  profileEmail: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
  editButton: {
    fontSize: 14,
    color: '#43A047',
    fontWeight: '600',
  },
  membershipBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#43A047',
  },
  membershipEmoji: {
    fontSize: 28,
  },
  membershipInfo: {
    flex: 1,
    marginLeft: 12,
  },
  membershipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212121',
  },
  membershipSubtitle: {
    fontSize: 13,
    color: '#757575',
    marginTop: 2,
  },
  tryButton: {
    backgroundColor: '#43A047',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9E9E9E',
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuEmoji: {
    fontSize: 22,
    width: 32,
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  menuTitle: {
    fontSize: 16,
    color: '#212121',
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#9E9E9E',
    marginTop: 2,
  },
  menuArrow: {
    fontSize: 24,
    color: '#BDBDBD',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  logoutText: {
    fontSize: 16,
    color: '#F44336',
    fontWeight: '600',
  },
  version: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 16,
  },
});
