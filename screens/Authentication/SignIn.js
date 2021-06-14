import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

SignIn =(props)=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const validate = () => {
      console.log(username,password)
        if(username=="neha"&& password=="1234"){
          props.navigation.navigate('SuccessScreen',{flag:'SignedIn'})
        }else{
          Alert.alert(
            "Error",
            "Oops! You enter the wrong username or password",
            { cancelable: true }
          );
        }
    }
    return (
      <View style={{justifyContent:'center',flex:1}}>
        <View style={{margin:20}}>
          <Text style={{fontSize:25}}>Welcome Back, Sign In To Continue</Text>
          <TextInput
            value={username}
            label='Username'
            onChangeText={(text)=>setUsername(text)}
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
           <TextInput
            value={password}
            label='Password'
            onChangeText={(text)=>setPassword(text)}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
          <Button onPress={validate}>
            <Text>
              Sign In
            </Text>
          </Button>
          </View>
      </View>
    );
}

export default SignIn;
