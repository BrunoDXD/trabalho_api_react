import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL='http://localhost:3000/usuarios'
const App=()=>{
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[editingId, setEditingId] = useState(null);
  useEffect(()=>{
    fetchUsers();
  },[]);
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
