import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fonts } from '../assets/constants';


const HomeHeader = ({
  title = 'Trendify',
  leftIcon,
  onLeftPress,
  rightIcon,
  onNotificationPress,
  hideIcons = [],
  onSearchPress,
  onMenuPress,
  onScannerPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      {/* Left Icon */}
      {leftIcon && (
        <TouchableOpacity onPress={onLeftPress}>
          <Image source={leftIcon} style={styles.lefticon} />
        </TouchableOpacity>
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icon */}
      {!hideIcons.includes('notification') && (
        <TouchableOpacity onPress={onNotificationPress} style={styles.iconContainer}>
          <Image source={rightIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
            {/* Search Icon */}
            {!hideIcons.includes('search') && (
        <TouchableOpacity onPress={onSearchPress} style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {/* Menu Icon */}
      {!hideIcons.includes('menu') && (
        <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/menu.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {!hideIcons.includes('scanner') && (
        <TouchableOpacity onPress={onScannerPress} style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/scanner.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    // elevation: 1, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft:8,
    marginRight:-4,
    resizeMode: 'contain',
    // justifyContent:'space-between',
  },
  lefticon: {
    width: 24,
    height: 24,
    marginLeft:8,
    marginRight:-4,
    resizeMode: 'contain',
    tintColor:'#528F65',
    // justifyContent:'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily:fonts.extraBold,
    color: '#000',
    textAlign: 'center',
    justifyContent:'center',
    flex: 1, // Center the title by flexing it
  },
});

export default HomeHeader;
