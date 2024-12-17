import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import { fonts } from '../../assets/constants';


const Cart = () => {
  // const [likedProducts, setLikedProducts] = useState([]);
  // const [likedNewArrivals, setLikedNewArrivals] = useState([]);
  // const [likedHotDeals, setLikedHotDeals] = useState([]);
  const navigation = useNavigation();
  const [ButtonmodalVisible, setButtonModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // Single size
  const [activeButton, setActiveButton] = useState(); // Default selected button
  const [isLoading, setIsLoading] = useState(null); // Track loading for each button
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);




  const handleCheckout = () => {
    // Show the processing modal
    setLoading(true);

    // Simulate an API call or processing time
    setTimeout(() => {
      setLoading(false);
      setOrderConfirmed(true); // Trigger order confirmation modal after processing
    }, 2000); // Adjust timeout duration as needed
  };

  const toggleButtonModal = () => {
    setButtonModalVisible(prevState => !prevState);
  };

  const adjustQuantity = (action) => {
    if (action === 'increase') {
      setQuantity(prevQuantity => prevQuantity + 1); // Increase quantity
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); // Decrease quantity (prevent going below 1)
    }
  };

  const toggleFilter = (type, value) => {
    if (type === 'size') {
      setSelectedSize(prev => (prev === value ? null : value));
    } else if (type === 'color') {
      setSelectedColor(prev => (prev === value ? null : value));
    }
  };

  const handleButtonPress = button => {
    setActiveButton(button); // Update active button state
    setIsLoading(button); // Set specific button loading state
    // Simulate a network request or processing action
    setTimeout(() => {
      setIsLoading(null); // Reset loading state after the action is complete
      toggleButtonModal(); // Show modal after action is complete
    }, 2000); // Simulate a 2-second delay
  };

  const handleHome = () => {
    navigation.navigate('BottomTabs', {screen: 'Home'}); // Pass products to SearchResult
  };


  const products = {
    men: [
      {
        id: '1',
        name: 'Black Men Jacket',
        category: 'men',
        price: 120.99,
        image: require('../../assets/images/blackmen.jpg'),
        rating: 4.5,
        ratingCount: 120, // New field
        description: 'A stylish black jacket for men, perfect for winter.',
        material: 'Cotton and Polyester',
        careLabel: 'Machine wash cold, tumble dry low.',
        sku: 'BMJ-001',
        color: 'Black',
        pattern: 'Solid',
      },
      {
        id: '3',
        name: 'Black Men Shirt',
        category: 'men',
        price: 90.99,
        image: require('../../assets/images/blackmen1.jpg'),
        rating: 4.8,
        ratingCount: 90, // New field
        description: 'A comfortable black shirt for casual or formal wear.',
        material: '100% Cotton',
        careLabel: 'Hand wash recommended.',
        sku: 'BMS-003',
        color: 'Black',
        pattern: 'Solid',
      },
      {
        id: '7',
        name: 'Urban Elegance Business',
        category: 'men',
        price: 150.16,
        image: require('../../assets/images/blackmen2.jpg'),
        rating: 5.0,
        ratingCount: 150, // New field
        description: 'Perfect business attire for a sharp, urban look.',
        material: 'Wool Blend',
        careLabel: 'Dry clean only.',
        sku: 'UEB-007',
        color: 'Charcoal Grey',
        pattern: 'Solid',
      },
      {
        id: '8',
        name: 'Street Style Comfort',
        category: 'men',
        price: 150.16,
        image: require('../../assets/images/blackmen3.jpg'),
        rating: 5.0,
        ratingCount: 200, // New field
        description: 'Casual and comfortable, perfect for everyday wear.',
        material: 'Denim and Spandex',
        careLabel: 'Machine wash cold.',
        sku: 'SSC-008',
        color: 'Blue',
        pattern: 'Distressed',
      },
    ],
    women: [
      {
        id: '2',
        name: 'Black Women Jacket',
        category: 'women',
        price: 130.0,
        image: require('../../assets/images/blackwomen.jpg'),
        rating: 4.0,
        ratingCount: 80, // New field
        description: 'A sleek black jacket for women, perfect for colder weather.',
        material: 'Polyester and Wool',
        careLabel: 'Dry clean only.',
        sku: 'BWJ-002',
        color: 'Black',
        pattern: 'Solid',
      },
      {
        id: '4',
        name: 'Elite Style Modern',
        category: 'women',
        price: 150.16,
        image: require('../../assets/images/blackwomen1.jpg'),
        rating: 5.0,
        ratingCount: 200, // New field
        description: 'A modern, elite style dress for a chic look.',
        material: 'Silk',
        careLabel: 'Hand wash in cold water.',
        sku: 'ESM-004',
        color: 'Red',
        pattern: 'Solid',
      },
      {
        id: '5',
        name: 'Urban Flex Dress',
        category: 'women',
        price: 150.16,
        image: require('../../assets/images/blackwomen2.jpg'),
        rating: 5.0,
        ratingCount: 250, // New field
        description: 'A flexible and stylish urban dress.',
        material: 'Linen and Cotton',
        careLabel: 'Machine wash cold.',
        sku: 'UFD-005',
        color: 'Grey',
        pattern: 'Solid',
      },
      {
        id: '6',
        name: 'Svelte Style Premium',
        category: 'women',
        price: 150.16,
        image: require('../../assets/images/blackwomen3.jpg'),
        rating: 4.9,
        ratingCount: 180, // New field
        description: 'A premium style dress for a sleek, svelte look.',
        material: 'Satin',
        careLabel: 'Dry clean only.',
        sku: 'SSP-006',
        color: 'Black',
        pattern: 'Solid',
      },
      {
        id: '15',
        name: 'Formal Style Premium',
        category: 'women',
        price: 150.16,
        image: require('../../assets/images/blackwomen4.jpg'),
        rating: 5.0,
        ratingCount: 300, // New field
        description: 'A formal premium style dress perfect for events.',
        material: 'Silk and Velvet',
        careLabel: 'Dry clean only.',
        sku: 'FSP-015',
        color: 'Navy Blue',
        pattern: 'Solid',
      },
      {
        id: '16',
        name: 'Black Pakistani Shalwar Kameez',
        category: 'women',
        price: 150.16,
        image: require('../../assets/images/blackwomen5.jpg'),
        rating: 5.0,
        ratingCount: 150, // New field
        description: 'Traditional black Shalwar Kameez for a cultural touch.',
        material: 'Cotton and Silk',
        careLabel: 'Hand wash recommended.',
        sku: 'BPSK-016',
        color: 'Black',
        pattern: 'Solid',
      },
    ],
  };

  const allProducts = [
    ...products.women,
    ...products.men,
  ];

  return (
    <View style={styles.container}>
      <HomeHeader
        onLeftPress={handleHome}
        hideIcons={['notification', 'menu','scanner']}
        title="Cart"
        rightIcon={require('../../assets/icons/noti.png')}
        leftIcon={require('../../assets/icons/shell.png')}
      />

      {/* Product List */}
      <FlatList
        data={allProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productSize}>Size: L</Text>
              <Text style={styles.productColor}>Color: Black</Text>
              <Text style={styles.productQuantity}>Qty: 2</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity
              onPress={handleButtonPress}
                style={styles.editIconContainer}
              >
                <Image
                  source={require('../../assets/icons/edit.png')                 }
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.trashIconContainer}
              >
                <Image
                  source={require('../../assets/icons/trash.png')                 }
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Floating Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.totalPrice}>Checkout - ${
          allProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2)
        }</Text>
        </TouchableOpacity>


              {/* First Modal: Processing Payments */}
      <Modal
        visible={loading}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setLoading(false)}
      >
        <View style={styles.firstmodalContainer}>
          <View style={styles.firstmodalContent}>
            <ActivityIndicator size="large" color="#528F65" />
            <Text style={styles.firstmodalText}>Processing Payments</Text>
          </View>
        </View>
      </Modal>

      {/* Second Modal: Order Confirmed */}
      <Modal
        visible={orderConfirmed}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setOrderConfirmed(false)}
      >
        <View style={styles.firstmodalContainer}>
          <View style={styles.firstmodalContent}>
          <View>
          <Image source={require('../../assets/images/checkout.png')} style={styles.modalimage}/>
          </View>
            <Text style={styles.modalheading}>Order Confirmed!</Text>
            <Text style={styles.modalsubHeading}>
              Peep your order details in 'My Order' and start planning outfits.
            </Text>
            <TouchableOpacity
              style={styles.modalbutton}
              onPress={() => {navigation.navigate('BottomTabs', {screen: 'MyOrder'});}}
            >
              <Text style={styles.modalbuttonText}>View my Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalbutton}
              onPress={() => {navigation.navigate('BottomTabs', {screen: 'Home'});}}
            >
              <Text style={styles.modalbuttonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



              {/* Buttons Modal */}
      <Modal
      visible={ButtonmodalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={toggleButtonModal}>
      <View style={styles.modalBackground}>
        <View style={styles.modalButtonContainer}>
          <Text style={styles.modalButtonTitle}>Choose Product Variant</Text>

          <View style={styles.productDetailsContainer}>
            {/* Product Image */}
            <Image
              source={products.image} // Add your image URL here
              style={styles.modalImage}
            />

            {/* Product Name, Stock, and Price on the right */}
            <View style={styles.productInfoContainer}>
              <Text style={styles.modalName}>{products.name}</Text>
              <Text style={styles.stockCount}>Stock: {256}</Text>
              <Text style={styles.modalPrice}>${products.price}</Text>

              {/* Quantity Adjuster (Horizontal layout) */}
              <View style={styles.quantityAdjuster}>
                <TouchableOpacity onPress={() => adjustQuantity('decrease')}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={() => adjustQuantity('increase')}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Size Selector */}
      {/* Size Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionButtonTitle}>Size</Text>
      </View>
      <View style={styles.optionsButtonRow}>
        {['XS', 'S', 'M', 'L', 'XL'].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.modalOptionButton,
              selectedSize === item && styles.modalSelectedOptionButton,
            ]}
            onPress={() => toggleFilter('size', item)}>
            <Text
              style={[
                styles.modalOptionText,
                selectedSize === item && styles.modalSelectedOptionText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Color Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionButtonTitle}>Color</Text>
      </View>
      <View style={styles.colorButtonRow}>
        {[
          {name: 'Black', color: '#000'},
          {name: 'White', color: '#fff'},
          {name: 'Red', color: '#ff0000'},
          {name: 'Pink', color: '#ff69b4'},
          {name: 'Purple', color: '#800080'},
          {name: 'Deep Purple', color: '#673ab7'},
        ].map((item, index) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.colorButton,
              selectedColor === item.name && styles.selectedColorButton,
            ]}
            onPress={() => toggleFilter('color', item.name)}>
            <View style={[styles.colorCircle, {backgroundColor: item.color}]}>
              {selectedColor === item.name && (
                <Image
                  source={require('../../assets/icons/checkmark.png')} // Update path accordingly
                  style={styles.checkmarkIcon}
                />
              )}
            </View>
            <Text style={styles.colorName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonModalRow}>
        {/* General Button */}
        <TouchableOpacity
          style={[
            styles.tabModalButton,
            activeButton === 'General' && styles.selectedTabModalButton,
          ]}
          onPress={() => handleButtonPress('General')}>
          {isLoading === 'General' ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={[
                styles.tabButtonText,
                activeButton === 'General' && styles.selectedTabButtonText,
              ]}>
              Buy Now
            </Text>
          )}
        </TouchableOpacity>

        {/* Promotion Button */}
        <TouchableOpacity
          style={[
            styles.tabModalButton,
            activeButton === 'Promotion' && styles.selectedTabModalButton,
          ]}
          onPress={() => handleButtonPress('Promotion')}>
          {isLoading === 'Promotion' ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={[
                styles.tabButtonText,
                activeButton === 'Promotion' && styles.selectedTabButtonText,
              ]}>
              Add to Cart
            </Text>
          )}
        </TouchableOpacity>
      </View>

        </View>
      </View>
    </Modal>
      </View>
    // </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  modalimage: {
    height: 80,
    width: 80,
    resizeMode:'stretch',
  },
  firstmodalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  firstmodalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  firstmodalText: {
    marginTop: 10,
    fontSize: 16,
    color: '#528F65',
  },
  modalheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#528F65',
  },
  modalsubHeading: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  modalbutton: {
    backgroundColor: '#528F65',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalbuttonText: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalImage:{
    width: '50%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginVertical: 20,
  },
  productList: {
    paddingBottom: 80,
  },
  productContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    height: 180,
  },
  productImage: {
    width: 90,
    height: 160,
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: '#000',
  },
  productSize: {
    color: 'grey',
  marginVertical: 8,
  },
  productColor: {
    color: 'grey',
    marginBottom: 8,
  },
  productQuantity: {
    color: 'grey',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#528F65',
  },
  editIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  trashIconContainer : {
    position: 'absolute',
    top: 50,
    right: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontFamily:fonts.regular,
    color: '#fff',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#528F65',
    padding: 16,
    borderRadius: 40,
    elevation: 5,
    marginHorizontal: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalButtonContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  tabButton: {
    padding: 18,
    borderRadius: 30,
    backgroundColor: '#D9E8D5', // Light grey background for unselected tabs
  },
  selectedTabButton: {
    backgroundColor: '#528F65', // Selected tab background color
    borderRadius: 30,
  },
  tabModalButton: {
    padding: 20,
    paddingHorizontal:20,
    // height:'30%',
    bottom:10,
    borderRadius: 30,
    // color:'#528F65',
    backgroundColor: '#D3D3D3', // Light grey background for unselected tabs
  },
  selectedTabModalButton: {
    backgroundColor: '#528F65', // Selected tab background color
    borderRadius: 30,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  selectedTabText: {
    color: '#fff', // White text color for selected tab
  },
  sectionButtonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom:10,
    // marginHorizontal: 10,
    color: '#000',
  },
  optionsButtonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    borderRadius: 12,
    padding: 8,
    bottom:10,
    // marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    margin: 5,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#528F65',
  },
  optionText: {fontSize: 14, color: '#000', fontWeight: '600'},
  selectedOptionText: {
    color: '#fff',
  },
  modalOptionButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    // margin: 5,
    flexDirection:'row',
    elevation: 1,
    marginRight:20,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  modalSelectedOptionButton: {
    backgroundColor: '#528F65',
  },
  modalOptionText: {fontSize: 14, color: '#000', fontWeight: '600'},
  modalSelectedOptionText: {
    color: '#fff',
  },
  modalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#528F65',
    marginRight: 15,
  },
  soldContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  soldText: {
    fontSize: 14,
    color: '#888',
  },
  checkmarkIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -10, // Half the height of the icon to center vertically
    marginLeft: -10, // Half the width of the icon to center horizontally
    tintColor: '#fff',
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  colorButtonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // marginVertical: 10,
  },
  colorButton: {
    alignItems: 'center',
    marginBottom: 10,
    width: '12%', // 6 items per row
    marginHorizontal: '1.5%', // Spacing between buttons
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#528F65',
    borderWidth: 1,
    marginBottom: 5,
  },
  colorName: {
    fontSize: 12,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures even space between buttons
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  buttonModalRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Ensures even space between buttons
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  quantityButton: {
    fontSize: 24,
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: '#528F65',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  productDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // padding:10,
  },
  dividerButton: {
    flex: 1,
    elevation:1,
    backgroundColor: '#ccc',
    height:0.5,
  },
  productInfoContainer: {
    // marginTop: 20,
    padding:10,
    paddingHorizontal: 16,
    bottom: 6,
  },
  modalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    // marginHorizontal: 10,
    marginBottom: 10,
  },
  stockCount: {
    fontSize: 14,
    color: 'gray',
  },
  quantityAdjuster: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    borderRadius:30,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 20,
  },
});
