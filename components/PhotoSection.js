//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

// create a component
class PhotoSection extends Component {
    state={
        heartIcon: 'ios-heart-empty',
        like:false
    }

    toggleLike=()=>{
       this.setState({
           like:!this.state.like
       })

       if(this.state.like){
           this.setState({
               heartIcon:'ios-heart'
           })
       }else{
        this.setState({
            heartIcon:'ios-heart-empty'
        })
       }
    }

    render() {
       
        return (
            <View style={styles.container}>
                 <View style={styles.thumbnailSection}>
                            <Image style={styles.thumbnail} source={{uri: this.props.detail.user_avatar}} />    
                            <Text style={styles.headUserName} >
                                {this.props.detail.username}
                            </Text>     
                 </View>

                 <View>
                     <Image style={{width:null,height:250, borderRadius:10}} source={{uri: this.props.detail.image}} />
                 </View>

                 <View style={styles.heartContainer}>
                     <TouchableWithoutFeedback onPress={this.toggleLike} >
                         <Icon name={this.state.heartIcon} size={32} style={{color:this.state.heartIcon === "ios-heart-empty" ? 'black' :'red'}}/>
                     </TouchableWithoutFeedback>
                 </View>

                 <View style={styles.imageMeta} >
                     <Text style={styles.username}>
                        {this.props.detail.username}
                     </Text>
                     <Text>
                         {this.props.detail.caption}
                     </Text>
                 </View>


            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      margin:5,
      backgroundColor:'#f1f2f6',
  
      
    },
    headUserName:{
         fontWeight:'bold',
         fontSize:19,
         marginLeft:10
    },

    

    thumbnailSection:{
        flexDirection:'row',
        padding:5,
        alignItems:'center'
    },
    thumbnail:{
        width:50,
        height:50,
        borderRadius:25
    },
    username:{
        fontWeight:'bold',
        paddingRight:10
    },
    heartContainer:{
        paddingTop:10,
        paddingBottom:10
    },
    imageMeta:{
        flexDirection:'row'
    }
});

//make this component available to the app
export default PhotoSection;
