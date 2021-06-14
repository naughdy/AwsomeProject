import React from 'react';
import {View, Text, Image} from 'react-native';

const SuccessScreen = (props) => {
  console.log(props);
  return (
    <View style={{justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
      <View style={{marginHorizontal: 20, marginTop: -30}}>
        <Image
          source={{
            uri:
              'https://img.freepik.com/free-vector/welcome-modern-lettering_136321-864.jpg?size=626&ext=jpg',
          }}
          style={{height: 200, width: 300, alignSelf: 'center'}}
        />
        {props.route.params.flag == 'SignedUp' ? (
          <Text style={{alignSelf: 'center', fontSize: 30}}>
            You have successfully Signed Up!
          </Text>
        ) : (
          <Text style={{alignSelf: 'center', fontSize: 30}}>
            You have successfully Signed In!
          </Text>
        )}
      </View>
    </View>
  );
};

export default SuccessScreen;
