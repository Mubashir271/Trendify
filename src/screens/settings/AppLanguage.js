import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';

const languages = [
  {id: '1', name: 'English (US)', flag: require('../../assets/icons/us.png')},
  {id: '2', name: 'English (UK)', flag: require('../../assets/icons/uk.png')},
  {id: '3', name: 'Mandarin', flag: require('../../assets/icons/russia.png')},
  {id: '4', name: 'Spanish', flag: require('../../assets/icons/uk.png')},
  {id: '5', name: 'Hindi', flag: require('../../assets/icons/india.png')},
  {id: '6', name: 'French', flag: require('../../assets/icons/france.png')},
  {id: '7', name: 'Arabic', flag: require('../../assets/icons/uk.png')},
  {id: '8', name: 'Russian', flag: require('../../assets/icons/russia.png')},
  {id: '9', name: 'Japanese', flag: require('../../assets/icons/india.png')},
];

const AppLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('1');

  const handleLanguageChange = (id) => {
    setSelectedLanguage(id);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => handleLanguageChange(item.id)}>
      <View style={styles.flagContainer}>
        <Image source={item.flag} style={styles.flag} />
      </View>
      <Text style={styles.language}>{item.name}</Text>
      {selectedLanguage === item.id && <Text style={styles.checkmark}>✔</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AppLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  flagContainer: {
    marginRight: 10,
  },
  flag: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  language: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  checkmark: {
    fontSize: 16,
    color: '#4CAF50',
  },
});
