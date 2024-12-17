import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CategoryHeader from '../../components/CategoryHeader';
import { useNavigation } from '@react-navigation/native';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('general');

  const handleBackPress = () => {
    // console.log('Back pressed');
    navigation.goBack();
  };

  const handleSearchPress = () => {
    // console.log('Search pressed');
  };

  const handleMenuPress = () => {
    // console.log('Menu pressed');
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    // console.log(`${tab} tab pressed`);
  };

  return (
    <View style={styles.container}>
      <CategoryHeader
        title={'Notifications'}
        onBackPress={handleBackPress}
        onSearchPress={handleSearchPress}
        onMenuPress={handleMenuPress}
        hideIcons={['search', 'menu', 'share']}
      />

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'general' && styles.selectedTabButton,
          ]}
          onPress={() => handleTabPress('general')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'general' && styles.selectedTabText,
            ]}
          >
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'promotions' && styles.selectedTabButton,
          ]}
          onPress={() => handleTabPress('promotions')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'promotions' && styles.selectedTabText,
            ]}
          >
            Promotions
          </Text>
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <ScrollView style={styles.notificationsContainer}>
        {/* Today Label and Divider */}
        <View style={styles.labelWithDivider}>
          <Text style={styles.label}>Today</Text>
          <View style={styles.divider} />
        </View>

        {/* Notification Item */}
        <View style={styles.notificationItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🔐</Text> {/* Icon for security alert */}
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Account Security Alert</Text>
            <Text style={styles.notificationDesc}>
              We’ve noticed some unusual activity on your account. Please review
              your recent logins and update your password if necessary.
            </Text>
            <Text style={styles.time}>09:41 AM</Text>
          </View>
        </View>

        {/* Another Notification */}
        <View style={styles.notificationItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>⚙️</Text> {/* Icon for system update */}
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>
              System Update Available
            </Text>
            <Text style={styles.notificationDesc}>
              A new system update is ready for installation. It includes
              performance improvements and bug fixes.
            </Text>
            <Text style={styles.time}>08:46 AM</Text>
          </View>
        </View>

        {/* Yesterday Label and Divider */}
        <View style={styles.labelWithDivider}>
          <Text style={styles.label}>Yesterday</Text>
          <View style={styles.divider} />
        </View>

        {/* More Notifications */}
        <View style={styles.notificationItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>✅</Text> {/* Icon for success */}
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>
              Password Reset Successful
            </Text>
            <Text style={styles.notificationDesc}>
              Your password has been successfully reset. If you didn’t request
              this change, please contact support immediately.
            </Text>
            <Text style={styles.time}>20:30 PM</Text>
          </View>
        </View>

        {/* More notifications here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    // paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    // paddingBottom: 10,
    marginHorizontal: 50,
    marginTop: 10,
    borderRadius: 50,
  },
  tabButton: {
    padding: 18,
    backgroundColor: '#f0f0f0', // Light grey background for unselected tabs
  },
  selectedTabButton: {
    backgroundColor: '#528F65', // Selected tab background color
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  selectedTabText: {
    color: '#fff', // White text color for selected tab
  },
  labelWithDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  divider: {
    height: 1,
    elevation: 1,
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 6, // Adjusted padding for smaller icons
    paddingTop:6,
    // marginTop: 5, // Move icons up
  },
  icon: {
    fontSize: 14, // Smaller icon size
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDesc: {
    fontSize: 14,
    color: '#777',
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default NotificationScreen;
