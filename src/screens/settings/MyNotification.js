import {StyleSheet, Switch, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../../components/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const MyNotification = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('BottomTabs', {screen: 'Account'});
  };

  // State for toggles (each state corresponds to a specific notification)
  const [newArrivalNotifications, setNewArrivalNotifications] = useState(false);
  const [saleAlerts, setSaleAlerts] = useState(false);
  const [wishlistUpdates, setWishlistUpdates] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(false);
  const [orderStatusUpdates, setOrderStatusUpdates] = useState(false);
  const [exclusiveOffers, setExclusiveOffers] = useState(false);
  const [styleRecommendations, setStyleRecommendations] = useState(false);
  const [flashSalesNotifications, setFlashSalesNotifications] = useState(false);
  const [reviewReminders, setReviewReminders] = useState(false);
  const [appUpdatesAndNews, setAppUpdatesAndNews] = useState(false);
  const [eventInvitations, setEventInvitations] = useState(false);
  const [rewardProgramUpdates, setRewardProgramUpdates] = useState(false);
  const [importantAnnouncements, setImportantAnnouncements] = useState(false);
  const [appTipsAndTutorials, setAppTipsAndTutorials] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <HomeHeader
        onLeftPress={handleHome}
        hideIcons={['notification', 'menu', 'search', 'scanner']}
        title="Account & Security"
        leftIcon={require('../../assets/icons/back.png')}
      />
      <View style={styles.otherSection}>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>New Arrival Notifications</Text>
          <Switch
            value={newArrivalNotifications}
            onValueChange={() =>
              setNewArrivalNotifications(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Sale Alerts</Text>
          <Switch
            value={saleAlerts}
            onValueChange={() => setSaleAlerts(previousState => !previousState)}
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Wishlist Updates</Text>
          <Switch
            value={wishlistUpdates}
            onValueChange={() =>
              setWishlistUpdates(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Security Alerts</Text>
          <Switch
            value={securityAlerts}
            onValueChange={() =>
              setSecurityAlerts(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Order Status Updates</Text>
          <Switch
            value={orderStatusUpdates}
            onValueChange={() =>
              setOrderStatusUpdates(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Exclusive Offers</Text>
          <Switch
            value={exclusiveOffers}
            onValueChange={() =>
              setExclusiveOffers(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Style Recommendations</Text>
          <Switch
            value={styleRecommendations}
            onValueChange={() =>
              setStyleRecommendations(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Flash Sales Notifications</Text>
          <Switch
            value={flashSalesNotifications}
            onValueChange={() =>
              setFlashSalesNotifications(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Review Reminders</Text>
          <Switch
            value={reviewReminders}
            onValueChange={() =>
              setReviewReminders(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>App Updates and News</Text>
          <Switch
            value={appUpdatesAndNews}
            onValueChange={() =>
              setAppUpdatesAndNews(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Event Invitations</Text>
          <Switch
            value={eventInvitations}
            onValueChange={() =>
              setEventInvitations(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Reward Program Updates</Text>
          <Switch
            value={rewardProgramUpdates}
            onValueChange={() =>
              setRewardProgramUpdates(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Important Announcements</Text>
          <Switch
            value={importantAnnouncements}
            onValueChange={() =>
              setImportantAnnouncements(previousState => !previousState)
            }
          />
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>App Tips and Tutorials</Text>
          <Switch
            value={appTipsAndTutorials}
            onValueChange={() =>
              setAppTipsAndTutorials(previousState => !previousState)
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  otherSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 4,
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: '#333',
  },
});
