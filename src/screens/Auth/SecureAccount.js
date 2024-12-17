import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { fonts } from '../../assets/constants';

const SecureAccount = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePassword = () => {
    navigation.navigate('Successful');
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

      <Text style={styles.heading}>Secure Your Account 🔒</Text>
      <Text style={styles.subtitle}>
        Almost there! Create a new password for your Trendify account to keep it
        secure. Remember to choose a strong and unique password.
      </Text>

      {/* Password Input */}
      <Text style={styles.label}>New Password</Text>
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

      {/* Confirm Password Input */}
      <Text style={styles.label}>Confirm New Password</Text>
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

      <View style={styles.customButton}>
        <CustomButton title={'Save New Password'} onPress={handlePassword} />
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
    color: '#a1a1a1',
    marginVertical: 10,
  },
  resendLink: {
    color: '#528F65',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backicon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    color: '#000',
    fontFamily:fonts.semiBold,
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
    // padding: 20,
  },
  icon: {
    marginRight: 10,
  },
  customButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignSelf: 'center',
  },
});

export default SecureAccount;
