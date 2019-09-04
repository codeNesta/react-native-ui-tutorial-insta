//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotoList from './components/PhotoList';
import Heading from './components/Heading'

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Heading/>
       <PhotoList/>       
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
