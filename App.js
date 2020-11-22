import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const[weather, setweather] = useState("loading...");

  const getweather = async() =>{
  if(weather == "loading...")  {
  var res = await fetch('http://192.168.1.14:5001/weatherforecast');
  var data = await res.json();

  setweather(data[0].summary);
}
}
getweather();

  return (
    <View style={styles.container}>
      <Text>{weather}</Text>
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
