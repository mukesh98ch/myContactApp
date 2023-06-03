import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,SafeAreaView } from 'react-native';
import * as Contacts from 'expo-contacts';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import ContactList from './Components/ContactList';
import ContactPopup from './Components/ContactPopup';
import { contactsData } from './Components/ContactData';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);
  

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        if (data.length > 0) {
          setContacts(data);
        }
      }
    } catch (error) {
      console.log('Error fetching contacts: ', error);
    }
  };

  const searchContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  };

  const openContactPopup = (contact) => {
    setSelectedContact(contact);
  };

  const closeContactPopup = () => {
    setSelectedContact(null);
  };

  const renderPlusButton = () => {
    return (
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => console.log('Add new contact')}
      >
        <Feather name="plus" size={responsiveFontSize(3.5)} color="#FFF" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      
        <>
          <ScrollView>
            <Text style={styles.title}>Contacts</Text>
            <TextInput
              style={styles.searchInput}
              onChangeText={(text) => setSearchQuery(text)}
              placeholder="Search contacts..."
            />

            <ContactList contacts={searchContacts()} openContactPopup={openContactPopup} />

            <ContactPopup selectedContact={selectedContact} closeContactPopup={closeContactPopup} />
          </ScrollView>

          {renderPlusButton()}
        </>
      
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:5,
    marginRight:5,
    width:'98%',
    height: '97%'
  },
 
  
  searchInput: {
    height: responsiveHeight(5),
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(6),
    
  },
  plusButton: {
    position: 'absolute',
    bottom: responsiveHeight(3),
    right: responsiveWidth(3),
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(9),
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default App;
