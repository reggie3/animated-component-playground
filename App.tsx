import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import { ButtonText } from './ButtonText';

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={()=>console.log('pressed')}><ButtonText>Hello</ButtonText></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
