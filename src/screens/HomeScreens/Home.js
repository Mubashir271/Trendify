import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import Categories from '../../components/Categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fonts } from '../../assets/constants';


const Home = () => {
  const navigation = useNavigation();
  const [likedProducts, setLikedProducts] = useState([]);
  const [ setLikedNewArrivals] = useState([]);
  const [ setLikedHotDeals] = useState([]);
  const [selectedCategory] = useState('Discover'); // Track selected category

  const handleSearch = () => {
    navigation.navigate('SearchResult', {products}); // Pass products to SearchResult
  };

  const handleCategoryPress = async (categories) => {
    let filtered = [];
    if (categories.name === 'Discover') {
        filtered = [...(products.men || []), ...(products.women || [])];
    } else if (categories.name === 'Women') {
        filtered = products.women || [];
    } else if (categories.name === 'Men') {
        filtered = products.men || [];
    }
    // Add more categories as needed
    await AsyncStorage.setItem('filteredProducts', JSON.stringify(filtered));
    navigation.navigate('ProductsScreen', { category: categories.name });
};

  const categories = [
    {id: '1', name: 'Discover'},
    {
      id: '2',
      name: 'Women',
      // image: require('../../assets/images/woman.png'),
    },
    {id: '3', name: 'Men'},
    {id: '4', name: 'Shoe'},
    {id: '5', name: 'Bag'},
    {
      id: '6',
      name: 'Luxury',
    },
    {id: '7', name: 'Kids'},
    {
      id: '8',
      name: 'Sports',
      // image: require('../../assets/images/sports.png'),
    },
    {
      id: '9',
      name: 'Beauty',
      image: require('../../assets/images/beauty.png'),
    },
    {
      id: '10',
      name: 'Lifestyle',
      image: require('../../assets/images/lifestyle.jpg'),
    },
    {
      id: '11',
      name: 'Other',
    },
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
        ratingCount: 120,
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
        ratingCount: 90,
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
        ratingCount: 150,
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
        ratingCount: 200,
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
        ratingCount: 80,
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
        ratingCount: 200,
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

  const handleMenuPress = () => {
    console.log('Menu pressed');
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
    console.log('Notification pressed');
  };

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
    ...products.men,
    ...products.women,
    // If you have other categories, add them here
    // ...products.bags,
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <HomeHeader
        onLeftPress={handleMenuPress}
        onRightPress={handleNotificationPress}
        title="Trendify"
        rightIcon={require('../../assets/icons/noti.png')}
        leftIcon={require('../../assets/icons/shell.png')}
        hideIcons={['search', 'menu','scanner']}
      />
      {/* Search Bar */}
      <TouchableOpacity
        style={styles.searchBarContainer}
        onPress={handleSearch}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={styles.searchIcon}
        />
        <Text style={styles.searchInput}>Search Trends...</Text>
      </TouchableOpacity>
      {/* Image Banner */}
      <Image
        source={require('../../assets/images/lifestyle.jpg')}
        style={styles.bannerImage}
      />
      {/* Horizontal Scrollable Categories */}
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryPress}
      />
      {/* Horizontal Scrollable Products */}
      <FlatList
        data={allProducts} // Use the combined array of products
        horizontal
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
      {/* Categories Grid */}
      <View style={styles.gridContainer}>
        {categories.slice(1).map(item => (
          <TouchableOpacity key={item.id} style={styles.gridItem} >
            <Text style={styles.gridText}>{item.name}</Text>
            <Image source={item.image} style={styles.gridImage} />
          </TouchableOpacity>
        ))}
      </View>
      {/* New Arrival Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Arrival</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All ➜</Text>
        </TouchableOpacity>
      </View>
      {/* Horizontal Scrollable New Arrival Products */}
      <FlatList
        data={allProducts} // Use the combined array of products
        horizontal
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
      {/* Hot Deals Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Hot Deals This Week</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All ➜</Text>
        </TouchableOpacity>
      </View>
      {/* Horizontal Scrollable Hot Deals */}
      <FlatList
        data={allProducts} // Use the combined array of products
        horizontal
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#888',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: '#888',
    marginRight: 5,
  },
  bannerImage: {
    width: '90%',
    height: 150,
    alignSelf: 'center',
    borderRadius: 8,
    marginVertical: 15,
    resizeMode: 'cover',
  },
  categoryList: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  selectedCategoryButton: {
    backgroundColor: '#528F65', // Selected background color
    borderColor: '#528F65', // Selected border color
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedCategoryText: {
    color: '#fff', // Selected text color
  },
  productList: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  productContainer: {
    marginRight: 15,
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
    fontFamily:fonts.bold,
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  gridItem: {
    flexDirection: 'row', // Align the name and image in a row
    alignItems: 'center', // Align vertically centered
    backgroundColor: '#f9f9f9',
    width: '48%',
    height: 80,
    justifyContent: 'space-between', // Space between Rname and image
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    paddingHorizontal: 5, // Add some horizontal padding
  },
  gridText: {
    fontSize: 16,
    fontFamily:fonts.semiBold,
    color: '#333',
    bottom: 20,
  },
  gridImage: {
    width: 70, // Adjust width as needed
    height: '100%', // Adjust height as needed
    resizeMode: 'stretch', // Ensure the image scales properly
    // backgroundColor:'#fff'
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#528F65',
    fontWeight: 'bold',
  },
});

export default Home;
