/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../../components/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const orders = [
  {
    id: '1',
    date: 'Today, Dec 22, 2024',
    imageUrl: require('../../assets/images/blackmen1.jpg'),
    productTitle: 'Urban Blend Long Sleeve...',
    total: '$441.50',
  },
  {
    id: '2',
    date: 'Yesterday, Dec 21, 2024',
    imageUrl: require('../../assets/images/blackwomen2.jpg'),
    productTitle: 'Urban Elegance Business...',
    total: '$184.50',
  },
  {
    id: '3',
    date: 'Dec 20, 2024',
    imageUrl: require('../../assets/images/blackwomen1.jpg'),
    productTitle: 'Classic Casual Jacket...',
    total: '$99.99',
  },
];

const MyOrder = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Access route parameters

  const handleHome = () => {
    navigation.navigate('BottomTabs', {screen: 'Home'});
  };

  const [selected, setSelected] = useState('Active');
  const [dropdownVisible, setDropdownVisible] = useState({}); // State for dropdown visibility per order
  const [modalVisible, setModalVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null); // To track the current order being canceled
  const [successModalVisible, setSuccessModalVisible] = useState(false); // State for success modal
  const [ordersList, setOrdersList] = useState(orders); // Maintain dynamic orders list

  // Read parameters when the screen is loaded
  React.useEffect(() => {
    if (route.params?.tab) {
      setSelected(route.params.tab); // Update the active tab
      if (route.params.cancelledOrder) {
        setOrdersList(prevOrders => [
          ...prevOrders,
          {
            ...route.params.cancelledOrder,
            id: `cancelled-${Date.now()}`,
            status: 'Cancelled',
          },
        ]);
      }
    }
  }, [route.params]);

  const handleSelect = status => {
    setSelected(status);
  };

  const toggleDropdown = orderId => {
    setDropdownVisible(prev => ({
      ...prev,
      [orderId]: !prev[orderId], // Toggle dropdown visibility for specific order
    }));
  };

  const openModal = orderId => {
    setCurrentOrder(orderId); // Track the order to cancel
    setModalVisible(true); // Show modal when "Cancel Order" is clicked
  };

  const closeModal = () => {
    setModalVisible(false); // Close modal
    setCurrentOrder(null); // Reset current order
  };

  const confirmCancelOrder = () => {
    setOrdersList(prevOrders =>
      prevOrders.map(order =>
        order.id === currentOrder ? {...order, status: 'Cancelled'} : order,
      ),
    );
    // Close modals
    setSuccessModalVisible(true);
    setModalVisible(false);

    // Switch to the Cancelled tab
    setSelected('Cancelled');
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
    setCurrentOrder(null); // Reset the current order
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.orderContainer}
      onPress={() => {
        // Calculate total number of active orders
        const activeOrdersCount = ordersList.filter(
          order => order.status !== 'Cancelled',
        ).length;

        // Pass the active orders count to the OrderDetails screen
        navigation.navigate('OrderDetails', {
          order: item,
          activeOrdersCount: activeOrdersCount,
        });
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.orderDate}>{item.date}</Text>
        <TouchableOpacity onPress={() => toggleDropdown(item.id)}>
          <Image
            source={require('../../assets/icons/menu.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {dropdownVisible[item.id] && ( // Show dropdown based on the specific order's visibility
        <View style={styles.dropdown} onStartShouldSetResponder={() => true}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => openModal(item.id)}>
            <Text style={styles.dropdownText}>🚫 Cancel Order</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{height: 0.5, backgroundColor: '#aaa'}} />
      <View style={styles.productContainer}>
        <Image source={item.imageUrl} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.productTitle}</Text>
          <Text style={styles.totalPriceText}>Total Shopping </Text>
          <Text style={styles.totalPrice}>{item.total}</Text>
          <TouchableOpacity style={styles.trackButton} onPress={() => {
            navigation.navigate('OrderDetails',{setselected: 'TrackOrder'});
          }}>
            <Text style={styles.trackButtonText}>Track Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HomeHeader
        onLeftPress={handleHome}
        hideIcons={['notification','scanner']}
        title="My Order"
        rightIcon={require('../../assets/icons/noti.png')}
        leftIcon={require('../../assets/icons/shell.png')}
      />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'Active' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('Active')}>
          <Text
            style={[
              styles.buttonText,
              selected === 'Active' && styles.selectedText,
            ]}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'Completed' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('Completed')}>
          <Text
            style={[
              styles.buttonText,
              selected === 'Completed' && styles.selectedText,
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'Cancelled' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('Cancelled')}>
          <Text
            style={[
              styles.buttonText,
              selected === 'Cancelled' && styles.selectedText,
            ]}>
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ordersList.filter(
          order =>
            selected === 'Cancelled'
              ? order.status === 'Cancelled'
              : selected === 'Active'
              ? order.status !== 'Cancelled'
              : selected === 'Completed'
              ? order.status === 'Completed'
              : false, // Ensure 'Completed' orders are properly filtered
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />

      {/* Modal for Cancel Order */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Cancel Order</Text>
            <View style={styles.divider} />
            <Text style={styles.modalQuestion}>
              Are you sure you want to cancel the order?
            </Text>
            <Text style={styles.modalSubtitle}>
              It's okay to change your mind! Your payment will be safely
              refunded. <Text style={styles.terms}>Terms & Conditions </Text>
              <Text style={styles.modalSubtitle}>apply</Text>
            </Text>
            <View style={styles.divider} />
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>No. Don't Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={confirmCancelOrder}>
                <Text style={styles.cancelButtonText}>Cancel Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={closeSuccessModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Image
                source={require('../../assets/icons/checkmark.png')}
                style={styles.checkmark}
              />
              <Text style={styles.modalQuestion}>
                Order Cancelled Successfully!
              </Text>
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeSuccessModal}>
              <Text style={styles.modalButtonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  selectedButton: {
    backgroundColor: '#528F65',
  },
  buttonText: {
    fontFamily:fonts.light,
    fontSize: 14,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    fontFamily: fonts.light,
  },
  listContent: {
    paddingBottom: 70,
  },
  orderContainer: {
    marginBottom: 20,
    padding: 15,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    bottom: 4,
    right: 12,
  },
  orderDate: {
    fontSize: 14,
    color: '#aaa',
    bottom: 2,
  },
  productContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  productImage: {
    width: 80,
    height: 130,
    borderRadius: 8,
  },
  productDetails: {
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: '#333',
    marginBottom: 15,
  },
  totalPriceText: {
    fontSize: 14,
    fontFamily:fonts.regular,
    color: '#aaa',
    marginVertical: 2,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: '#528F65',
    marginVertical: 2,
  },
  trackButton: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderColor: '#528F65',
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  trackButtonText: {
    color: '#528F65',
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  dropdown: {
    position: 'absolute',
    top: 30,
    right: 12,
    elevation: 2,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 5,
    width: 150,
    padding: 5,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    maxHeight: '40%',
  },
  modalHeading: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#aaa',
    marginVertical: 10,
  },
  modalQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },
  terms: {
    color: 'green',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  modalButton: {
    padding: 18,
    paddingHorizontal: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:'flex-end',
    backgroundColor: '#f9f9f9',
  },
  modalButtonText: {
    color: '#528F65',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#528F65',
  },
  cancelButtonText: {
    color: '#fff',
  },
  checkmark: {
    height: 60,
    width: 60,
    bottom: 10,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyOrder;
