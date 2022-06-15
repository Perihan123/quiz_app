import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Title  from '../components/title'
import startimage from '../assets/start.png'
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Title titleText='QUIZLERR'/>
      <View style={styles.bannerContainer}>
          <Image source={startimage} 
          style={styles.banner} resizeMode='contain'/>
      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("Quiz")}
      style={styles.button}>
           <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },
  banner:{
    height:300,
    width:300,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
 
  },
  button:{
    width:'100%',
    backgroundColor:'#D7A5B1',
    padding:20,
    borderRadius:16,
    margin:5,
    alignItems:'center'
  },
  buttonText:{
     fontSize:24,
     fontWeight:'600',
     color:'white'
  }
})