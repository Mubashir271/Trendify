import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, Image} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import {useNavigation} from '@react-navigation/native';


const App = () => {
  const navigation = useNavigation();
  const [themeModalVisible, setThemeModalVisible] = useState(false);

  const handleThemeSelection = () => {
    setThemeModalVisible(true);
  };

  const handleHome = () => {
    navigation.navigate('BottomTabs', {screen: 'Account'});
  };

  const handleLanguageSelection = () => {
    navigation.navigate('AppLanguage');
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        onLeftPress={handleHome}
        hideIcons={['notification', 'menu', 'search', 'scanner']}
        title="Account & Security"
        leftIcon={require('../../assets/icons/back.png')}
      />
      <View style={{paddingHorizontal:20}}>
      <TouchableOpacity style={styles.row} onPress={handleThemeSelection}>
        <Text style={styles.label}>Theme</Text>
        <Text style={styles.value}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row} onPress={handleLanguageSelection}>
        <Text style={styles.label}>App Language</Text>
        <Text style={styles.value}>English (US)</Text>
      </TouchableOpacity>
</View>
      {/* Theme Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={themeModalVisible}
        onRequestClose={() => setThemeModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Theme</Text>
            <TouchableOpacity style={styles.option}>
              <Text style={{fontSize:14}}>System Default</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Dark</Text>
            </TouchableOpacity>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setThemeModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.okButton}
                onPress={() => setThemeModalVisible(false)}>
                <Text style={styles.okText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center',
  },
  option: {
    paddingVertical: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems:'center',
  },
  cancelButton: {
    backgroundColor: '#528F65',
    padding:20,
    paddingHorizontal:40,
    borderRadius: 10,
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
  },
  okButton: {
    backgroundColor: '#528F65',
    padding:20,
    paddingHorizontal:40,
    borderRadius: 10,
  },
  okText: {
    color: '#fff',
    fontSize: 16,
  },
});
