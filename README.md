## React Native Contact App
This is a simple React Native application that displays a list of contacts and allows searching for contacts by name. It also provides a contact popup for viewing contact details when a contact is selected.


## Note: My App is Working but i am facing some issues with my laptop and code editor so i can't provide apk link but I can give working video link and photos of my app.
https://drive.google.com/file/d/132-hpcb98dR52xA3h8PYXdXZevNY-D6H/view?usp=sharing
(Below i have given the photo of the QR code, by scanning which you can see the app)
## I know how to genrate apk in expo-cli and in react-native-cli. (Below are the given working photos of my app)

I can provide the steps for genrating apk file of myContacts app 
```npm install -g eas-cli```
```eas build -p android```
Then take some time and apk genrates in expo website (we need login id and passwerd)

# Here is explanation of my whole code
## Development Tools
# Expo CLI: A command-line tool for creating and managing Expo projects.
```npm i -g eas-cli expo-cli```

## Features
1. Fetches contacts from the device using Expo Contacts API.

2. Displays a loading indicator while fetching contacts.

3. Allows searching for contacts by name using a search input.

4. Sorts the contacts alphabetically.

5. Displays contact information including name and phone numbers.

6. Displays a contact popup when a contact is selected, showing detailed contact information.

7. Provides a dismiss button to close the contact popup.

8. Includes a plus button for adding new contacts (currently not implemented).

## Setup
First Create a Folder Contact App

```npx create-expo-app myContacts```

```cd myContacts```

```npx expo install react-dom react-native-web @expo/webpack-config```

Run the mobile and web application:
```npx expo start```
```npm start```
This will start the Metro bundler. we can run the app on an Android or iOS device using the Expo client app or an emulator.

## Dependencies
1. React Native: A JavaScript framework for building native mobile applications.

2. Expo Contacts: A module for accessing and manipulating contacts on a user's device.
```npm i expo-contacts```

3. React Native Animatable: A declarative library for creating animations in React Native.
```npm i react-native-animatable```

4. React Native Responsive Dimensions: A library for responsive design in React Native applications.
```npm i react-native-responsive-dimensions```


## This app take permission for Allow Contacts from your Device.

## Compontents File Structure(IN App)
# 1. App.js:
 The main entry point of the application. It manages the state, fetches contacts, and renders the search input, contact list, and contact popup components.

Explanation of index.js:-
The code represents the main component of the application (App). Let's break it down:
(a). The code begins with importing various components, libraries, and styles required for the application.

(b). The App component is defined as a functional component using the useState and useEffect hooks.

(c). Inside the App component, state variables are declared using the useState hook. These variables are:
                searchQuery: Stores the value of the search query entered by the user.
                contacts: Stores the list of contacts, initially populated with data from contactsData (a temporary data source).
                selectedContact: Stores the currently selected contact for displaying the contact popup.
                
(d). The useEffect hook is used to fetch the contacts when the component mounts. It calls the fetchContacts function.

(e). The fetchContacts function is an asynchronous function that requests permission to access contacts using the Contacts.requestPermissionsAsync method. If the permission is granted, it retrieves the contacts using Contacts.getContactsAsync. The fetched contacts are then stored in the contacts state variable. Finally, the loading state is set to false.

(f). The searchContacts function filters the contacts based on the search query entered by the user. It uses the Array.filter method to check if the contact's name includes the search query. The contacts are also sorted alphabetically using the Array.sort method and localeCompare function.

(g). The openContactPopup function sets the selectedContact state variable to the provided contact, which triggers the display of the contact popup.

(h).The closeContactPopup function resets the selectedContact state variable to null, which hides the contact popup.

(i). The renderPlusButton function renders a TouchableOpacity component with a plus icon. Currently, it logs a message to the console when pressed.

(j). In the JSX returned by the App component, a SafeAreaView and a View component are used to wrap the content.

(k). Inside the main content, a ScrollView is used to allow scrolling of the contacts list. The title "Contacts" is displayed as a Text component.

(l). A TextInput component is rendered to input the search query. Its value is controlled by the searchQuery state variable, and the onChangeText prop updates the searchQuery state.

