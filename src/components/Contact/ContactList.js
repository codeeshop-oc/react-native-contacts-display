import React from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ContactList extends React.Component {
  
  renderItem = ({item}) => (
      <ContactListPure item={item} />
  )

  render() {
    const { contacts } = this.props;
      return (
        <FlatList            
          data={contacts}
          renderItem={this.renderItem}              
          numColumns={1}
          keyExtractor={(item, index) => item.key}
          style={styles.FlatList}
         />
      )    
  }
}

class ContactListPure extends React.PureComponent {

  onPress = () => {
    // console.log(this)
  }

  render() {
    const { item } = this.props;
      return (
        <TouchableOpacity>
          <ListItem
              key={item.key}                
              title={item.name}
              subtitle={item.phone}
              bottomDivider
            />
      </TouchableOpacity> 
      )    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  FlatList: {
    height: 250,
  },
});

export default ContactList