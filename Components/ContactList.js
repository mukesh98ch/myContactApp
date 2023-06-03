import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ContactList = ({ contacts, openContactPopup }) => {
  const renderContacts = () => {
    return contacts.map((contact) => (
      <TouchableOpacity
        key={contact.id}
        onPress={() => openContactPopup(contact)}
        style={styles.contactContainer}
      >
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.contactIconContainer}
        >
          <Feather name="user" size={responsiveFontSize(2.5)} color="#333" />
        </Animatable.View>
        <View>
          <Text style={styles.contactName}>{contact.name}</Text>
          {contact.phoneNumbers && contact.phoneNumbers.map((phoneNumber, index) => (
            <Text key={index} style={styles.phoneNumber}>
              {phoneNumber.number}
            </Text>
          ))}
        </View>
      </TouchableOpacity>
    ));
  };

  return <View>{renderContacts()}</View>;
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    backgroundColor: '#FFFFFF',
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: responsiveHeight(0.2),
    },
    shadowOpacity: 0.25,
    shadowRadius: responsiveWidth(0.3),
    elevation: 5,
  },
  contactIconContainer: {
    marginRight: responsiveWidth(2),
  },
  contactName: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(0.5),
  },
  phoneNumber: {
    fontSize: responsiveFontSize(1.6),
    color: '#888',
    marginLeft: responsiveWidth(1),
  },
});

export default ContactList;