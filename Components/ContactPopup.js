import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ContactPopup = ({ selectedContact, closeContactPopup }) => {
  return (
    <Modal visible={selectedContact !== null} animationType="slide">
      <View style={styles.popupContainer}>
        <Text style={styles.popupContactName}>
          {selectedContact?.name}
        </Text>
        {selectedContact?.phoneNumbers.map((phoneNumber, index) => (
          <Text key={index} style={styles.popupPhoneNumber}>
            {phoneNumber.number}
          </Text>
        ))}

        <TouchableOpacity
          onPress={closeContactPopup}
          style={styles.dismissButton}
        >
          <Text style={styles.dismissButtonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  popupContactName: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2),
  },
  popupPhoneNumber: {
    fontSize: responsiveFontSize(2),
    color: '#444',
    marginBottom: responsiveHeight(1),
  },
  dismissButton: {
    backgroundColor: '#007AFF',
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  dismissButtonText: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ContactPopup;