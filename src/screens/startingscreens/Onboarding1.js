import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../assets/constants';

const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation();

  const pages = [
    {
      heading: 'Explore Fashion Trends with Trendify',
      text: 'Dive into the world of fashion with Trendify, where you can discover the latest and hottest styles curated just for you.',
    },
    {
      heading: 'Your Style, Your Trendify Experience',
      text: 'Trendify goes beyond fashion - its a personalized style journey. Start your fashion adventure with Trendify today.',
    },
    {
      heading: 'Seamless Fashion, Seamless Shopping',
      text: 'Trendify offers an effortless shopping experience, making your style journey smoother than ever.',
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('GetStarted'); // Navigate to the Home screen
    }
  };

  const handleSkip = () => {
    navigation.navigate('GetStarted'); // Skip directly to the Home screen
  };

  return (
    <ImageBackground
      source={require('../../assets/images/onboardingback.png')} // Replace with your background image
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{pages[currentPage].heading}</Text>
        <Text style={styles.text}>{pages[currentPage].text}</Text>

        <View style={styles.pagination}>
          {pages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentPage === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
    // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add overlay effect
  },
  heading: {
    fontSize: 24,
    fontFamily:fonts.bold,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily:fonts.regular,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#528F65',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#f9f9f9',
    borderRadius: 30,
  },
  skipText: {
    color: '#528F65',
    fontWeight: 'bold',
    padding:10,
  },
  continueButton: {
    // padding:10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#528F65',
    borderRadius: 30,
  },
  continueText: {
    padding:10,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
