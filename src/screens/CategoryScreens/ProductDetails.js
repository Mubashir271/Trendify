/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CategoryHeader from '../../components/CategoryHeader';
import {useNavigation} from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const recentPeople = [
  {
    id: '1',
    name: 'Charlotte Hanlin',
    avatar: require('../../assets/icons/avatar.png'),
  },
  {
    id: '2',
    name: 'Kristin Watson',
    avatar: require('../../assets/icons/avatar.png'),
  },
  {
    id: '3',
    name: 'Clinton Mcclure',
    avatar: require('../../assets/icons/avatar.png'),
  },
  {
    id: '4',
    name: 'Maryland Winkles',
    avatar: require('../../assets/icons/avatar.png'),
  },
  {
    id: '5',
    name: 'Alex Hernandez',
    avatar: require('../../assets/icons/avatar.png'),
  },
];

const socialIcons = [
  {name: 'WhatsApp', icon: require('../../assets/icons/facebook.png')},
  {name: 'Facebook', icon: require('../../assets/icons/facebook.png')},
  {name: 'Instagram', icon: require('../../assets/icons/facebook.png')},
  {name: 'Telegram', icon: require('../../assets/icons/facebook.png')},
  {name: 'Twitter', icon: require('../../assets/icons/facebook.png')},
];

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // Single size
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(); // Default selected button
  const [modalVisible, setModalVisible] = useState(false);
  const [ButtonmodalVisible, setButtonModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState({
    General: false,
    Promotion: false,
  });
  const [isLoading, setIsLoading] = useState(null); // Track loading for each button
  const [quantity, setQuantity] = useState(1); // State for quantity


  const adjustQuantity = (action) => {
    if (action === 'increase') {
      setQuantity(prevQuantity => prevQuantity + 1); // Increase quantity
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); // Decrease quantity (prevent going below 1)
    }
  };

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };

  const toggleButtonModal = () => {
    setButtonModalVisible(prevState => !prevState);
  };

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleMenuPress = () => {};

  const handleButtonPress = button => {
    setActiveButton(button); // Update active button state
    setIsLoading(button); // Set specific button loading state
    // Simulate a network request or processing action
    setTimeout(() => {
      setIsLoading(null); // Reset loading state after the action is complete
      toggleButtonModal(); // Show modal after action is complete
    }, 2000); // Simulate a 2-second delay
  };

  const toggleFilter = (type, value) => {
    if (type === 'size') {
      setSelectedSize(prev => (prev === value ? null : value));
    } else if (type === 'color') {
      setSelectedColor(prev => (prev === value ? null : value));
    }
  };

  const toggleHeart = (productId, section) => {
    if (section === 'discover') {
      const isLiked = likedProducts.includes(productId);
      if (!isLiked) {
        // Show toast when added to the wishlist
        ToastAndroid.show('Added to Wishlist!', ToastAndroid.SHORT);
        navigation.navigate('BottomTabs', {screen: 'Wishlist'});
      }
      // Toggle liked state
      setLikedProducts(prevLiked =>
        prevLiked.includes(productId)
          ? prevLiked.filter(id => id !== productId)
          : [...prevLiked, productId],
      );
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Retrieve the product from AsyncStorage
        const storedProduct = await AsyncStorage.getItem('selectedProduct');
        if (storedProduct) {
          setProduct(JSON.parse(storedProduct));
        }
      } catch (error) {
        console.error('Error retrieving product from AsyncStorage:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#528F65" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.noProductText}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <CategoryHeader
        title={'Product'}
        onBackPress={handleBackPress}
        onMenuPress={handleMenuPress}
        modalVisible={modalVisible}
        onSharePress={toggleModal}
        hideIcons={['settings', 'search']}
      />

      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{product.name}</Text>

      {/* Product details section with updated layout */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        {/* Sold count section */}
        <View style={styles.soldContainer}>
          <Text style={styles.soldText}>2,475 sold</Text>
        </View>

        <Text style={styles.productRating}>⭐{product.rating}</Text>
      </View>

      {/* Section Title and See All */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Vouchers Available</Text>
        <TouchableOpacity style={styles.seeAllContainer}>
          <Text style={styles.seeAll}>View All </Text>
          <Image
            source={require('../../assets/icons/forward.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Size Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Size</Text>
      </View>
      <View style={styles.optionsRow}>
        {['XS', 'S', 'M', 'L', 'XL'].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.optionButton,
              selectedSize === item && styles.selectedOptionButton,
            ]}
            onPress={() => toggleFilter('size', item)}>
            <Text
              style={[
                styles.optionText,
                selectedSize === item && styles.selectedOptionText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Color Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Color</Text>
      </View>
      <View style={styles.colorRow}>
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
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Product Information</Text>
      </View>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productInfoLabel}>
          Material:{' '}
          <Text style={styles.productInfoValue}>{product.material}</Text>
        </Text>
        <Text style={styles.productInfoLabel}>
          Care Label:{' '}
          <Text style={styles.productInfoValue}>{product.careLabel}</Text>
        </Text>
        <Text style={styles.productInfoLabel}>
          SKU: <Text style={styles.productInfoValue}>{product.sku}</Text>
        </Text>
        <Text style={styles.productInfoLabel}>
          Color: <Text style={styles.productInfoValue}>{product.color}</Text>
        </Text>
        <Text style={styles.productInfoLabel}>
          Pattern:{' '}
          <Text style={styles.productInfoValue}>{product.pattern}</Text>
        </Text>
      </View>
      <Text style={styles.productDescription}>{product.description}</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
        <TouchableOpacity style={styles.seeAllContainer}>
          <Text style={styles.seeAll}>View All </Text>
          <Image
            source={require('../../assets/icons/forward.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Rating Breakdown */}
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{product.rating}⭐</Text>
        <View style={styles.ratingBar}>
          <View style={[styles.ratingFill, {width: '80%'}]} />
        </View>
        <Text style={styles.ratingCount}>{product.ratingCount} ratings</Text>
      </View>
      <View style={styles.divider} />

      {/* Reviews */}
      <View style={styles.reviewContainer}>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewName}>Amelia Williams</Text>
          <Text style={styles.reviewDate}>2 weeks ago</Text>
          <Text style={styles.reviewRating}>⭐ 5</Text>
          <Text style={styles.reviewText}>
            The item just arrived! Can’t wait to try it this week. Hope it suits
            my style! 🔥
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.reviewItem}>
          <Text style={styles.reviewName}>Victoria Rodriguez</Text>
          <Text style={styles.reviewDate}>6 days ago</Text>
          <Text style={styles.reviewRating}>⭐ 4</Text>
          <Text style={styles.reviewText}>
            Urban Blend shirt is a versatile addition. Slightly snug but stylish
            and well-made ❤️
          </Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        {/* Heart Button */}
        <TouchableOpacity
          onPress={() => toggleHeart(product.id, 'discover')}
          style={styles.heartIconContainer}>
          <Image
            source={
              likedProducts.includes(product.id)
                ? require('../../assets/icons/heart-filled.png')
                : require('../../assets/icons/heart.png')
            }
            style={[
              styles.heartIcon,
              likedProducts.includes(product.id) && styles.heartIconHighlighted, // Apply highlighting when liked
            ]}
          />
        </TouchableOpacity>

        {/* General Button */}
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeButton === 'General' && styles.selectedTabButton,
          ]}
          onPress={() => handleButtonPress('General')}>
          {isLoading === 'General' ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={[
                styles.tabText,
                activeButton === 'General' && styles.selectedTabText,
              ]}>
              Buy Now
            </Text>
          )}
        </TouchableOpacity>

        {/* Promotion Button */}
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeButton === 'Promotion' && styles.selectedTabButton,
          ]}
          onPress={() => handleButtonPress('Promotion')}>
          {isLoading === 'Promotion' ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={[
                styles.tabText,
                activeButton === 'Promotion' && styles.selectedTabText,
              ]}>
              Add to Cart
            </Text>
          )}
        </TouchableOpacity>
      </View>

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
              source={product.image} // Add your image URL here
              style={styles.modalImage}
            />

            {/* Product Name, Stock, and Price on the right */}
            <View style={styles.modalproductInfoContainer}>
              <Text style={styles.modalName}>{product.name}</Text>
              <Text style={styles.stockCount}>Stock: {256}</Text>
              <Text style={styles.modalPrice}>${product.price}</Text>

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

      {/* Share Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Share</Text>

            {/* Recent People */}
            <View style={styles.header}>
              <Text style={styles.label}>Recent People</Text>
              <View style={styles.divider} />
            </View>
            <FlatList
              data={recentPeople}
              horizontal
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.personContainer}>
                  <Image source={item.avatar} style={styles.avatar} />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />

            {/* Social Media */}
            <View style={styles.header}>
              <Text style={styles.label}>Social Media</Text>
              <View style={styles.divider} />
            </View>
            <FlatList
              data={socialIcons}
              horizontal
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <View style={styles.socialIconContainer}>
                  <Image source={item.icon} style={styles.socialIcon} />
                  <Text style={styles.socialName}>{item.name}</Text>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />

            {/* Close Button */}
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  checkmarkContainer: {
    backgroundColor: '#28a745',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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
  tabButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#528F65',
  },
  selectedTabButtonText: {
    color: '#fff', // White text color for selected tab
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '85%',
    alignSelf: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 20,
  },
  modalImage:{
    width: '50%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginVertical: 20,
  },
  productName: {
    fontSize: 20,
    fontFamily:fonts.bold,
    color: '#000',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  modalName: {
    fontSize: 16,
    fontFamily:fonts.bold,
    color: '#000',
    // marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily:fonts.bold,
    marginHorizontal: 10,
    color: '#000',
  },
  sectionButtonTitle: {
    fontSize: 16,
    fontFamily:fonts.bold,
    bottom:10,
    // marginHorizontal: 10,
    color: '#000',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  seeAll: {
    fontSize: 14,
    color: '#528F65',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: '#528F65',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
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
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#528F65',
    marginRight: 15,
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
  productRating: {
    fontSize: 14,
    color: '#888',
  },
  productDescription: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#555',
    marginTop: 10,
    marginHorizontal: 10,
  },
  noProductText: {
    fontSize: 18,
    color: '#888',
  },
  productInfoContainer: {
    // marginTop: 20,
    padding:10,
    paddingHorizontal: 16,
    bottom: 4,
  },
  modalproductInfoContainer: {
    // marginTop: 20,
    padding:10,
    paddingHorizontal: 16,
    bottom: 20,
  },
  productInfoLabel: {
    fontSize: 18,
    color: '#333',
    fontFamily:fonts.semiBold,
    marginVertical: 6,
  },
  productInfoValue: {
    fontFamily:fonts.medium,
    color: '#555',
  },
  ratingContainer: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  rating: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffb81c',
  },
  ratingBar: {
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginVertical: 10,
  },
  ratingFill: {
    height: '100%',
    backgroundColor: '#ffb81c',
    borderRadius: 2,
  },
  ratingCount: {
    fontSize: 14,
    color: '#777',
  },
  reviewContainer: {
    marginHorizontal: 10,
  },
  reviewItem: {
    marginBottom: 15,
  },
  reviewName: {
    fontSize: 19,
    fontFamily:fonts.semiBold,
    color: '#000',
  },
  reviewDate: {
    fontSize: 12,
    color: '#777',
  },
  reviewRating: {
    fontSize: 14,
    color: '#ffb81c',
  },
  reviewText: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#333',
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
  heartIconContainer: {
    backgroundColor: '#D9E8D5',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    width: 20,
    height: 20,
    tintColor: '#528F65',
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
  productDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // padding:10,
  },
  stockCount: {
    fontSize: 14,
    fontFamily:fonts.light,
    color: 'gray',
  },
  quantityAdjuster: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    borderRadius:30,
  },
  quantityButton: {
    fontSize: 24,
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontFamily:fonts.semiBold,
    marginBottom: 10,
    marginLeft: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    elevation: 2,
  },
  sizeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
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
  modalTitle: {
    fontSize: 18,
    fontFamily:fonts.bold,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
    marginLeft: 10,
  },
  personContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily:fonts.regular,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  socialIconContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  socialName: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily:fonts.regular,
    color: '#333',
  },
});
