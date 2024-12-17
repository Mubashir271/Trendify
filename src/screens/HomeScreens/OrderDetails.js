import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CategoryHeader from '../../components/CategoryHeader';

const OrderDetails = ({route}) => {
  const {order, activeOrdersCount} = route.params; // Access the order and count
  const [selected, setSelected] = useState('OrderDetails');
  const navigation = useNavigation();

  // Mock Data for Delivery Status
  const deliveryStatus = [
    {
      id: '1',
      status: 'Order is being Delivered',
      date: 'Dec 23',
      time: '08:40 AM',
      address: '4 Evergreen Street Lake Zurich, IL 60047',
    },
    {
      id: '2',
      status: 'Order is being Delivered',
      date: 'Dec 22',
      time: '20:08 PM',
      address: '9177 Hillcrest Street Wheeling, WV 26003',
    },
    {
      id: '3',
      status: 'Orders are in Transit',
      date: 'Dec 22',
      time: '17:56 PM',
      address: '891 Glen Ridge St. Gainesville, VA 20155',
    },
    {
      id: '4',
      status: 'Order is being Delivered',
      date: 'Dec 22',
      time: '13:27 PM',
      address: '55 Summerhouse Dr. Apopka, FL 32703',
    },
    {
      id: '5',
      status: 'Store Processing Orders',
      date: 'Dec 22',
      time: '10:20 AM',
      address: 'Orders are being processed by the Store',
    },
    {
      id: '6',
      status: 'Payments Verified',
      date: 'Dec 22',
      time: '09:41 AM',
      address: 'Your payment has been confirmed',
    },
  ];

  // Function to render delivery status items
  const renderStatusItem = ({item, index}) => {
    return (
      <View style={styles.statusItem}>
        {/* Timeline Circle */}
        <View style={styles.timeline}>
          <View style={[styles.circle, index === 0 && styles.activeCircle]} />
          {index < deliveryStatus.length - 1 && (
            <View style={styles.dashedLine} />
          )}
        </View>
        {/* Status Details */}
        <View style={styles.statusDetails}>
          <Text style={[styles.statusText, index === 0 && styles.activeText]}>
            {item.status} - {item.date}
          </Text>
          <Text style={styles.addressText}>{item.address}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    );
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('BottomTabs', {screen: 'Home'});
  };

  const handleSelect = status => {
    setSelected(status);
    // if (status === 'TrackOrder') {
    //   // Navigate to the TrackOrder section of this screen
    //   navigation.navigate('OrderDetails', {order, activeOrdersCount});
    // }
  };

  // Render individual order item
  const renderOrderItem = ({item}) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderItemText}>Order ID: {item.id}</Text>
      <Text style={styles.orderItemText}>Status: {item.status}</Text>
      <Text style={styles.orderItemText}>Total: ${item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <CategoryHeader
        onLeftPress={handleHome}
        hideIcons={['notification', 'search', 'share', 'settings']}
        title="Order Details"
        onBackPress={handleBackPress}
      />

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'OrderDetails' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('OrderDetails')}>
          <Text
            style={[
              styles.buttonText,
              selected === 'OrderDetails' && styles.selectedText,
            ]}>
            Order Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'TrackOrder' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('TrackOrder')}>
          <Text
            style={[
              styles.buttonText,
              selected === 'TrackOrder' && styles.selectedText,
            ]}>
            Track Order
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Conditional Rendering for Selected Tab */}

        {selected === 'OrderDetails' && (
          <View>
            {/* Order Details Content */}
            <View style={styles.address}>
              <View style={styles.sectionHeader}>
                <Image
                  source={require('../../assets/icons/location.png')}
                  style={styles.icon}
                />
                <Text style={styles.sectionTitle}>Delivery Address</Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.addressText}>Home (Andrew Ansley)</Text>
              <Text style={styles.addressdText}>
                1234 Elm St, New York, NY 10001, USA
              </Text>
            </View>

            {/* Active Orders Section */}
            <View style={styles.address}>
              <View style={styles.sectionHeader}>
                <Image
                  source={require('../../assets/icons/cart.png')}
                  style={styles.icon}
                />
                <Text style={styles.sectionTitle}>
                  Your Orders ({activeOrdersCount})
                </Text>
              </View>
              <View style={styles.divider} />
              {/* Display active orders */}
              {/* <FlatList
            data={order} // Assuming 'order' contains the list of active orders
            renderItem={renderOrderItem}
            keyExtractor={item => item.id.toString()}
          /> */}
            </View>

            {/* Delivery Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image
                  source={require('../../assets/icons/truck.png')}
                  style={styles.icon}
                />
                <Text style={styles.sectionTitle}>Delivery</Text>
                <Image
                  source={require('../../assets/icons/fedex.png')}
                  style={styles.icon}
                />
              </View>
              <View style={styles.divider} />
              <Text style={styles.deliveryText}>
                FedEx Express (Estimated delivery: Dec 23, 2024)
              </Text>
            </View>

            {/* Payment Methods Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image
                  source={require('../../assets/icons/card.png')}
                  style={styles.icon}
                />
                <Text style={styles.sectionTitle}>Payment Methods</Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.paymentText}>Mastercard **** 1234</Text>
            </View>

            {/* Promos & Vouchers Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image
                  source={require('../../assets/icons/promos.png')}
                  style={styles.icon}
                />
                <Text style={styles.sectionTitle}>Promos & Vouchers</Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.promoText}>Deal Deal: 20% OFF</Text>
            </View>

            {/* Review Summary Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image
                  source={require('../../assets/icons/notes.png')}
                  style={styles.icon}
                />
                <Text style={styles.sectionTitle}>Review Summary</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summary}>
                <Text style={styles.summaryText}>
                  Subtotal (3 items): $155.00
                </Text>
                <Text style={styles.summaryText}>Service Fee: $5.00</Text>
                <Text style={styles.summaryText}>Delivery Fee: $15.00</Text>
                <Text style={styles.summaryText}>Tax: $5.00</Text>
                <Text style={styles.summaryText}>Promo: -$20.00</Text>
                <View style={styles.divider} />
                <Text style={styles.totalText}>Total Payment: $160.00</Text>
              </View>
            </View>

            {/* Information Details Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Image
                  source={require('../../assets/icons/information.png')}
                  style={styles.icon}
                />
                <Text style={styles.sectionTitle}>Information Details</Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.infoText}>Purchase Date: Dec 22, 2024</Text>
              <Text style={styles.infoText}>Purchase Hours: 09:48 AM</Text>
              <Text style={styles.infoText}>Invoice Number: INV2224788</Text>
              <Text style={styles.infoText}>Receipt Number: RCP0846X4N</Text>
            </View>

            {/* Generate Invoice Button */}
            <TouchableOpacity style={styles.invoiceButton}>
              <Text style={styles.invoiceButtonText}>Generate Invoice</Text>
            </TouchableOpacity>
          </View>
        )}
        {selected === 'TrackOrder' && (
    <View>
      {/* Order Progress */}
      <View style={styles.progressSection}>
        <Image
          source={require('../../assets/icons/camera.png')}
          style={styles.progressImage}
        />
        <Text style={styles.progressText}>Orders in Delivery</Text>
      </View>

      {/* Delivery Status */}
      <View style={styles.deliverySection}>
        <Text style={styles.deliveryTitle}>Delivery Status</Text>
        <FlatList
          data={deliveryStatus}
          renderItem={renderStatusItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  progressSection: {alignItems: 'center', marginVertical: 16},
  progressImage: {width: '90%', height: 60, resizeMode: 'contain'},
  progressText: {fontSize: 14, color: '#888', marginTop: 8},

  deliverySection: {backgroundColor: '#fff', borderRadius: 8},
  deliveryTitle: {fontSize: 16, fontWeight: 'bold', marginBottom: 12},
  statusItem: {flexDirection: 'row', marginBottom: 16},
  timeline: {alignItems: 'center', marginRight: 12},
  circle: {width: 12, height: 12, borderRadius: 6, backgroundColor: '#ddd'},
  activeCircle: {backgroundColor: '#4CAF50'},
  dashedLine: {width: 2, flex: 1, backgroundColor: '#ddd'},
  statusDetails: {flex: 1},
  statusText: {fontSize: 14, color: '#444'},
  activeText: {color: '#4CAF50', fontWeight: 'bold'},
  timeText: {fontSize: 12, color: '#888', marginTop: 2},

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  selectedButton: {
    backgroundColor: '#528F65',
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  addressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  addressdText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    // paddingTop:8
  },
  deliveryText: {
    fontSize: 14,
    color: '#333',
  },
  paymentText: {
    fontSize: 14,
    color: '#333',
  },
  promoText: {
    fontSize: 14,
    color: '#333',
  },
  summary: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  summaryText: {
    fontSize: 14,
    marginBottom: 5,
  },
  totalText: {
    fontSize: 16,
    // fontWeight: 'bold',
    // color: '#007aff',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  invoiceButton: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderColor: '#528F65',
    borderWidth: 1,
    justifyContent: 'center',
  },
  invoiceButtonText: {
    color: '#528F65',
    fontSize: 14,
  },
  divider: {
    height: 0.5,
    backgroundColor: '#aaa',
    marginVertical: 8,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 4,
    resizeMode: 'contain',
  },
});

export default OrderDetails;