(m). The ContactList component is rendered, passing the filtered contacts and the openContactPopup function as props.

(n). The ContactPopup component is rendered, passing the selected contact and the closeContactPopup function as props.

(o). The renderPlusButton function is called to render the plus button, allowing the addition of a new contact.

Finally, the styles for the components are defined using the StyleSheet.create method.

## Components Folder Files

# 1. ContactList.js: Renders the contact list based on the provided contacts array. It maps each contact to a contact item component.

Explanation of ContactList.js:-
This code defines the ContactList component, which is responsible for rendering the list of contacts.

(a). contacts: This prop represents the array of contacts to be rendered.

(b). openContactPopup: This prop is a callback function that is called when a contact is pressed. It is used to open the contact popup and display the details of the selected contact.

(c). The component defines a function renderContacts that maps over the contacts array and generates a TouchableOpacity component for each contact.

(d). Inside each TouchableOpacity:
     Animatable.View: This component wraps the Feather icon from the @expo/vector-icons package. It applies an animation effect to the icon using 
     the pulse animation from react-native-animatable library. The animation is set to loop infinitely.

     View: This component contains the contact's name and phone numbers.

     Text (contactName): This component displays the contact's name. It uses the contact.name value to display the name.

     Text (phoneNumber): This component displays each phone number associated with the contact. It uses the contact.phoneNumbers array and the map 
     function to generate a Text component for each phone number. The key prop is set to the index value to ensure unique keys for each item.


# 2. ContactPopup.js: Renders the contact popup with detailed contact information when a contact is selected. It receives the selected contact as a prop and provides a dismiss button to close the popup.

Explanation of ContactPopup.js:-

(a). selectedContact: This prop represents the currently selected contact. It is used to conditionally render the popup based on whether a contact is selected or not.

(b). closeContactPopup: This prop is a callback function that is called when the user dismisses the contact popup. It is used to close the popup and clear the selected contact.

(c). The visible prop is set to selectedContact !== null to show the popup only when a contact is selected.

(d). popupContactName: This Text component displays the name of the selected contact. The text is obtained from selectedContact?.name, which uses optional chaining to handle cases where selectedContact is null or undefined.

(e). popupPhoneNumber: This Text component renders each phone number associated with the selected contact. It uses the map function to iterate over the phoneNumbers array and generates a Text component for each phone number. The key prop is set to the index value to ensure unique keys for each item.

(f). dismissButton: This TouchableOpacity component is a button that triggers the closeContactPopup callback when pressed. It has a background color, padding, borderRadius, and marginTop defined by the styles.dismissButton style.

(g). dismissButtonText: This Text component displays the text "Dismiss" inside the dismiss button. It has a white color defined by the styles.dismissButtonText style.

(h). the values are defined using the responsiveFontSize, responsiveHeight, and responsiveWidth functions provided by the react-native-responsive-dimensions library. These functions allow for responsive styling based on the device's screen dimensions.


# 3. ContactData.js: Contains a sample array of contact data for testing purposes.
  # NOTE: In this file, I take some examples of contacts name and number data for better understanding.

5. Other necessary dependencies and styling files.

## Assets
1. App icon
2. App name
3. splash images

## If you want to see my app than please intall expo-go app from play store and scan the given QR code.
![myContact App QR Code](https://github.com/mukesh98ch/myContactApp/assets/122161959/407a19c7-a8c6-4eb8-8c26-34b5341f0b87)

## Working App Photo(Contact Data is just for understanding the features of app)
![Safeimagekit-resized-img (3)](https://github.com/mukesh98ch/myContactApp/assets/122161959/2457bb9b-450c-4b3c-8866-9e794de7f962)

![Safeimagekit-resized-img (1)](https://github.com/mukesh98ch/myContactApp/assets/122161959/93d107ad-e11a-4fff-80ed-51cef0c34d7e)
![Safeimagekit-resized-img](https://github.com/mukesh98ch/myContactApp/assets/122161959/9c489351-1081-4386-9375-01881ba85489)
![Safeimagekit-resized-img (2)](https://github.com/mukesh98ch/myContactApp/assets/122161959/b0cdd71a-0e26-4a18-b59a-d5058629956a)

