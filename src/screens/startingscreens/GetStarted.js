import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const GetStartedScreen = () => {
  const [selected, setSelected] = useState('SignUp'); // Default selected button
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    // console.log(`Navigating to ${screen}`);  // Add this for debugging
    setSelected(screen);
    if (screen === 'SignUp') {
      navigation.navigate('SignUp');
    } else if (screen === 'SignIn') {
      navigation.navigate('SignIn');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icons/splash.png')} // Replace with your logo
          style={styles.logo}
        />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Let's Get Started</Text>
      <Text style={styles.subtitle}>Let's dive into your account</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'SignUp' && styles.selectedButton,
          ]}
          onPress={() => handleNavigation('SignUp')}
        >
          <Text
            style={[
              styles.buttonText,
              selected === 'SignUp' && styles.selectedButtonText,
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selected === 'SignIn' && styles.selectedButton,
          ]}
          onPress={() => handleNavigation('SignIn')}
        >
          <Text
            style={[
              styles.buttonText,
              selected === 'SignIn' && styles.selectedButtonText,
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Privacy Policy</Text>
        <Text style={styles.separator}> | </Text>
        <Text style={styles.footerText}>Terms of Service</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginVertical: '20%',
    alignItems:'center',
    // paddingVertical: '10%',
    // marginBottom: '20%',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    tintColor:'#528F65',
  },
  heading: {
    fontSize: 24,
    fontFamily:fonts.bold,
    color: '#000',
    textAlign:'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    bottom:-10,
    top:20,
    marginVertical: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#528F65',
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily:fonts.medium,
    color: '#528F65',
    fontWeight:'700',
  },
  selectedButton: {
    backgroundColor: '#528F65',
  },
  selectedButtonText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems:'center',
    justifyContent:'center',
  },
  footerText: {
    fontSize: 14,
    fontFamily:fonts.regular,
    color: '#666',
  },
  separator: {
    marginHorizontal: 5,
    fontSize: 14,
    color: '#666',
  },
});

export default GetStartedScreen;
