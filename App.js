import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity ,Image} from 'react-native';
import { Touchable } from 'react-native';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import db from './localdb';
import Phonicsoundbutton from './phonicsoundbutton'
console.log(db["the"].chunks)
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
 
} from 'react-native-safe-area-context';


export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:"",
      chunks:[],
    
    }
  }
  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Header 
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Monkey Chunky App', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      
      />
     

<Image style={styles.imageIcon} source={{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}

/>
      <StatusBar style="auto" />
      <TextInput style={styles.inputBox}
onChangeText={(text)=>{
  this.setState({text:text});
}}
value={this.state.text}
/>

<TouchableOpacity style={styles.buttonGo} onPress={()=>{
  this.setState({chunks: db[this.state.text].chunks});
   
}
}>
  <Text style={styles.buttonText}>GO</Text>

</TouchableOpacity>

<View>
  write the map here
</View>



 </View> 
    </SafeAreaProvider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    marginTop:200,
    width:100,
    height: 40,
borderWidth:5,
textAlign:'center'

  },
  buttonGo:{
    width:80,
    height:30,
    padding:15,
    margin:10,
    alignSelf:'center',
    borderWidth:5,
    backgroundColor:'blue'
  },
  buttonText:{
fontSize:10,
alignSelf:'center'
  },
  displayText:{
    textAlign:'center',
    fontSize:20,
    marginTop:20
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 5,
  },
  chunkbutton:{
    backgroundColor:"red",
    width:40,
    height:40,
    marginTop:20,
    alignItems:'center'
  }
});
