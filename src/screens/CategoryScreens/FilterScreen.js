/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useNavigation } from '@react-navigation/native';

const FilterScreen = () => {
    const navigation = useNavigation();
    const [priceRange, setPriceRange] = useState([200, 500]);

    const [selectedCategory, setSelectedCategory] = useState(null); // Single category
    const [selectedPriceRange, setSelectedPriceRange] = useState(null); // Single price range
    const [selectedSize, setSelectedSize] = useState(null); // Single size
    const [selectedRating, setSelectedRating] = useState(null); // Single rating
    const [selectedColor, setSelectedColor] = useState(null);

    const toggleFilter = (type, value) => {
      if (type === 'category') {
        setSelectedCategory(prev => (prev === value ? null : value));
      } else if (type === 'priceRange') {
        setSelectedPriceRange(prev => (prev === value ? null : value));
      } else if (type === 'size') {
        setSelectedSize(prev => (prev === value ? null : value));
      } else if (type === 'rating') {
        setSelectedRating(prev => (prev === value ? null : value));
      } else if (type === 'color') {
        setSelectedColor(prev => (prev === value ? null : value));
      }
    };

    const CustomMarker = ({ currentValue }) => (
      <View style={styles.markerContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>${currentValue}</Text>
        </View>
        <View style={styles.marker} />
      </View>
    );

    const handleApply = () => {
      // console.log(`Min Price: $${priceRange[0]}, Max Price: $${priceRange[1]}`);
      // console.log('Selected Category:', selectedCategory);
      // console.log('Selected Price Range:', selectedPriceRange);
      // console.log('Selected Size:', selectedSize);
      // console.log('Selected Rating:', selectedRating);
      // console.log('Selected Color:', selectedColor);
      navigation.goBack();
    };

    const handleReset = () => {
      setPriceRange([200, 500]);
      setSelectedCategory(null);
      setSelectedPriceRange(null);
      setSelectedSize(null);
      setSelectedRating(null);
      setSelectedColor(null);
    };

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Filter</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <ScrollView style={styles.content}>
          {/* Categories */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Text style={styles.seeAll}>See All </Text>
              <Image
                source={require('../../assets/icons/forward.png')}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  tintColor: '#528F65',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.optionsRow}>
            {[
              'Women',
              'Men',
              'Shoe',
              'Bag',
              'Luxury',
              'Kids',
              'Sports',
              'Beauty',
              'Lifestyle',
              'Other',
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  selectedCategory === item && styles.selectedOptionButton,
                ]}
                onPress={() => toggleFilter('category', item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedCategory === item && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Price */}
          <Text style={styles.sectionTitle}>Price</Text>
          <View style={styles.sliderContainer}>
            <MultiSlider
              values={priceRange}
              min={1}
              max={1000}
              step={1}
              sliderLength={300}
              onValuesChange={(values) => setPriceRange(values)}
              selectedStyle={{ backgroundColor: '#528F65' }}
              customMarker={(e) => <CustomMarker currentValue={e.currentValue} />}
            />
          </View>
          <View style={styles.optionsRow}>
            {[
              '$1 - $50',
              '$51 - $100',
              '$101 - $150',
              '$151 - $200',
              '$201 - $250',
              '$251 - $300',
              '$300 & up',
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  selectedPriceRange === item && styles.selectedOptionButton,
                ]}
                onPress={() => toggleFilter('priceRange', item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedPriceRange === item && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Rating Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Rating</Text>
          </View>
          <View style={styles.optionsRow}>
            {[
              '⭐ 3 & up',
              '⭐ 4 & up',
              '⭐ 5',
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  selectedRating === item && styles.selectedOptionButton,
                ]}
                onPress={() => toggleFilter('rating', item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedRating === item && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Size Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Size</Text>
          </View>
          <View style={styles.optionsRow}>
            {[
              'XXS',
              'XS',
              'S',
              'M',
              'L',
              'XL',
              'XXL',
              '35',
              '36',
              '37',
              '38',
              '39',
              '40',
              '41',
              '42',
              '43',
              '44',
              '45',
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  selectedSize === item && styles.selectedOptionButton,
                ]}
                onPress={() => toggleFilter('size', item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedSize === item && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Color Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Color</Text>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Text style={styles.seeAll}>See All </Text>
              <Image
                source={require('../../assets/icons/forward.png')}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  tintColor: '#528F65',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.colorRow}>
            {[
              { name: 'Black', color: '#000' },
              { name: 'White', color: '#fff' },
              { name: 'Red', color: '#ff0000' },
              { name: 'Pink', color: '#ff69b4' },
              { name: 'Purple', color: '#800080' },
              { name: 'Deep Purple', color: '#673ab7' },
              { name: 'Indigo', color: '#3f51b5' },
              { name: 'Blue', color: '#2196f3' },
              { name: 'Light Blue', color: '#ADD8E6' },
              { name: 'Teal', color: '#008080' },
              { name: 'Green', color: '#4caf50' },
              { name: 'Lime', color: '#cddc39' },
              { name: 'Yellow', color: '#ffeb3b' },
              { name: 'Amber', color: '#ffc107' },
              { name: 'Orange', color: '#ff5722' },
              { name: 'Deep Orange', color: '#ff7043' },
              { name: 'Brown', color: '#795548' },
              { name: 'Blue Grey', color: '#607d8b' },
            ].map((item, index) => (
              <TouchableOpacity
                key={item.name}
                style={[
                  styles.colorButton,
                  selectedColor === item.name && styles.selectedColorButton,
                ]}
                onPress={() => toggleFilter('color', item.name)}
              >
                <View
                  style={[
                    styles.colorCircle,
                    { backgroundColor: item.color },
                  ]}
                >
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
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    checkmarkIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -10, // Half the height of the icon to center vertically
        marginLeft: -10, // Half the width of the icon to center horizontally
        tintColor:'#fff',
      },
      colorOption: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 5,
        borderWidth: 2,
        borderColor: '#528F65',
      },
      selectedColorOption: {
        borderColor: '#528F65', // Border color when selected
        borderWidth: 2,
      },
      colorRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
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
        borderRadius: 20,borderColor: '#528F65',
        borderWidth:1,
        marginBottom: 5,
      },
      colorName: {
        fontSize: 12,
        textAlign: 'center',
      },
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  closeButton: { fontSize: 18, color: '#000' },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  content: { paddingHorizontal: 16 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  seeAll: { fontSize: 14, color: '#528F65' },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
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
  optionText: { fontSize: 14, color: '#000', fontWeight: '600' },
  selectedOptionText: {
    color: '#fff',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  resetButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
    padding: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  applyButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#528F65',
    padding: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  resetText: { color: '#000', fontSize: 16 },
  applyText: { color: '#fff', fontSize: 16 },
  markerContainer: { alignItems: 'center' },
  bubble: {
    backgroundColor: '#528F65',
    padding: 4,
    borderRadius: 8,
    marginBottom: 5,
  },
  bubbleText: { color: '#fff', fontSize: 12 },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#528F65',
  },
});

export default FilterScreen;
