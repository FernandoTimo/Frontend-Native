import React from 'react';
import {Text, View} from 'react-native';
import style from './src/styles/app.styles';
import Icon from './src/public/svg/score.svg';
import {Screen} from './src/components/timoideas/Timoideas.component';

export default function App() {
  return (
    <Screen>
      <View style={style.Container}>
        <Icon width={150} height={150} fill={'#111'} />
        <Text style={style.Title}>App</Text>
      </View>
    </Screen>
  );
}
