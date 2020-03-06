import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/index";
import { ListItem, Text, View } from 'react-native';

export class Post extends Component {
  componentDidMount() {
    this.props.getData();    
  }
  render() {
    return (
      <View> 
        { 
          this.props.length > 0 && 
          this.props.articles.map(el => (
            <ListItem
              key={el.id}        
              title={el.title}     
              bottomDivider
            />
          ))
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.remoteArticles, 'state.remoteArticles')
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);