/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import CustomButton from '../../components/CustomButton';
import { fonts } from '../../assets/constants';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);

    // Simulate a signup process (e.g., API call)
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('BottomTabs'); // Navigate to home screen after signup
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.backicon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>
        Join Trendify Today
        <Image
          source={require('../../assets/icons/user.png')}
          style={styles.userImage}
        />
      </Text>

      <Text style={styles.subtitle}>
        Embark on a fashion journey tailored for you.
      </Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/icons/email.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/icons/password.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.icon}
        />
      </View>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={{marginRight: 10}}>
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderColor: '#528F65',
              backgroundColor: isChecked ? '#528F65' : 'transparent',
              justifyContent: 'center', // Center the icon inside the box
              alignItems: 'center',
            }}>
            {/* Render checkmark icon when checkbox is checked */}
            {isChecked && (
              <Image
                source={require('../../assets/icons/checkmark.png')} // Use your local checkmark icon
                style={styles.checkboxIcon}
              />
            )}
          </View>
        </TouchableOpacity>

        <Text style={styles.checkboxText}>
          I agree to Trendify{' '}
          <Text style={styles.linkText}>Terms & Conditions</Text>
        </Text>
      </View>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>
      <View style={styles.customButton}>
        <CustomButton title={'Sign Up'} onPress={handleSignUp} />
      </View>
      {/* Modal for loading */}
      <Modal
        visible={loading}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setLoading(false)}>
        <View style={styles.modalContainer}>
          <BlurView
            style={styles.blurContainer}
            blurType="dark"
            blurAmount={10}>
            <View style={styles.modalContent}>
              <ActivityIndicator size="large" color="#528F65" />
              <Text style={styles.loadingText}>Sign up...</Text>
            </View>
          </BlurView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontFamily:fonts.bold,
    color: '#000',
    marginBottom: 10,
  },
  userImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#a1a1a1',
    textAlign: 'center',
    marginBottom: 30,
  },
  checkboxIcon: {
    height: 12,
    width: 12,
    tintColor:'#fff',
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    fontFamily:fonts.semiBold,
    color: '#000',
    // fontWeight: '700',
    marginBottom: 10,
    marginLeft: 2,
  },
  inputIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fbfbfa',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14,
    color: '#000',
  },
  backicon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  icon: {
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontFamily:fonts.medium,
    color: '#000',
    marginLeft: 10,
  },
  linkText: {
    color: '#528F65',
    fontFamily:fonts.semiBold,
  },
  signUpButton: {
    backgroundColor: '#528F65',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpButtonText: {
    color: '#fff',
    fontFamily:fonts.semiBold,
  },
  customButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignSelf: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#000',
    fontFamily:fonts.medium,
    marginBottom: 20,
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 40,
    paddingHorizontal: '30%',
    borderRadius: 10,
    elevation: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#528F65',
  },
});

export default SignupScreen;
