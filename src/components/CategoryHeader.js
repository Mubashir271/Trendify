import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CategoryHeader = ({
  title,
  onBackPress,
  onSearchPress,
  onSharePress,
  onMenuPress,
  onSettingsPress,
  hideIcons = [],
}) => {
  return (
    <View style={styles.headerContainer}>
      {/* Back Icon */}
      {!hideIcons.includes('back') && (
        <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Search Icon */}
      {!hideIcons.includes('search') && (
        <TouchableOpacity onPress={onSearchPress} style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {/* Share Icon */}
      {!hideIcons.includes('share') && (
        <TouchableOpacity onPress={onSharePress} style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/share.png')}
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

      {/* Settings Icon */}
      {!hideIcons.includes('settings') && (
        <TouchableOpacity onPress={onSettingsPress} style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/setting.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 70,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconContainer: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
});
