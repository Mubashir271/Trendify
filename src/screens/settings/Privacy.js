import {Image, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import HomeHeader from '../../components/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const Privacy = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('BottomTabs', {screen: 'Account'});
  };

    // State for toggles (you can add more state variables if needed)
    const [biometricId, setBiometricId] = useState(false);
    const [faceId, setFaceId] = useState(false);
    const [smsAuthenticator, setSmsAuthenticator] = useState(false);
    const [googleAuthenticator, setGoogleAuthenticator] = useState(false);

  return (
    <View style={styles.container}>
      <HomeHeader
        onLeftPress={handleHome}
        hideIcons={['notification', 'menu', 'search', 'scanner']}
        title="Account & Security"
        leftIcon={require('../../assets/icons/back.png')}
      />
      <View style={styles.otherSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Biometric Id</Text>
          <Switch
            value={biometricId}
            onValueChange={() => setBiometricId(previousState => !previousState)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Face Id</Text>
          <Switch
            value={faceId}
            onValueChange={() => setFaceId(previousState => !previousState)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>SMS Authenticator</Text>
          <Switch
            value={smsAuthenticator}
            onValueChange={() => setSmsAuthenticator(previousState => !previousState)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Google Authenticator</Text>
          <Switch
            value={googleAuthenticator}
            onValueChange={() => setGoogleAuthenticator(previousState => !previousState)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Change Password</Text>
          <Image
            source={require('../../assets/icons/forward.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Device Management</Text>
          <Image
            source={require('../../assets/icons/forward.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.menuDescription}>Manage your account on the various devices you own</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Deactivate Account</Text>
          <Image
            source={require('../../assets/icons/forward.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.menuDescription}>Temporarily deactivate your account. Easily reactivate when you are ready</Text>

        <TouchableOpacity style={styles.menudItem}>
          <Text style={styles.menudText}>Delete Account</Text>
          <Image
            source={require('../../assets/icons/forward.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.menuDescription}>Permenantly remove your account and data. Proceed with caution</Text>
      </View>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  otherSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 10,
  },
  menudItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',  // Space between text and icon
  },
  menudText: {
    fontSize: 16,
    fontWeight:'bold',
    color: 'red',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 4,
    justifyContent: 'space-between',  // Space between text and icon
  },
  icon: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
  },
  menuText: {
    fontSize: 16,
    fontFamily:fonts.semiBold,
    color: '#333',
  },
  menuDescription: {
    fontSize: 14,
    color: '#333',
    paddingRight: 18,
    // marginRight: 10,
  },
});
