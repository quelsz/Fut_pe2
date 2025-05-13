import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import logo from "../assets/logo.png"; // ajuste o caminho se necessário

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao nosso App!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")} // Navega para a tela de login
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cadastro")} // Navega para a tela de cadastro
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B5191A",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#B5191A",
    marginTop: 10,
  },
  buttonText: {
    color: "#B5191A",
    fontSize: 16,
    fontWeight: "bold",
  },
});
