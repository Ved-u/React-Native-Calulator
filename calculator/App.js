import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DatrkCalculator from './components/DatrkCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <DatrkCalculator style={styles.dim}/>
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
  dim:{
    width:'100%',
    height:"100%"
  }
});
