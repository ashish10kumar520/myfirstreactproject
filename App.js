import React from 'react';
import { StyleSheet, Text,TouchableOpacity,Image,View } from 'react-native';
import { Audio } from 'expo-av';

const listbackgroundcolors={
  1:"#FF3031",
  2: "#26ae60",
  3: "#00CCCD",
  4: "#BB2CD9",
  5: "#0A79DF",
  6: "#FFF222",
  7: "#45CE30",
  8: "#badc57",
  9: "#E74292",
  10: "#4834DF"

}
const soundlist ={
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),
}
export default class App extends React.Component {
  playSound= async number =>{
    const soundObject = new Audio.Sound();
    try{
        let path=soundlist[number]
        await soundObject.loadAsync(path)
        await soundObject
        .playAsync()
        .then( async playbackStatus => {
          setTimeout(() =>{
            soundObject.unloadAsync();
          },playbackStatus.playableDurationMillis);
        })
        .catch(error =>{
          console.log(error)
        })
    } catch(error){
      console.log(error)
    }
  };
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.gridcontainer}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}/>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[1]},styles.item]}
          onPress={() =>{
            this.playSound("one")
          }}>
            <Text style={styles.itemText}>ONE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[2]},styles.item]}
          onPress={() =>{
            this.playSound("two")
          }}>
            <Text style={styles.itemText}>TWO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[3]},styles.item]}
          onPress={() =>{
            this.playSound("three")
          }}>
            <Text style={styles.itemText}>THREE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[4]},styles.item]}
          onPress={() =>{
            this.playSound("four")
          }}>
            <Text style={styles.itemText}>FOUR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[5]},styles.item]}
          onPress={() =>{
            this.playSound("five")
          }}>
            <Text style={styles.itemText}>FIVE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[6]},styles.item]}
          onPress={() =>{
            this.playSound("six")
          }}>
            <Text style={styles.itemText}>SIX</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[7]},styles.item]}
          onPress={() =>{
            this.playSound("seven")
          }}>
            <Text style={styles.itemText}>SEVEN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[8]},styles.item]}
          onPress={() =>{
            this.playSound("eight")
          }}>
            <Text style={styles.itemText}>EIGHT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[9]},styles.item]}
          onPress={() =>{
            this.playSound("nine")
          }}>
            <Text style={styles.itemText}>NINE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listbackgroundcolors[10]},styles.item]}
          onPress={() =>{
            this.playSound("ten")
          }}>
            <Text style={styles.itemText}>TEN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridcontainer:{
    flex:1,
    margin:5
  },
  logo:{
    alignSelf:'center',
    marginTop:15,
  },
  rowContainer:{
    flexDirection:"row",
  },
  item:{
    flex: 1,
    height:110,
    alignItems:'center',
    justifyContent:'center',
    margin:2,
    borderRadius:30
  },
  itemText:{
    color:"#FFF",
    fontSize:20
  }
  
});
