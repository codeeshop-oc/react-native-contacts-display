import React from 'react';
import { Text, PermissionsAndroid, View, TextInput, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
// import GetAllPermissions from './src/GetAllPermissions.js'
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Contacts from 'react-native-contacts';
import ContactList from './src/components/Contact/ContactList.js'

import { SearchBar, Input, Card, Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: 'red',
    },
  },
};

class App extends React.Component {

  constructor(props: Props) { 
    super(props); 
    this.filterContactsInput = this.filterContacts.bind(this);
    this.state = {
      loading: true,
      contacts: [],
      permissions: [],
    }
  }

  filterContacts(phoneNumber = '') {
    this.setState({
      loading: true,
      contacts: [],
    })

    Contacts.getContactsByPhoneNumber(phoneNumber, (err, allContacts) => {
      if (err) {
        throw err;
      }
        
      let newContacts = [];
      let newobj;

      allContacts.map((contact, key) => {
        newobj = {}
        newobj.key = key;
        newobj.name = contact.givenName + (contact.familyName ? ' ' + contact.familyName : '');
        if( typeof contact.phoneNumbers!= 'undefined' && typeof contact.phoneNumbers[0] != 'undefined' && typeof contact.phoneNumbers[0].number != 'undefined') {
          newobj.phone = contact.phoneNumbers[0].number;
        } else {
          newobj.phone = '';
        }
        newContacts.push(newobj);
      })

      this.setState({
        loading: false,
        contacts: newContacts
      })
    })
  }

  requestPermissions() {
    PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_CONTACTS, PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION]).then((result) => {
      // console.log('result', result);
      return result;
    })
  }
  async componentDidMount() {
    let res = await this.requestPermissions()

    this.filterContacts('')  
  }
  
  render() {

    const { loading, contacts } = this.state

    return(
      <ThemeProvider theme={theme}>
        <Card>
          <Input
            placeholder='Search Phone Number'
            leftIcon={
              <Icon
                name='phone'
                size={18}
                color='black'
              />
            }
            rightIcon={ loading && 
              <Icon
                name='spinner'
                size={18}
                color='black'
              />
            }
            onChangeText = {this.filterContactsInput}
            label='Search Phone Number'
          />

          { !loading && contacts.length > 0 && 
            <ContactList contacts={contacts} />
          }
        </Card>
      </ThemeProvider>
    );
  }
};

export default App;
  