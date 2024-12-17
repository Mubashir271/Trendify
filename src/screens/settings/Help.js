import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import {useNavigation} from '@react-navigation/native';


const Help = () => {
    const navigation = useNavigation();

    const handleHome = () => {
      navigation.goBack();
    };
  return (
    <View style={{backgroundColor:'#fff' , flex:1}}>
      <HomeHeader
        onLeftPress={handleHome}
        hideIcons={['notification', 'menu', 'search', 'scanner']}
        title="Help & Support"
        leftIcon={require('../../assets/icons/back.png')}
      />
            <View style={styles.otherSection}>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>FAQ</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Contact Support</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Privacy Policy</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Terms of Service</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Partner</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Job Vacancy</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Accessibility</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Feedback</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>About us</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>

        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Rate us</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Visit our Website</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Follow us on social media</Text>
          <Image source={require('../../assets/icons/forward.png')} style={styles.icon}/>
        </View>
      </View>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
    otherSection: {
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 26,
        borderRadius: 10,
      },
      menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 4,
        justifyContent: 'space-between',
      },
      menuText: {
        fontFamily: 'Urbanist-Medium',
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#333',
      },
      icon: {
        height:20,
        width:20,
        resizeMode:'contain',
      },
});
