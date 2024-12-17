import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoryHeader from '../../components/CategoryHeader';
import {useNavigation} from '@react-navigation/native';


const Shoe = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    // console.log('Back pressed');
    navigation.goBack();
  };

  const handleSearchPress = () => {
    // console.log('Search pressed');
  };

  const handleMenuPress = () => {
    // console.log('Menu pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CategoryHeader
        title="Shoes"
        onBackPress={handleBackPress}
        onSearchPress={handleSearchPress}
        onMenuPress={handleMenuPress}
      />
      {/* Add additional screen content here */}
      <View style={styles.content}>
        {/* Placeholder for the rest of the screen */}
      </View>
    </SafeAreaView>
  );
};


export default Shoe;

const styles = StyleSheet.create({});
