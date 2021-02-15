import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';


const Displaylove = (prop) =>{
    console.log(prop);
        if(prop.data == 'loading'){
            return <Text style={styles.test}>Wait for some time!!</Text>

        }
        if(prop.data.message){
            return <Text style={styles.test}>Soemthing went Wrong!! Please try again later!!</Text>
        }
        else{
            return(
            <View style={styles.container}>
                <Text style={styles.test}>Percentage: {prop.data.percentage}</Text>
                <Text style={styles.test}>Result: {prop.data.result}</Text>
            </View>
           )
        }
        
 
} 

export default Displaylove;


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    test:{
        fontSize: 30,
        textAlign: 'center'
    }
  });