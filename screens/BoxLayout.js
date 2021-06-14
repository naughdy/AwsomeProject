/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-eval */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/button';
const BoxLayout = () => {
  const [data, setData] = useState('0');
  const [isPositive, setIsPostive] = useState(false);
  const handleNumberPressed = (value) => {
    if (data == '0') {
      setData(value);
    } else {
      setData(data + value);
    }
  };

  const clear = () => {
    setData('0');
  };

  const equalTo = () => {
    try {
      setData(
        String(eval(data)).length > 3 && String(eval(data)).includes('.')
          ? String(eval(data)).toFixed(4)
          : String(eval(data)),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const plusminus = () => {
    if (isPositive) {
      setData(data.substring(1));
    } else {
      setData('-' + data);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
      }}>
      <Text style={{fontSize: 50, alignSelf: 'flex-end', margin: 20}}>
        {data}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Button
          function={() => clear()}
          text="C"
          color="#d3d3d3"
          textColor="black"
        />
        <Button
          function={() => {
            setIsPostive((prevState) => !prevState);
            plusminus();
          }}
          text="+/-"
          color="#d3d3d3"
          textColor="black"
        />
        <Button
          function={handleNumberPressed}
          text="%"
          color="#d3d3d3"
          textColor="black"
        />
        <Button function={handleNumberPressed} text="/" color="#ffa500" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button function={handleNumberPressed} text="7" />
        <Button function={handleNumberPressed} text="8" />
        <Button function={handleNumberPressed} text="9" />
        <Button function={handleNumberPressed} text="*" color="#ffa500" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button function={handleNumberPressed} text="4" />
        <Button function={handleNumberPressed} text="5" />
        <Button function={handleNumberPressed} text="6" />
        <Button function={handleNumberPressed} text="-" color="#ffa500" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button function={handleNumberPressed} text="1" />
        <Button function={handleNumberPressed} text="2" />
        <Button function={handleNumberPressed} text="3" />
        <Button function={handleNumberPressed} text="+" color="#ffa500" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button function={handleNumberPressed} type="double" text="0" />
        <Button function={handleNumberPressed} text="." />
        <Button function={() => equalTo()} text="=" color="#ffa500" />
      </View>
    </View>
  );
};

export default BoxLayout;
