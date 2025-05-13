import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const usuario = { email, senha };
    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("Login")}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
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
