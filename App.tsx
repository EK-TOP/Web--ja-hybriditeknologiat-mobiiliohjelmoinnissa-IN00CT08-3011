import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import dummyData from './data/dummyData';
import Row from './components/Row';

export default function App() {
  return (
    <View style={styles.container}>
      {dummyData.map((item, index) => (
        <Row
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      <StatusBar style="auto" />
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
