import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const LinkedAccount = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.goBack();
  };

  return (
    <View style={{backgroundColor:'#fff' , flex:1}}>
      <HomeHeader
        onLeftPress={handleHome}
        hideIcons={['notification', 'menu', 'search', 'scanner']}
        title="Linked Accounts"
        leftIcon={require('../../assets/icons/back.png')}
      />
      <View style={styles.content}>
        <Image
          source={require('../../assets/icons/google.png')}
          style={styles.icon}
        />
        <Text style={styles.platformText}>Google</Text>
        <Text style={[styles.statusText, {color: 'grey'}]}>Connected</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../assets/icons/apple.png')}
          style={styles.icon}
        />
        <Text style={styles.platformText}>Apple</Text>
        <Text style={[styles.statusText, {color: 'grey'}]}>Connected</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../assets/icons/facebook.png')}
          style={styles.icon}
        />
        <Text style={styles.platformText}>Facebook</Text>
        <Text style={[styles.statusText, {color: 'green'}]}>Connect</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../assets/icons/twitter.png')}
          style={styles.icon}
        />
        <Text style={styles.platformText}>Twitter</Text>
        <Text style={[styles.statusText, {color: 'green'}]}>Connect</Text>
      </View>
    </View>
  );
};

export default LinkedAccount;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 8,
    borderRadius: 15,
    justifyContent: 'space-between',
    // elevation:1,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  platformText: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.bold,
    color: '#333',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
