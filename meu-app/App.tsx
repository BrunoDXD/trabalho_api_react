import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './routes/HomeScreen';
import DetailsScreen from './routes/DetailsScreen';
import { Button, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#11111',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '50%',
    borderRadius: 5,
  },
  cepContainer: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '30%',
    borderRadius: 5,
  },
});