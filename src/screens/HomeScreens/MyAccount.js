/* eslint-disable no-alert */
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../../components/HomeHeader';
import QRCodeScanner from 'react-native-qrcode-scanner'; // QR Code scanner package
import {useNavigation} from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const MyAccount = () => {
  const navigation = useNavigation();
  const [logoutModal, setLogoutModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State for Modal visibility
  const [scannerVisible, setScannerVisible] = useState(false); // State for QR Scanner visibility
  const [qrCodeData, setQrCodeData] = useState(null); // Store scanned QR data

  const handleHome = () => {
    navigation.navigate('BottomTabs', {screen: 'Home'});
  };

  const handleModal = () => {
    setLogoutModal(true);
  };
  const onScannerPress = () => {
    setScannerVisible(true);
    setModalVisible(true);
  };

  const handleQrScan = e => {
    setQrCodeData(e.data); // Capture scanned QR data
    setScannerVisible(false); // Close scanner after scanning
  };

  const handleLogout = () => {
    // Perform logout action here
    setLogoutModal(false);
    alert('You have logged out.');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView style={styles.ScrollViewContainer}>
      <HomeHeader
        onLeftPress={handleHome}
        onScannerPress={onScannerPress}
        hideIcons={['notification', 'menu', 'search']}
        title="Account"
        rightIcon={require('../../assets/icons/noti.png')}
        leftIcon={require('../../assets/icons/shell.png')}
      />
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/icons/user.png')} // Replace with your avatar image path
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Andrew Ainsley</Text>
            <Text style={styles.profileEmail}>
              andrew.ainsley@yourdomain.com
            </Text>
          </View>
          <TouchableOpacity
            style={styles.qrCode}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Image
              source={require('../../assets/icons/qr-code.png')}
              style={styles.qrImage}
            />
          </TouchableOpacity>
        </View>

        {/* Menu List */}
        <ScrollView>
          <View style={styles.menuSection}>
            <TouchableOpacity style={styles.menuItem}>
              <Image
                source={require('../../assets/icons/location.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Manage Addresses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Image
                source={require('../../assets/icons/card.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Payment Methods</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                navigation.navigate('Privacy');
              }}>
              <Image
                source={require('../../assets/icons/setting.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Account & Security</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.otherSection}>
            <TouchableOpacity style={styles.menuItem} onPress={() => {
              navigation.navigate('MyProfile');
            }}>
              <Image
                source={require('../../assets/icons/account.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => {
              navigation.navigate('MyNotification');
            }}>
              <Image
                source={require('../../assets/icons/noti.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => {
              navigation.navigate('LinkedAccount');
            }}>
              <Image
                source={require('../../assets/icons/sort.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Linked Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => {
              navigation.navigate('App');
            }}>
              <Image
                source={require('../../assets/icons/eye.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>App Appearance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Image
                source={require('../../assets/icons/data.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Data & Analytics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={()=> {
              navigation.navigate('Help');
            }}>
              <Image
                source={require('../../assets/icons/notes.png')}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => {setLogoutModal(true)}}>
              <Image
                source={require('../../assets/icons/logout.png')}
                style={styles.icon}
              />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* QR Scanner Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalqrContent}>
          <Text style={styles.modalText}>Your QR Code:</Text>
          <Image
            source={{
              uri: `https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeData}&size=150x150`,
            }} // Generate QR Code from `qrCodeData`
            style={styles.qrCodeImage}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>


            {/* Logout Modal */}
            <Modal
        visible={logoutModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setLogoutModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Logout</Text>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setLogoutModal(false)}
              >
                <Text style={styles.cancelbuttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.buttonText}>Yes, Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // height:'30%',
    justifyContent: 'flex-end',
    // alignItems:'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalqrContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  modalHeading: {
    fontSize: 18,
    fontFamily: fonts.bold,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  logoutButton: {
    backgroundColor: '#528F65',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  cancelbuttonText: {
    color: '#528F65',
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  buttonText: {
    color: '#fff',
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  otherSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 6,
    elevation:5,
    borderRadius: 10,
  },
  menuSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 6,
    elevation: 4,
    borderRadius: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    paddingVertical: 16,
    elevation: 4,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileText: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    fontFamily:fonts.regular,
    color: '#666',
  },
  qrCode: {
    marginLeft: 'auto',
    marginRight:4,
  },
  qrImage: {
    width: 25,
    height: 25,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
  menuText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: '#333',
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
  },
  qrCodeImage: {
    width: 150,
    height: 150,
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
    fontSize: 16,
  },
});
