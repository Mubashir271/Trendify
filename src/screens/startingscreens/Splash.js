import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { fonts } from '../../assets/constants';


const SplashScreen = ( ) => {
const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000); // Navigate after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/splash.png')} // Replace with your logo
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to Trendify</Text>
      <ActivityIndicator style={styles.loader} size="large" color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#528F65',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 24,
    fontSize: 20,
    color: '#fff',
    fontFamily:fonts.extraBold,
  },
  loader: {
    marginTop: 30,
    top: 20,
  },
});

export default SplashScreen;
