import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Categories from '../../components/Categories'; // Import Categories component

const SearchResult = ({ route }) => {
  const { products } = route.params; // Retrieve the passed products
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category
  const [searchTerm, setSearchTerm] = useState(''); // Track the search term
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [loading, setLoading] = useState(false); // Loading state

  const categories = [
    { id: '1', name: 'Discover' },
    { id: '2', name: 'Women' },
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

  // Function to handle real-time search filtering
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts([]);
    } else {
      setLoading(true);
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
      setLoading(false);
    }
  }, [searchTerm, products]);

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {searchTerm && (
          <TouchableOpacity onPress={() => setSearchTerm('')}>
            <Text style={styles.clearButton}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>Search Results</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : filteredProducts.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            No results found. Try a different search term.
          </Text>
        </View>
      ) : (
        <>
        <View>
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          </View>
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Two columns for a grid layout
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    // marginHorizontal: 10,
    paddingHorizontal:10,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  searchInput: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#fff',
  },
  clearButton: {
    fontSize: 16,
    color: '#888',
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  productItem: {
    flex: 1,
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#ffb800',
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SearchResult;
