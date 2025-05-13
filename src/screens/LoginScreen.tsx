import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const usuario = await AsyncStorage.getItem("usuario");

      if (usuario !== null) {
        const dados = JSON.parse(usuario);

        console.log("Email digitado:", email);
        console.log("Senha digitada:", senha);
        console.log("Usuário salvo:", dados);

        if (email === dados.email && senha === dados.senha) {
          Alert.alert("Sucesso", "Login realizado!");
          navigation.replace("TeamSelection"); // ✅ redirecionamento correto
        } else {
          Alert.alert("Erro", "Email ou senha incorretos.");
        }
      } else {
        Alert.alert("Erro", "Nenhum usuário cadastrado.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert("Erro", "Algo deu errado ao tentar logar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("Cadastro")}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#B5191A", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, color: "#fff", marginBottom: 30, textAlign: "center" },
  input: { backgroundColor: "#fff", padding: 12, marginBottom: 20, borderRadius: 8 },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#B5191A",
  },
  buttonText: { color: "#B5191A", fontSize: 16, fontWeight: "bold", textAlign: "center" },
  link: { color: "#fff", textAlign: "center", marginTop: 20, textDecorationLine: "underline" },
});
