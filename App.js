import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Displaylove from './components/Displaylove';


// functional based Component
// const MyData = (props) =>{
//   return(
//     <View>
//       <Text>{props.name}</Text>
//       <Text>{props.status}</Text>
//     </View>
//   );
// }


// class based Component
class App extends React.Component{
  state ={
    fname: '',
    sname: '',
    result: 'Loading'
  };

  submit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "9a7rDVv3QjmshQrQctZKmU4kNOJap1TCdjnjsnKkx3FMuZ0S7T",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
    .then(data=>data.json())
    .then(data2 => {
      // console.log(data2)
      this.setState({
        result: data2
      })
    })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  }
  render(){
    
    // const diap = ['eat', 'sleep', 'code'];
    // const elements = diap.map(data => {
    //   return <Text>{data}</Text>
    // })
    return(
        // <View style={styles.container}>
        //   {/* {elements} */}
        //   <MyData name="Hemanth" status="Developer"/>
        //   <MyData name="Raj" status="Tester"/>
        //   <MyData name="Kumar" status="Lead"/>
        //   {/* <Text>{elements}</Text> */}
        // </View>
        
        <View style={styles.container}>
            <Appbar.Header>              
                <Appbar.Content title="Love Percentage Calculator" subtitle="Try and Understand your loved once" />             
            </Appbar.Header>
            <TextInput
              style={{marginTop: 100}}
              label="Male Name"
              value={this.state.fname}
              onChangeText={text => this.setState({fname: text})}
            />
             <TextInput
              
              label="Female Name"
              value={this.state.sname}
              onChangeText={text => this.setState({sname: text})}
            />
            <Button icon="notifications" mode="contained"
            style={{margin: 10}}
             onPress={() => this.submit()}>
                  Calculate
            </Button>
            <Displaylove data={this.state.result}/>
          {/* <Text style={{fontSize:30}}>Done by HemanthRaj</Text> */}
        </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
});