import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import Categories from '../../components/Categories';
import { fonts } from '../../assets/constants';

const WishlistScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Discover'); // Track selected category
  const [likedProducts, setLikedProducts] = useState([]);
  const [setLikedNewArrivals] = useState([]);
  const [setLikedHotDeals] = useState([]);


  const handleCategoryPress = (category) => {
    setSelectedCategory(category.name);
    let filtered = [];
    if (category.name === 'Discover') {
      filtered = [...products.men, ...products.women];
    } else if (category.name === 'Women') {
      filtered = products.women;
    } else if (category.name === 'Men') {
      filtered = products.men;
    }
    // Optionally set the filtered list to state if you want dynamic rendering
  };

  const categories = [
    { id: '1', name: 'Discover' },
    { id: '2', name: 'Women'},
    { id: '3', name: 'Men' },
    { id: '4', name: 'Shoe' },
    { id: '5', name: 'Bag' },
    { id: '6', name: 'Luxury' },
    { id: '7', name: 'Kids' },
    { id: '8', name: 'Sports' },
    { id: '9', name: 'Beauty', image: require('../../assets/images/beauty.png') },
    { id: '10', name: 'Lifestyle', image: require('../../assets/images/lifestyle.jpg') },
    { id: '11', name: 'Other' },
  ];
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
  // const handleLeftPress = () => {};

  // const handleSearchPress = () => {};

  const handleMenuPress = () => {};

  const toggleHeart = (productId, section) => {
    if (section === 'discover') {
      setLikedProducts(prevLiked =>
        prevLiked.includes(productId)
          ? prevLiked.filter(id => id !== productId)
          : [...prevLiked, productId],
      );
    } else if (section === 'newArrivals') {
      setLikedNewArrivals(prevLiked =>
        prevLiked.includes(productId)
          ? prevLiked.filter(id => id !== productId)
          : [...prevLiked, productId],
      );
    } else if (section === 'hotDeals') {
      setLikedHotDeals(prevLiked =>
        prevLiked.includes(productId)
          ? prevLiked.filter(id => id !== productId)
          : [...prevLiked, productId],
      );
    }
  };

  const allProducts = [
    ...products.women,
    ...products.men,
    // If you have other categories, add them here
  ];

  return (
    <View style={styles.container}>
      <HomeHeader
        onLeftPress={handleMenuPress}
        title="Wishlist"
        leftIcon={require('../../assets/icons/shell.png')}
        hideIcons={['notifications','scanner']}
      />
      <View style={styles.CategoriesContainer}>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryPress}
        />
      </View>

            {/* Horizontal Scrollable Hot Deals */}
            <FlatList
        data={allProducts} // Use the combined array of products
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.productContainer}>
            <View style={styles.productCard}>
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
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          </View>
        )}
        style={styles.productList}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
  flex: 1,
},
productList: {
  marginVertical: 10,
  paddingHorizontal: 10,
},
productContainer: {
  width:'50%',
  height:'100%',
  marginRight: 10, // Adjusted margin to create consistent spacing
  marginBottom: 20, // Added vertical margin between rows
},
productCard: {
  borderRadius: 10,
  overflow: 'hidden',
  elevation: 3,
  width: 150,
  height: 150,
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
  fontFamily:fonts.semiBold,
  color: '#000',
  marginTop: 5,
},
productPrice: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#528F65',
},
});


export default WishlistScreen;
