import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { fonts } from '../../assets/constants';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleOTP = () => {
    navigation.navigate('OTP');
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
        Forgot Your Password? 🔑
      </Text>

      <Text style={styles.subtitle}>
      We've got you covered. Enter your registered email to reset your password. We will send you an OTP code to your email for the next steps.
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

      <View style={styles.customButton}>
        <CustomButton title={'Send OTP Code'} onPress={handleOTP} />
      </View>
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
    fontSize: 20,
    fontFamily:fonts.bold,
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#a1a1a1',
    // textAlign: 'center',
    marginBottom: 30,
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
  },
  backicon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
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

export default ForgotPassword;
