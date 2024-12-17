import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { fonts } from '../../assets/constants';

const Successful = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('BottomTabs'); // Replace with the desired screen
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

      <Text style={styles.heading}>You're All Set!</Text>
      <Text style={styles.subtitle}>
        Your password has been successfully changed.
      </Text>

      <View style={styles.customButton}>
        <CustomButton title={'Go To Homepage'} onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    // alignItem:'center',
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
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#a1a1a1',
    textAlign: 'center',
    marginBottom: 30,
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

export default Successful;
