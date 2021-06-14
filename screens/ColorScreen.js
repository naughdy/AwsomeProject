import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorDetails from '../components/ColorDetails';
const reducer = (state, action) => {
  // state = red:0 , green: 0 , blue: 0
  // action = colorToChange: 'red'||'green'||'blue , amount: 15 || -15

  switch (action.colorToChange) {
    case 'Red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};
    case 'Green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};
    case 'Blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

// return {...state,number:state.number + action.amount};

const ColorScreen = (props) => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return (
    <View>
      <ColorDetails
        increment={() => dispatch({colorToChange: 'Red', amount: 15})}
        decrement={() => dispatch({colorToChange: 'Red', amount: -15})}
        color="Red"
      />
      <ColorDetails
        increment={() => dispatch({colorToChange: 'Green', amount: 15})}
        decrement={() => dispatch({colorToChange: 'Green', amount: -15})}
        color="Green"
      />
      <ColorDetails
        increment={() => dispatch({colorToChange: 'Blue', amount: 15})}
        decrement={() => dispatch({colorToChange: 'Blue', amount: -15})}
        color="Blue"
      />
      <View
        style={[
          styles.ColorView,
          {backgroundColor: `rgb(${state.red},${state.green},${state.blue})`},
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ColorView: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default ColorScreen;
