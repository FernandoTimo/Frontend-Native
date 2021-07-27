import React from 'react';
import {Text, View} from 'react-native';
import style from './src/styles/app.styles';
import Icon from './src/public/svg/icon.svg';
import {Screen} from './src/components/timoideas/Timoideas.component';

export default function App() {
  return (
    <Screen>
      <View style={style.Container}>
        <Icon width={30} height={30} fill={'#111'} />
        <Text style={style.Title}>App</Text>
      </View>
    </Screen>
  );
}
