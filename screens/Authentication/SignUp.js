import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
const regex = /[0-9]/g;
const SignUp = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 25}}>Welcome Back, Sign Up To Continue</Text>
        <TextInput
          value={username}
          label="Username"
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={email}
          label="Email"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={password}
          label="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={phone}
          label="Phone Number"
          onChangeText={(text) => {
            if (regex.test(text)) {
              setPhone(text);
            }
          }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
        />
        <Button
          onPress={() => {
            props.navigation.navigate('SuccessScreen', {flag: 'SignedUp'});
          }}>
          <Text>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
};

export default SignUp;
