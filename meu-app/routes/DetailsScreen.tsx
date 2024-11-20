import { Alert, Button, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

const API_URL='http://localhost:3000/usuarios'
const API_URL_prod='http://localhost:3000/produtos'

function InicioScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#231d1b', }}>
        <Image source={require('../img/logo.jpg')} style={{ height: 700, width: 700 }} />
      </View>
    );
  }
  
  function UsuariosScreen() {

    
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [usuario, setUsuario] = useState('');
      const [senha, setSenha] = useState('');
    
      const salvarDadosUser = async () => {
        if (!nome || !email || !usuario || !senha) {
          Alert.alert('Erro', 'Todos os campos são obrigatórios!');
          return;
        }
    
        const novoUsuario = { nome, email, usuario, senha };
    
        try {
          // Envia os dados para a API (POST)
          const response = await axios.post(API_URL, novoUsuario);
    
          // Verifica se o retorno foi bem-sucedido
          if (response.status === 201) {
            Alert.alert('Sucesso', 'Dados salvos com sucesso!');
            resetForm();  // Reseta o formulário
          } else {
            Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados!');
          }
        } catch (error) {
          console.error(error);
          Alert.alert('Erro', 'Ocorreu um erro ao conectar com a API!');
        }
      };
    
      const resetForm = () => {
        setNome('');
        setEmail('');
        setUsuario('');
        setSenha('');
      };
    
    
    return (
      <View style={styles.container}>
        <Text>Nome</Text>
        <TextInput
        value={nome}
        style={styles.input}
        onChangeText={setNome}
        keyboardType='default'
        />
        <Text>E-mail</Text>
        <TextInput
        value={email}
        style={styles.input}
        onChangeText={setEmail}
        keyboardType='email-address'
        />
        <Text>Usuário</Text>
        <TextInput
        value={usuario}
        style={styles.input}
        onChangeText={setUsuario}
        keyboardType='default'
        />
        <Text>Senha</Text>
        <TextInput
        value={senha}
        style={styles.input}
        onChangeText={setSenha}
        secureTextEntry
        />
        <Button title="Salvar" onPress={salvarDadosUser}/>
      </View>
    );
  }

  function ProdutosScreen() {

    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const salvarDadosProd = async () => {
      if (!descricao || !preco || !categoria || !quantidade) {
        Alert.alert('Erro', 'Todos os campos são obrigatórios!');
        return;
      }
  
      const novoProduto = { descricao, preco, categoria, quantidade };
  
      try {
        // Envia os dados para a API (POST)
        const response = await axios.post(API_URL_prod, novoProduto);
  
        // Verifica se o retorno foi bem-sucedido
        if (response.status === 201) {
          Alert.alert('Sucesso', 'Dados salvos com sucesso!');
          resetForm();  // Reseta o formulário
        } else {
          Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados!');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao conectar com a API!');
      }
    };
  
    const resetForm = () => {
      setDescricao('');
      setPreco('');
      setCategoria('');
      setQuantidade('');
    };
  
    return (
      <View style={styles.container}>
        <Text>Descrição</Text>
        <TextInput
        value={descricao}
        style={styles.input}
        onChangeText={setDescricao}
        keyboardType='default'
        />
        <Text>Preço</Text>
        <TextInput
        value={preco}
        style={styles.input}
        onChangeText={setPreco}
        keyboardType='default'
        />
        <Text>Categoria</Text>
        <TextInput
        value={categoria}
        style={styles.input}
        onChangeText={setCategoria}
        keyboardType='default'
        />
        <Text>Quantidade</Text>
        <TextInput
        value={quantidade}
        style={styles.input}
        onChangeText={setQuantidade}
        keyboardType='default'
        />
        <Button title="Salvar" onPress={salvarDadosProd}/>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();


export default function DetailsScreen() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Início" component={InicioScreen} />
        <Tab.Screen name="Usuários" component={UsuariosScreen} />
        <Tab.Screen name="Produtos" component={ProdutosScreen} />
      </Tab.Navigator>
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

