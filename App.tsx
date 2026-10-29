import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [age, setAge] = useState<string>(""); //asettaa käyttäjän antaman arvon age muuttujalle ja päivitää sen setAge-funktiolla
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0;
  const maximumHeartrate: number = ageAsNumber > 0 ? 220 - ageAsNumber : 0; // vertailee mikäli ageasnumber on 0 muutetaan maksimisyke 0
  const lowerlimit: number = (maximumHeartrate) * 0.65; //suorittaa lowerlimit laskennan
  const upperlimit: number = (maximumHeartrate) * 0.85; //suorittaa upperlimit laskennan

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>testing this position</Text>
      <TextInput 
        style={styles.input}
        placeholder= "Enter your age"
        keyboardType="number-pad"
        value={age} //asettaa TextInputin arvoksi age muuttujan
        onChangeText= {setAge} //päivittää age-muuttujan käyttäjän syötteen perusteella
      />
      <Text> lowerlimit: {lowerlimit.toFixed(0)}</Text>
      <Text> upperlimit: {upperlimit.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d61851',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    borderWidth: 5,
    borderColor: 'black',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    width: '80%',
  }
});
// 