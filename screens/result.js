import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'
import startimage from '../assets/start.png'
import resultimage from '../assets/result.png'
import failimage from '../assets/failscore.png'
const Result = ({ navigation, route }) => {
  const {score} = route.params
  //console.log(params)

  return (
    <View style={styles.container}>
    <Title titleText='RESULTS'/>
    <Text style={styles.scoreText}>{score}</Text>
     <View style={styles.bannerContainer}>
         {
           score>40 ? <Image style={styles.banner} resizeMode='contain' source={failimage}/> :<Image style={styles.banner} resizeMode='contain' source={resultimage }/>
         }
     </View>
     <TouchableOpacity 
     onPress={()=>navigation.navigate("Quiz")}
     style={styles.button}>
          <Text style={styles.buttonText}>Go To Home</Text>
     </TouchableOpacity>
   </View>
  )
}

export default Result

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
  },
  scoreText:{
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center'
  }
})