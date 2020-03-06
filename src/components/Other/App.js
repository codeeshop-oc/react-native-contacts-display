import React from "react";
import List from "./List.js";
import Form from "./Form.js";
import Post from "./Posts.js";
import { Text, View } from 'react-native';

const App = () => (
    <View>  
      <Text>Articles</Text>
      <List />

      <Text>Add a snew article</Text>
      
      <Text>API Posts</Text>

      <Post />
    </View>  
);

export default App;