import React from "react";
import { connect } from "react-redux";
import { ListItem, Text, View } from 'react-native';

const mapStateToProps = state => {
  console.log(state.articles, 'state.articless')
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <View>
  {
    articles.map(el => (
      <ListItem
        key={el.id}        
        title={el.title}        
        bottomDivider
      />
    ))
  }
</View>

);

const List = connect(mapStateToProps)(ConnectedList);

export default List;