import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [euros, setEuros] = useState<string>("");
  const eurosAsNumber: number = !isNaN(Number(euros)) === true ? Number (euros) : 0;
  const krowns = eurosAsNumber * 11;


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Currency calculator</Text>
      <TextInput 
        placeholder= "€"
        keyboardType="number-pad"
        value={euros}
        onChangeText= {setEuros}
      />
      <Text>{krowns.toFixed(2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b55e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
// 