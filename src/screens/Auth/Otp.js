import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { fonts } from '../../assets/constants';

const OTP = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']); // State for OTP inputs
  const [focusedIndex, setFocusedIndex] = useState(-1); // Track the focused input index

  const handleOTP = () => {
    // Perform OTP verification
    navigation.navigate('SecureAccount'); // Replace with the desired screen
  };

  const handleResendCode = () => {
    // Logic for resending the OTP code
    // console.log('Resend code triggered');
  };

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input if the current input has a single character
    if (text && index < 3) {
      refs[index + 1]?.focus();
    }
  };

  const refs = []; // To store refs for OTP inputs

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

      <Text style={styles.heading}>Enter OTP Code 🔐</Text>
      <Text style={styles.subtitle}>
        Please check your email inbox for a message from Trendify. Enter the
        one-time verification code below.
      </Text>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (refs[index] = ref)}
            style={[
              styles.otpInput,
              focusedIndex === index && styles.otpInputFocused,
            ]}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
            onFocus={() => setFocusedIndex(index)} // Set focused input
            onBlur={() => setFocusedIndex(-1)} // Reset focus when input is blurred
          />
        ))}
      </View>

      {/* Resend Code Section */}
      <Text style={styles.resendText}>
        You can resend the code in{' '}
      </Text>
      <Text style={styles.resendLink} onPress={handleResendCode}>
        Resend Code
      </Text>

      <View style={styles.customButton}>
        <CustomButton title={'Verify OTP'} onPress={handleOTP} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontFamily:fonts.bold,
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#a1a1a1',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fbfbfa',
    color: '#000',
  },
  otpInputFocused: {
    borderColor: '#528F65',
    backgroundColor: '#E9F5EC', // Lighter shade of the resend link color
  },
  resendText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily:fonts.light,
    color: '#a1a1a1',
    marginVertical: 10,
  },
  resendLink: {
    color: '#528F65',
    fontFamily:fonts.bold,
    textAlign: 'center',
  },
  backicon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  customButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignSelf: 'center',
  },
});

export default OTP;
