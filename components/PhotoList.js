//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image ,ScrollView} from 'react-native';
import datas from '../data.js';
import PhotoSection from './PhotoSection'




// create a component
class PhotoList extends Component {

    state={
        datas: datas
    }


    getPhotos(){
        return this.state.datas.map(data => {
            return <PhotoSection detail={data} key={data.id} />
        })
    }
   

    render() {
        return (
            <ScrollView style={styles.container}>
              {this.getPhotos()}
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  
});

//make this component available to the app
export default PhotoList;
