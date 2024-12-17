import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CategoryHeader from '../../components/CategoryHeader';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = ({ route }) => {
  const { category } = route.params;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigation = useNavigation();
  const [likedProducts, setLikedProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most Suitable'); // Default sort option

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {};

  const handleMenuPress = () => {};

  const toggleHeart = async (productId, section) => {
    if (section === 'discover') {
      const isLiked = likedProducts.includes(productId);
      let updatedLikedProducts;
      if (!isLiked) {
        ToastAndroid.show('Added to Wishlist!', ToastAndroid.SHORT);
        updatedLikedProducts = [...likedProducts, productId];
      } else {
        updatedLikedProducts = likedProducts.filter((id) => id !== productId);
      }
      setLikedProducts(updatedLikedProducts);
      try {
        // Save updated wishlist to AsyncStorage
        await AsyncStorage.setItem('wishlistProducts', JSON.stringify(updatedLikedProducts));
      } catch (error) {
        console.error('Error saving wishlist to AsyncStorage:', error);
      }
    }
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const products = await AsyncStorage.getItem('filteredProducts');
      setFilteredProducts(products ? JSON.parse(products) : []);
    };
    fetchFilteredProducts();
  }, []);

  const handleSortSelection = (sortOption) => {
    setSelectedSort(sortOption);
    setModalVisible(false);
  };


  const handleProduct = async (product) => {
    try {
      // Save the selected product to AsyncStorage
      await AsyncStorage.setItem('selectedProduct', JSON.stringify(product));
      // Navigate to the ProductDetails screen
      navigation.navigate('ProductDetails');
    } catch (error) {
      console.error('Error saving product to AsyncStorage:', error);
    }
  };


  return (
    <View style={styles.container}>
      <CategoryHeader
        title={category}
        onBackPress={handleBackPress}
        onSearchPress={handleSearchPress}
        onMenuPress={handleMenuPress}
        hideIcons={['settings', 'share']}
      />
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <TouchableOpacity style={styles.productCard} onPress={() => handleProduct(item)} >
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.productOverlay}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                  <TouchableOpacity
                    onPress={() => toggleHeart(item.id, 'discover')}
                    style={styles.heartIconContainer}>
                    <Image
                      source={
                        likedProducts.includes(item.id)
                          ? require('../../assets/icons/heart-filled.png')
                          : require('../../assets/icons/heart.png')
                      }
                      style={styles.heartIcon}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            </View>
          )}
          contentContainerStyle={styles.productList}
          columnWrapperStyle={styles.columnWrapper}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.noResultsText}>No products found</Text>
        </View>
      )}

      {/* Floating Sort and Filter Buttons */}
      <View style={styles.floatingButtonsContainer}>
        <TouchableOpacity
          style={styles.SortButton}
          onPress={() => setModalVisible(true)}>
          <Image source={require('../../assets/icons/sort.png')} style={styles.buttonIcons} />
          <Text style={styles.floatingButtonText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.FilterButton} onPress={() => navigation.navigate('FilterScreen')}>
          <Image source={require('../../assets/icons/filter.png')} style={styles.buttonIcons} />
          <Text style={styles.floatingButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Sort Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sort</Text>
            <View style={styles.divider} />
            {['Most Suitable', 'Popularity', 'Top Rated', 'Price High to Low', 'Price Low to High', 'Latest Arrival', 'Discount'].map((sortOption) => (
              <TouchableOpacity
                key={sortOption}
                onPress={() => handleSortSelection(sortOption)}
                style={styles.radioButtonContainer}>
                <View
                  style={[
                    styles.radioButton,
                    selectedSort === sortOption && styles.selectedRadioButton,
                  ]}>
                  {selectedSort === sortOption && <View style={styles.selectedDot} />}
                </View>
                <Text style={styles.radioButtonLabel}>{sortOption}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
  productList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
  productContainer: {
    flex: 1,
    top: 4,
    marginHorizontal: 5,
  },
  productCard: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    width: '100%',
    aspectRatio: 1,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productOverlay: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  heartIconContainer: {
    backgroundColor: '#000',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  productPrice: { fontSize: 14, color: '#528F65' },
  footer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonsContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SortButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 14,
    flexDirection: 'row',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 5,
  },
  FilterButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    flexDirection: 'row',
    paddingHorizontal: 14,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  floatingButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcons: {
    width: 20,
    height: 20,
    // marginRight: 5, // Adjust spacing between icon and text
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#528F65',
    marginRight: 10,
  },
  selectedRadioButton: {
    backgroundColor: '#528F65',
  },
  selectedDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#528F65',
    alignSelf: 'center',
  },
  radioButtonLabel: {
    fontSize: 16,
    color: '#000',
  },
});

export default ProductsScreen;
