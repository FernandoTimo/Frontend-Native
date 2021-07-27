import style from './Timoideas.styles.js';
import React from 'react';
import {Text, TouchableWithoutFeedback, View, Keyboard} from 'react-native';
export function Screen({children}) {
  const handlerPress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
      {children}
    </TouchableWithoutFeedback>
  );
}
export default function Timoideas() {
  return (
    <View style={style.Timoideas}>
      <Text style={style.Title}>Timoideas</Text>
    </View>
  );
}
