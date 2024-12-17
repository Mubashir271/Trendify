// components/Categories.js
import React from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import this for navigation
import { fonts } from '../assets/constants';


const Categories = ({categories, selectedCategory, onSelectCategory}) => {
  const navigation = useNavigation(); // Use navigation


  const handleCategorySelect = (item) => {
    onSelectCategory(item);
    // Navigate to ProductsScreen, passing selected category
    navigation.navigate('ProductsScreen', { category: item.name });
  };
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === item.name && styles.selectedCategoryButton,
          ]}
          onPress={() => handleCategorySelect(item)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && styles.selectedCategoryText,
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryList}
    />
  );
};

const styles = StyleSheet.create({
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
    borderColor: '#ccc',
  },
  selectedCategoryButton: {
    backgroundColor: '#528F65',
    borderColor: '#528F65',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: '#333',
  },
  selectedCategoryText: {
    color: '#fff',
  },
});

export default Categories;
