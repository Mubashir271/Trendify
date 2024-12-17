import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles'; // Import styles

const SectionHeader = ({ title, onSeeAllPress }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {onSeeAllPress && (
      <TouchableOpacity onPress={onSeeAllPress} style={styles.seeAllContainer}>
        <Text style={styles.seeAll}>See All</Text>
        <Image source={require('../assets/icon.png')} style={styles.icon} />
      </TouchableOpacity>
    )}
  </View>
);

export default SectionHeader;
